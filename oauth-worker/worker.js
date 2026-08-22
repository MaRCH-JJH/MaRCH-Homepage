// Decap CMS "github" backend OAuth provider, implemented as a Cloudflare Worker.
//
// This replaces a third party's worker (e.g. a friend's) with one you fully own:
// the GitHub OAuth App and the two secrets below must belong to you, not anyone else.
//
// Required Worker secrets (set via `wrangler secret put <NAME>` or the
// Cloudflare dashboard -> Workers & Pages -> your worker -> Settings -> Variables):
//   GITHUB_CLIENT_ID      - from your GitHub OAuth App
//   GITHUB_CLIENT_SECRET  - from your GitHub OAuth App
//
// Your GitHub OAuth App's "Authorization callback URL" must be exactly:
//   https://<your-worker-subdomain>.workers.dev/callback

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth" || url.pathname === "/authorize") {
      return handleAuth(url, env);
    }

    if (url.pathname === "/callback") {
      return handleCallback(url, env);
    }

    if (url.pathname === "/") {
      // Not part of the OAuth flow -- just a friendly health check so
      // opening the bare worker URL in a browser doesn't look broken.
      return new Response("Decap CMS OAuth Proxy is running!");
    }

    return new Response("Not found", { status: 404 });
  },
};

function handleAuth(url, env) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response("Missing GITHUB_CLIENT_ID secret", { status: 500 });
  }

  const redirectUri = `${url.origin}/callback`;
  const scope = url.searchParams.get("scope") || "repo,user";

  const githubAuthUrl =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${encodeURIComponent(env.GITHUB_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}`;

  return Response.redirect(githubAuthUrl, 302);
}

async function handleCallback(url, env) {
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response("Missing code parameter", { status: 400 });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error || !tokenData.access_token) {
    return htmlResponse(
      renderCallbackPage("error", {
        message: tokenData.error_description || tokenData.error || "OAuth token exchange failed",
      })
    );
  }

  return htmlResponse(
    renderCallbackPage("success", { token: tokenData.access_token, provider: "github" })
  );
}

function htmlResponse(html) {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// This exact two-way postMessage handshake ("authorizing:github" ping, then the
// opener echoes it back, then this page sends the final success/error payload)
// is what Decap CMS's NetlifyAuthenticator expects from a self-hosted OAuth
// provider -- it is not optional decoration, the login will hang without it.
function renderCallbackPage(status, payload) {
  const message =
    status === "success"
      ? `authorization:github:success:${JSON.stringify(payload)}`
      : `authorization:github:error:${JSON.stringify(payload)}`;

  return `<!doctype html>
<html>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      ${JSON.stringify(message)},
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body>
</html>`;
}
