# Decap CMS GitHub OAuth Worker

`/admin/`(Decap CMS)의 "Login with GitHub" 버튼이 동작하려면, GitHub의 OAuth 코드를
access token으로 교환해주는 서버가 하나 필요합니다(GitHub OAuth는 `client_secret`을
브라우저에 노출하면 안 되므로, 이 교환 과정은 반드시 서버에서 해야 합니다).
`worker.js`가 그 서버 역할을 하는 Cloudflare Worker입니다.

**반드시 본인 소유의 GitHub OAuth App과 Cloudflare Worker로 새로 만들어야 합니다.**
다른 사람(친구 등)이 만든 것을 그대로 쓰면, 그 사람 계정 기준으로 설정된
콜백 URL/클라이언트 정보와 실제 로그인하는 사람이 어긋나서 404 등의 오류가 납니다.

## 1. GitHub OAuth App 만들기

1. GitHub 우측 상단 프로필 → **Settings**
2. 왼쪽 메뉴 맨 아래 **Developer settings** → **OAuth Apps** → **New OAuth App**
3. 아래와 같이 입력:
   - **Application name**: 예) `MaRCH Lab CMS`
   - **Homepage URL**: `https://march-jjh.github.io/MaRCH-Homepage/`
   - **Authorization callback URL**: `https://<나중에 만들 워커 주소>.workers.dev/callback`
     (3번 단계에서 워커를 배포한 뒤 실제 주소로 다시 와서 정확히 채워 넣어야 합니다)
4. **Register application** 클릭
5. 생성된 화면에서 **Client ID**를 복사해둡니다.
6. **Generate a new client secret** 클릭 → 생성된 **Client Secret**을 복사해둡니다
   (이 화면을 벗어나면 다시 볼 수 없으니 꼭 지금 저장하세요).

## 2. Cloudflare Worker 배포하기

### 방법 A. Cloudflare 대시보드에서 바로 배포 (가장 간단, CLI 설치 불필요)

1. https://dash.cloudflare.com 로그인 (계정 없으면 무료 가입)
2. **Workers & Pages** → **Create** → **Create Worker**
3. 이름을 정하고(예: `march-lab-cms-oauth`) 생성
4. 편집기가 열리면 기존 코드를 전부 지우고 이 폴더의 `worker.js` 내용을 그대로 붙여넣기
5. **Deploy** 클릭 → 배포되면 `https://march-lab-cms-oauth.<your-subdomain>.workers.dev` 같은 주소가 발급됩니다. 이 주소를 기록해두세요.
6. 방금 만든 워커의 **Settings** → **Variables and Secrets** → **Add**
   - `GITHUB_CLIENT_ID` = 1단계에서 복사한 Client ID (Secret으로 추가)
   - `GITHUB_CLIENT_SECRET` = 1단계에서 복사한 Client Secret (Secret으로 추가)
   - 저장 후 재배포(또는 자동 반영)

### 방법 B. wrangler CLI 사용 (Node.js 있는 경우)

```bash
cd oauth-worker
npm install -g wrangler   # 이미 있으면 생략
wrangler login
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
wrangler deploy
```

배포 후 출력되는 URL(`https://march-lab-cms-oauth.<subdomain>.workers.dev`)을 기록합니다.

## 3. GitHub OAuth App의 콜백 URL 최종 확정

1단계에서 임시로 비워뒀던 **Authorization callback URL**을, 2단계에서 실제로 받은 워커 주소 뒤에
`/callback`을 붙인 값으로 정확히 수정합니다.

예: `https://march-lab-cms-oauth.your-subdomain.workers.dev/callback`

## 4. `admin/config.yml` 연결

`backend:` 블록을 아래처럼 수정합니다 (`client_id`는 더 이상 필요 없으므로 제거합니다 —
Decap CMS의 `github` 백엔드는 `client_id`를 config.yml에서 읽지 않고, 워커가 서버 쪽에서
비밀로 관리합니다):

```yaml
backend:
  name: github
  repo: MaRCH-JJH/MaRCH-Homepage
  branch: main
  base_url: https://march-lab-cms-oauth.your-subdomain.workers.dev
```

## 5. 테스트

1. `https://march-jjh.github.io/MaRCH-Homepage/admin/` 접속
2. **Login with GitHub** 클릭 → GitHub 인증 화면 → **Authorize** 클릭
3. 팝업이 자동으로 닫히고 CMS 대시보드가 뜨면 성공입니다.

## 문제 해결

| 증상 | 원인 | 해결 |
|---|---|---|
| GitHub에서 "redirect_uri is not associated with this application" | OAuth App의 콜백 URL과 워커 주소가 다름 | 3단계 다시 확인 |
| 팝업이 뜨고 로그인해도 계속 로딩만 됨 | 워커 시크릿(`GITHUB_CLIENT_ID`/`GITHUB_CLIENT_SECRET`) 미설정 또는 오타 | Cloudflare 대시보드에서 값 재확인 |
| 워커는 200/302를 정상 반환하는데 GitHub 인증 화면에서 404 | `GITHUB_CLIENT_ID` 시크릿 끝에 공백/줄바꿈이 섞여 들어감(GitHub 페이지에서 복사할 때 흔히 발생) — `/auth`가 리다이렉트하는 URL을 직접 열어보면 `client_id=...%20`처럼 값 끝에 `%20`이 붙어 있는 것으로 확인 가능 | Cloudflare 대시보드에서 `GITHUB_CLIENT_ID` 값을 삭제 후, 텍스트 에디터에 먼저 붙여넣어 앞뒤 공백이 없는지 확인한 값으로 재입력. `GITHUB_CLIENT_SECRET`도 같은 실수가 있을 수 있으니 함께 재확인 |
| GitHub 인증(404 없음)까지는 성공하는데, 팝업이 닫힌 뒤 관리자 페이지가 로그인 화면에서 전혀 바뀌지 않음 | `/callback`이 postMessage 핸드셰이크 없이 GitHub 토큰 교환 응답(JSON)을 그대로 반환하는 구현임 — `curl ".../callback?code=test"`로 확인 시 `Content-Type: application/json`에 `{"access_token":...}` 또는 GitHub 에러 JSON이 그대로 나오면 이 문제. Decap CMS는 팝업이 `window.opener.postMessage("authorization:github:success:...")`를 직접 보내야만 로그인 완료로 인식하는데, JSON만 반환하는 워커는 이 메시지를 보내지 않음 | 워커 코드를 이 저장소의 `oauth-worker/worker.js`로 교체 배포 (base_url/시크릿은 그대로 유지, config.yml 수정 불필요) |
| 로그인은 되는데 저장(Publish)이 안 됨 | 로그인한 GitHub 계정이 이 저장소에 쓰기 권한이 없음 | 저장소 Settings → Collaborators에서 권한 부여 |
| 워커 주소(`https://.../` 루트)를 브라우저에 직접 쳐보면 404 | 정상입니다. `/`는 로그인 흐름에서 쓰이지 않는 경로라 원래 404였는데, 확인용으로 헷갈리지 않도록 지금은 간단한 상태 메시지를 반환하도록 고쳐뒀습니다. 실제로 확인해야 할 건 `/auth`(302로 GitHub 인증 화면으로 이동하는지)와 실제 `/admin/` 로그인 동작입니다 | 최신 `worker.js`로 재배포하면 `/`도 200을 반환합니다 |
