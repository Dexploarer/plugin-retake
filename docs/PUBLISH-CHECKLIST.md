# Publish Checklist

1. Update `version` in `package.json` and `elizaos.plugin.json`.
2. Run:
   - `bun run build`
   - `bun run typecheck`
   - `bun run test`
3. Dry run publish:
   - `npm publish --dry-run --access public`
4. Publish prerelease for `next` line:
   - `npm publish --access public --tag next`
5. Verify:
   - `npm info @dexploarer/plugin-retake-window-capture`
6. Submit to Milady community registry with:
   - package name
   - short description
   - required env vars
   - install notes
