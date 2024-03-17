import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import robotsTxt from 'astro-robots-txt';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import remarkPlantUML from '@akebifiky/remark-simple-plantuml';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs';
import UnoCSS from 'unocss/astro';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   ssr: {
  //     external: ['svgo'],
  //     noExternal: ['swiper', 'leaflet']
  //   }
  // },
  site: 'https://hellotham.github.io',
  integrations: [UnoCSS({
    injectReset: true // or a path to the reset file
  }), sitemap(), mdx(), alpinejs(), robotsTxt(), markdoc()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkMath, remarkPlantUML, remarkDiagram, remarkEmoji],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    },
  },
  scopedStyleStrategy: "where",
});