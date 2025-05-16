import { defineConfig,loadEnv } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const api = process.env.VITE_Api || 'http://localhost:3000'

  return {
  plugins: [react(),tailwindcss()],
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
  },}
})
