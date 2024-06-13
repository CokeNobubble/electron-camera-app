import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    server: {
      port: 3000,
      proxy: {}
    },
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'pinia'],
        dts: './src/types/auto-imports.d.ts'
        // eslintrc: {
        //   enabled: true,
        //   filepath: './.eslintrc-auto-import.json',
        //   globalsPropValue: true
        // }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: './src/types/components.d.ts'
      })
    ]
  }
})
