import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'
import remarkEmoji from 'remark-emoji'
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://christham.net/',
  base: '/astro-blog/',
  integrations: [UnoCSS(), sitemap(), alpinejs(), robotsTxt()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkEmoji],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  scopedStyleStrategy: 'where'
})
