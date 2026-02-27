import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://aixpertslabs.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/portfolio',
        '/contact',
        '/courses/institute',
        '/courses/corporate'
      ]
    })
  ],
  resolve: {
    alias: {
      '@'           : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@assets'     : path.resolve(__dirname, './src/assets'),
      '@styles'     : path.resolve(__dirname, './src/styles'),
      '@hooks'      : path.resolve(__dirname, './src/hooks'),
      '@utils'      : path.resolve(__dirname, './src/utils'),
      '@data'       : path.resolve(__dirname, './src/data'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})