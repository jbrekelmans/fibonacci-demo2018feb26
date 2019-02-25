#!/usr/bin/env bash
set -euo pipefail
apt-get -qq update -y
apt-get -qq install -y --no-install-recommends jq
# Obtain the OAuth2 token injected by Cloud Build into the docker config (for pulling and pushing images).
# We will repurpose this token for curling Cloud Storage when building the final image.
TOKEN=$(jq '.auths["https://asia.gcr.io"].auth' --raw-output /builder/home/.docker/config.json | base64 -d)
OAUTH2_PREFIX='oauth2accesstoken:'
# Assert that this is indeed on OAuth2 token.
[[ $TOKEN == "$OAUTH2_PREFIX"* ]]
OAUTH2_TOKEN=${TOKEN#$OAUTH2_PREFIX}
echo "$OAUTH2_TOKEN" > token.txt
echo "The OAuth2 token has ${#OAUTH2_TOKEN} bytes"