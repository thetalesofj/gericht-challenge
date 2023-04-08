import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'gericht-challenge.vercel.app',
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {

  },
})
