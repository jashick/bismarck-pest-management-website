#!/usr/bin/env bash
# Build the site in a temporary copy of the project (nothing in this folder gets deleted).
#   ./build.sh            build only; prints where dist/ is
#   ./build.sh --preview  also refresh ../preview/ : double-click ../preview/index.html to view it, no server needed
set -euo pipefail
cd "$(dirname "$0")"
PROJECT="$(pwd)"
NAME="$(basename "$(dirname "$PROJECT")")"
WORK="${SITE_BUILD_DIR:-${TMPDIR:-/tmp}/site-build-$NAME}"
mkdir -p "$WORK"
rsync -a --delete --exclude dist --exclude .astro --exclude node_modules "$PROJECT/" "$WORK/"
if [ ! -d "$WORK/node_modules" ]; then
  if [ -d "$PROJECT/node_modules" ]; then cp -R "$PROJECT/node_modules" "$WORK/node_modules"; else (cd "$WORK" && npm install --no-audit --no-fund); fi
fi
(cd "$WORK" && npx astro build)
echo "Built to: $WORK/dist"
if [ "${1:-}" = "--preview" ]; then
  python3 "$PROJECT/scripts/make_preview.py" "$WORK/dist" "$PROJECT/../preview"
  echo "Preview: $PROJECT/../preview/index.html"
fi
