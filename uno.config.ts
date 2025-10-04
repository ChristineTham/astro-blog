// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetWind4,
  presetTypography,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        // ...
      },
    }),
    presetTypography(),
  ],
  safelist: [
    "i-heroicons-sparkles",
    "i-heroicons-puzzle-piece",
    "i-heroicons-presentation-chart-bar",
    "i-heroicons-clock",
    "i-bi-envelope",
    "i-bi-facebook",
    "i-bi-github",
    "i-bi-instagram",
    "i-bi-linkedin",
    "i-bi-telephone",
    "i-bi-twitter",
  ],
});
