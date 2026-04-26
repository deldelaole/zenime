import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps the "@" symbol to the root directory
      // This prevents the src/src error by allowing the code 
      // to resolve paths correctly from the top level.
      "@": "/",
    },
  },
  build: {
    outDir: "dist",
  }
})
