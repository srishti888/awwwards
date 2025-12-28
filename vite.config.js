import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },

  theme: {
    extend: {
      colors: {
        blue: {
          50: '#dfdff0',
          75: '#dfdff2',
          100: '#dfdff5',
          200: '#dfdff0',
          300: '#4fb7dd',
        },
        violet: {
          700: '#7008e7',
        },
        yellow: {
          100: '#8e983f',
          300: '#edff66'
        }
      }
    }
  }
})
