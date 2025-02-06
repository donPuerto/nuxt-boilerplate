const headConfig = {
  // Title Settings
  title: process.env.NUXT_PUBLIC_SITE_NAME,
  titleTemplate: `%s | ${process.env.NUXT_PUBLIC_SITE_NAME}`,

  // Meta Tags
  meta: [
    // Basic
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: process.env.NUXT_PUBLIC_SITE_DESCRIPTION },
    { name: 'keywords', content: 'nuxt, vue, typescript, tailwind, boilerplate, starter template, frontend development, web development, vue.js, nuxt.js' },
    { name: 'author', content: 'Don Puerto' },
    { name: 'robots', content: 'index, follow' },

    // Canonical Tag
    { rel: 'canonical', href: process.env.NUXT_PUBLIC_BASE_URL },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: process.env.NUXT_PUBLIC_SITE_NAME },
    { property: 'og:description', content: process.env.NUXT_PUBLIC_SITE_DESCRIPTION },
    { property: 'og:image', content: '/preview-image.png' },
    { property: 'og:image:alt', content: `${process.env.NUXT_PUBLIC_SITE_NAME} Preview` },
    { property: 'og:site_name', content: process.env.NUXT_PUBLIC_SITE_NAME },
    { property: 'og:url', content: process.env.NUXT_PUBLIC_BASE_URL },

    // Twitter
    { name: 'twitter:card', content: process.env.NUXT_PUBLIC_TWITTER_CARD_TYPE },
    { name: 'twitter:title', content: process.env.NUXT_PUBLIC_SITE_NAME },
    { name: 'twitter:description', content: process.env.NUXT_PUBLIC_SITE_DESCRIPTION },
    { name: 'twitter:image', content: '/preview-image.png' },
    { name: 'twitter:image:alt', content: `${process.env.NUXT_PUBLIC_SITE_NAME} Preview` },
    { name: 'twitter:site', content: process.env.NUXT_PUBLIC_TWITTER_HANDLE },

    // PWA
    { name: 'theme-color', content: 'green' },
    { name: 'msapplication-TileColor', content: 'slate' },
  ],

  // Links
  link: [
    // Icons
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },

    // Manifest
    { rel: 'manifest', href: '/manifest.json' },
  ],

  // Scripts
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': `${process.env.NUXT_PUBLIC_SITE_NAME}`,
        'description': process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
        'url': process.env.NUXT_PUBLIC_BASE_URL,
      }),
    },
  ],

  // HTML Attributes
  htmlAttrs: {
    lang: process.env.NUXT_PUBLIC_DEFAULT_LOCALE,
  },
}

export default headConfig
