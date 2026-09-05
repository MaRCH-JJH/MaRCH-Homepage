# Hashes a string with SHA-256 at build time, so a value like the Resources
# page password can be stored as plain text in the CMS (easy to edit) while
# only its hash ever reaches the built HTML -- the plaintext never appears
# in page source or devtools.
#
# This raises the bar over shipping the plaintext directly, but it is not
# real security: it's a client-side comparison with no server and no rate
# limiting, so a short/numeric password (e.g. a 4-digit PIN) can still be
# brute-forced against the visible hash in well under a second from the
# browser console. Use a longer, non-numeric password for anything beyond
# "keep casual visitors out."
require "digest"

module Jekyll
  module Sha256Filter
    def sha256(input)
      Digest::SHA256.hexdigest(input.to_s)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Sha256Filter)
