import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pxtovw from 'postcss-px-to-viewport'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

const loder_pxtovw_pc = pxtovw({
  //这里是设计稿宽度 自己修改
  unitToConvert: "px",
  viewportWidth: 1024,
  unitPrecision: 5,
  propList: ["*"],
  viewportUnit: "vw",
  fontViewportUnit: "vw",
  selectorBlackList: [".ignore-pc"],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: /(\/|\\)(node_modules)(\/|\\)/
})

const loder_pxtovw_mob = pxtovw({
  //这里是设计稿宽度 自己修改
  unitToConvert: "px",
  viewportWidth: 750,
  unitPrecision: 3,
  propList: ["*"],
  viewportUnit: "vw",
  fontViewportUnit: "vw",
  selectorBlackList: [".ignore-mob"],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: /(\/|\\)(node_modules)(\/|\\)/
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
      }
    },
    postcss: {
      plugins: [loder_pxtovw_pc, loder_pxtovw_mob]
    }
  },
})
