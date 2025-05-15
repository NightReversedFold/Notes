import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

import react from '@vitejs/plugin-react'

const api = process.env.VITE_Api || 'http://localhost:3000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build:{
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': api,
      '/socket.io':{
        target:api, 
        ws:true
      }
    },
  },
})
