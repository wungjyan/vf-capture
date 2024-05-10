import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [typescript()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VFCapture",
      fileName: (format) => `vf-capture.${format}.js`
    }
  }
});
