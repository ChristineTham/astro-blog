// uno.config.ts
import { defineConfig, presetIcons, presetWind4, presetTypography } from 'unocss'

const heroicons = ['sparkles', 'puzzle-piece', 'presentation-chart-bar', 'clock']
const bootstrapIcons = [
  'envelope',
  'facebook',
  'github',
  'instagram',
  'linkedin',
  'telephone',
  'twitter'
]

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true
      }
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetTypography()
  ],
  // Dynamic icon class names are built at runtime in a few components,
  // so we safelist those tokens to ensure UnoCSS includes them in output.
  safelist: [
    ...heroicons.map((name) => `i-heroicons-${name}`),
    ...bootstrapIcons.map((name) => `i-bi-${name}`)
  ]
})
