import { describe, expect, it } from "vitest";
import plugin from "../index.js";

describe("plugin scaffold", () => {
  it("exports a named plugin", () => {
    expect(plugin.name).toBe("plugin-retake-window-capture");
  });
});
