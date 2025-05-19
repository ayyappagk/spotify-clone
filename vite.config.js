import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  base: '/spotify-clone/',
  plugins: [
    tailwindcss(),
  ],
})git init