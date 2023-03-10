import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 它将别名“~”映射到当前目录的“src”文件夹，因此在进行路径引用时，可以使用“~”，而不是使用相对路径。
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    WindiCSS()
  ],
  server: {
    cors: true,
    // 是否为 https 接口
    secure: true,
    port: 3000,
    open: false,
    hot: true,  
    proxy: {
      '/api': {
        target: 'https://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000
  },
})
