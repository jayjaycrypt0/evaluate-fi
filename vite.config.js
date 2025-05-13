import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/evaluate-fi/',
  plugins: [react()]
})