import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This sets "@" to the folder ABOVE src.
      // So "@/src/config" becomes "your-project/src/config"
      // instead of "your-project/src/src/config"
      "@": path.resolve(__dirname, "./"),
    },
  },
  build: {
    outDir: 'dist',
  }
})
