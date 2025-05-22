// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 base: '/Fashion-Ecommerce-Website/',  // <-- यहाँ अपना repo नाम डालें
  plugins: [react()],
})
