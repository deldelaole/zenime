import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/", // This tells the site to load from the main URL
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Points to your source folder
    },
  },
  build: {
    outDir: "dist", // This ensures the 'dist' folder we talked about is created
  }
})
