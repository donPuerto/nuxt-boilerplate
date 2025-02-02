const headConfig = {
  // Title Settings
  title: 'Nuxt Boilerplate',
  titleTemplate: `%s | ${process.env.NUXT_PUBLIC_SITE_NAME}`,

  // Meta Tags
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: process.env.NUXT_PUBLIC_SITE_DESCRIPTION },
    { name: 'keywords', content: 'nuxt, vue, typescript, tailwind, boilerplate, starter template, frontend development, web development, vue.js, nuxt.js' },
    { name: 'author', content: 'Don Puerto' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: `${process.env.NUXT_PUBLIC_SITE_NAME}` },
    { property: 'og:description', content: process.env.NUXT_PUBLIC_SITE_DESCRIPTION },
    { property: 'og:image', content: '/preview-image.png' },
    { property: 'og:image:alt', content: `${process.env.NUXT_PUBLIC_SITE_NAME}` },
    { property: 'og:site_name', content: process.env.NUXT_PUBLIC_SITE_NAME },

    { property: 'og:profile', content: process.env.NUXT_PUBLIC_LINKEDIN_URL },
    { property: 'og:see_also', content: process.env.NUXT_PUBLIC_PORTFOLIO_URL },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${process.env.NUXT_PUBLIC_SITE_NAME}` },
    { name: 'twitter:description', content: process.env.NUXT_PUBLIC_SITE_DESCRIPTION },
    { name: 'twitter:image', content: '/preview-image.png' },
    { name: 'twitter:image:alt', content: `${process.env.NUXT_PUBLIC_SITE_NAME}` },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'me', href: process.env.NUXT_PUBLIC_LINKEDIN_URL },
    { rel: 'me', href: process.env.NUXT_PUBLIC_PORTFOLIO_URL }
  ],
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
    lang: 'en',
  },
}

export default headConfig
