import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from '@unocss/vite'
import extractorPug from '@unocss/extractor-pug'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS({
      presets: [
        presetUno(),
      ],
      extractors: [
        extractorPug(),
      ],
    }),
  ],
})
