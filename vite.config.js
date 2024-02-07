import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      resolve: {
        alias: {
          "firebase/app": "firebase/app/dist/index.cjs.js",
          firebase: "firebase/app/dist/index.cjs.js",
        },
      },
    },
  ],
});
