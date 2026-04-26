import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/", // This tells the site to load from the main URL
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist", // This ensures the 'dist' folder we talked about is created
  }
})
