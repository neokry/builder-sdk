import { defineConfig } from "tsup";

export default defineConfig({
  async onSuccess() {},
  entry: ["src/index.ts"],
  sourcemap: true,
  dts: true,
  format: ["esm"],
  clean: true,
});
