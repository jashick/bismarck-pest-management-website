#!/usr/bin/env bash
# Build and upload to SiteGround.
#   ./publish.sh          build + upload to STAGING (always do this first)
#   ./publish.sh --live   build + upload to the LIVE site (only when the client/Jeremy approves)
set -euo pipefail
cd "$(dirname "$0")"
PROJECT="$(pwd)"
NAME="$(basename "$(dirname "$PROJECT")")"
WORK="${SITE_BUILD_DIR:-${TMPDIR:-/tmp}/site-build-$NAME}"
./build.sh
if [ "${1:-}" = "--live" ]; then CRED="$PROJECT/../.ftp-live.txt"; echo "Publishing to LIVE"; else CRED="$PROJECT/../.ftp-staging.txt"; echo "Publishing to STAGING"; fi
[ -f "$CRED" ] || { echo "Missing $CRED (line 1 FTP username, line 2 password)"; exit 1; }
DIST="$WORK/dist" FTP_CRED="$CRED" python3 "$PROJECT/deploy.py"
