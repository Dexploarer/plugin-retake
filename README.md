# @Dexploarer/plugin-retake

Experimental Milady plugin workspace for **true macOS window capture** in Retake streams.

This repo is intentionally isolated from your current Milady worktree so we can test safely before merging anything into production plugin code.

## Goals

- True window capture for `RETAKE_STREAM_MODE=cli` (agent CLI window)
- True window capture for `RETAKE_STREAM_MODE=ui` (Milady desktop window)
- Reconnect using existing Retake token without reminting
- Stable stream startup and thumbnail flow

## Setup

```bash
bun install
bun run build
bun run typecheck
bun run test
```

## Publish Readiness

This scaffold follows Milady/Eliza plugin publishing conventions:

- package naming: `@dexploarer/plugin-{name}`
- includes `elizaos.plugin.json` in npm `files`
- `@elizaos/core` declared as `peerDependency`
- ESM build output with declarations

See `docs/PUBLISH-CHECKLIST.md`.
