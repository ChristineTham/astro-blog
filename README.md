# Astro Blog

Simple blog starter based on [Hello Astro](https://hellotham.github.io/hello-astro) focused on Markdown content, Astro content collections, and UnoCSS instead of Tailwind.

Uses the following integrations:

- @astrojs/sitemap
- @astrojs/rss
- @astrojs/alpinejs
- astro-seo
- astro-robots-txt

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance with minimal client-side JavaScript (AlpineJS only where needed)
- Full-text client-side search of blog pages via Lunr, bundled locally with Astro/Vite and loaded lazily on first search
- Search-on-type behaviour with debounced queries and safe client-side rendering of results
- Index page and individual pages for authors, categories and tags, including pagination
- Support for RSS feed, sitemap and robots.txt
- Full SEO support including canonical URLs, Open Graph, Twitter Cards and Schema.org JSON-LD
- Article JSON-LD emitted only for blog posts, with page-aware canonical metadata and absolute RSS links
- Full support for light and dark UI modes, including system preference detection and instant client-side switching without reload
- Customised 404 error page
- Calculates and show reading time for blog posts
- CSS/JS assets of external libraries loaded only when needed on a per page and per package basis - no unnecessary bloat
- Photo gallery and lightbox using PhotoSwipe (including display of EXIF tags)
- Carousel component using Swiper
- UnoCSS with Iconify-powered icons via `presetIcons`, plus safelisted dynamic icon tokens for runtime-generated classes

## External Packages

The starter uses the following external packages:

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Markdown](https://www.markdownguide.org/)
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/), type-checked using [schema-dts](https://github.com/google/schema-dts)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [AlpineJS](https://alpinejs.dev)
- Local full-text search using [Lunr](https://lunrjs.com)
- [reading-time](https://github.com/ngryman/reading-time)
- [PhotoSwipe](https://photoswipe.com)
- [exifr](https://mutiny.cz/exifr/)
- [Swiper](https://swiperjs.com/)
- [Remark Emoji](https://github.com/rhysd/remark-emoji)
- [UnoCSS](https://unocss.dev)
- [Iconify](https://iconify.design/) icon sets via `presetIcons`

It follows the [JAMstack architecture](https://jamstack.org) by building a static site from the repository. The demo is deployed on GitHub Pages under a base path.

## 🚀 Project Structure

Inside this starter, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.ico
│   └── site.webmanifest
├── remark-plugins/
│   └── remark-reading-time.mjs
├── src/
│   ├── assets/
│   ├── author/
│   │   └── *.md
│   ├── blog/
│   │   └── *.md
│   ├── category/
│   │   └── *.md
│   ├── components/
│   │   └── *.astro
│   ├── gallery/
│   ├── images/
│   ├── layouts/
│   │   ├── base.astro
│   │   ├── blog.astro
│   │   └── page.astro
│   ├── page/
│   │   └── *.md
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── category/
│   │   ├── tag/
│   │   └── rss.xml.js
│   ├── social/
│   │   └── *.json
│   └── config.ts
├── astro.config.ts
├── uno.config.ts
└── package.json
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/assets/`, `src/images/`, or the `public/` directory depending on whether they should be processed by Astro.

Blog, page, author, category and social metadata are defined as Astro content collections.

Any static assets, eg. images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                         |
| :------------------ | :------------------------------------------------------------- |
| `pnpm install`      | Install dependencies                                           |
| `pnpm dev`          | Start local dev server                                         |
| `pnpm build`        | Build production site to `./dist/`                             |
| `pnpm preview`      | Preview the production build locally                           |
| `pnpm check`        | Run `astro check`                                              |
| `pnpm lint`         | Run Prettier check and ESLint check                            |
| `pnpm run lint:fix` | Auto-format and auto-fix lint issues                           |
| `pnpm refresh`      | Upgrade Astro-related packages and refresh dependency versions |
| `pnpm astro ...`    | Run Astro CLI commands directly                                |
| `pnpm astro --help` | Show Astro CLI help                                            |

## Search Notes

- Search is implemented with Lunr and generated from `src/pages/search-index.json.js` and `src/pages/search-docs.json.js`.
- The search UI lives in `src/components/search.astro` and uses bundled client-side Lunr, not a CDN script.
- The index and document payload are fetched lazily on first search and cached in component state.
- Search runs on type with a 300ms debounce and uses Alpine template rendering instead of `innerHTML` injection.

## SEO Notes

- SEO metadata is centralised in `src/components/seo.astro`.
- Canonical URLs, Open Graph, Twitter card metadata, and Schema.org JSON-LD are generated from page frontmatter and Astro route context.
- Article schema is emitted only for blog posts; non-post pages emit site/organization/person/breadcrumb metadata only.
- RSS, sitemap, robots.txt, and manifest/head links are configured to work correctly with the deployed base path.

## Release History

- 1.0.0: Initial Release
- 2.0.0: Upgrade to Astro 5
- 2.1.0: Remove extra packages, upgraded eslint/prettier configs, lints
- 2.2.0: Enhanced PhotoSwipe integration, use astro-masonry and astro-swiper replacing bespoke components, improved linting workflow, strengthened SEO metadata, and modernised bundled Lunr search
