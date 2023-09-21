import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@services": "/src/services",
      "@config": "/src/config",
      "@api": "/src/api",
      "@types": "/src/types",
    },
  },
});
