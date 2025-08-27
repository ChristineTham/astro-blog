---
title: About
description: Description of Hello Astro Starter
pubDate: 2023-06-13T00:00:00.000Z
image: ../images/Alpine lake sunset.jpg
---

This is multi-purpose Astro starter template based on the following:

- [Astro](https://astro.build/) as a modern static site generator
- [TypeScript](https://www.typescriptlang.org/)
- [UnoCSS](https://unocss.dev)
- [Iconify](https://iconify.design/)
- [unDraw](https://undraw.co/) for illustrations
- [Markdown](https://www.markdownguide.org/)
- [MDX](https://mdxjs.com/)
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/), type-checked using [schema-dts](https://github.com/google/schema-dts)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [AlpineJS](https://alpinejs.dev)
- Local full text search using [Lunr](https://lunrjs.com)
- [PhotoSwipe](https://photoswipe.com)
- [exifr](https://mutiny.cz/exifr/)
- [Swiper](https://swiperjs.com/)

It follows the [JAMstack architecture](https://jamstack.org) by automatically building a static version from the Git repository. The demo is deployed on [Github Pages](https://pages.github.com).

Hello Astro can used for any/all of the following:

- corporate/marketing site
- blog
- documentation site
- portfolio site supporting photo galleries

This starter is open source (MIT licence) - fork it and customise for your needs.

## Features

- Author content in a mix of Markdown, MDX and Markdoc
- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance low overhead with minimal Javascript (AlpineJS)
- Full text client based search of blog pages via lunrjs (search index only loaded on first invocation of search on a page)
- Index page and individual pages for authors, categories and tags, including pagination
- Support for RSS feed, sitemap and robots.txt
- SVG design (unDraw, Iconify)
- Support for code syntax highlighting
- Full SEO support including Open Graph, Twitter Cards and Schema.org via JSON-LD
- Full support for light and dark UI modes, as well as following system preferences, in accordance to TailwindCSS recommendation
- Customised 404 error page
- CSS/JS assets of external libraries loaded only when needed on a per page and per package basis - no unnecessary bloat
- Photo gallery and lightbox using PhotoSwipe (including display of EXIF tags)
- Carousel component using Swiper
- Documentation pages (modelled after astro docs starter but using Tailwind)
