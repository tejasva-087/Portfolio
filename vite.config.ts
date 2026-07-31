import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      // "@stackIcons": path.resolve(__dirname, ".src/assets/stackIcons"),
      // "@stackIcons": fileURLToPath(
      //   new URL("./src/assets/stackIcons", import.meta.url),
      // ),
      // "@projectLogos": path.resolve(__dirname, ".src/assets/projectLogos"),
      // "@projectImages": path.resolve(__dirname, ".src/assets/projectImages"),
    },
  },
});
