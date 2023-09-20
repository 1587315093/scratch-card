import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const baseDir = path.resolve(__dirname, ".");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(baseDir, "../common"),
    },
  },
});
