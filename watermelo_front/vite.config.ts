import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'


function resolve(dir: string) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      "@c":resolve('src/components'),
      "@v":resolve('src/views'),
    }
  }
})
