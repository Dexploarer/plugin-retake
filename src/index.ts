/**
 * Scaffold plugin for future true window capture work.
 *
 * Planned scope:
 * - True window capture for Milady UI mode (desktop Electron)
 * - True window capture for agent CLI mode (Terminal / Codex / iTerm)
 * - Retake-compatible stream lifecycle + reconnect stability
 */
const plugin = {
  name: "plugin-retake-window-capture",
  description:
    "Scaffold for true macOS window capture in Milady/Retake workflows.",
  actions: [],
  providers: [],
  evaluators: [],
  services: [],
  config: {
    RETAKE_STREAM_MODE: "ui",
    RETAKE_WINDOW_PROCESS: "",
    RETAKE_MAC_DISPLAY_INDEX: "0"
  },
  priority: 10,
};

export default plugin;
