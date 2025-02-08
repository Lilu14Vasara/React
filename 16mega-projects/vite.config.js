import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config({ path: '.env.sample' });
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
