import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Set base path for GitHub Pages project site
// https://vite.dev/guide/static-deploy.html#github-pages
export default defineConfig({
  base: '/silverbellsExperiment/',
  plugins: [react()],
  base: '/silverbellsExperiment/',
  server: {
    port: 5173
  }
})
