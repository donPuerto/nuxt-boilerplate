const headConfig = {
  title: 'Nuxt Boilerplate',
  titleTemplate: '%s | Nuxt Boilerplate',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'A Nuxt 3 Boilerplate with TypeScript and Tailwind CSS' },
    { name: 'keywords', content: 'nuxt, vue, typescript, tailwind, boilerplate, starter template, frontend development, web development, vue.js, nuxt.js' },
    { name: 'author', content: 'Don Puerto' },
    { name: 'robots', content: 'index, follow' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Nuxt Boilerplate' },
    { property: 'og:description', content: 'A Nuxt 3 Boilerplate with TypeScript and Tailwind CSS' },
    { property: 'og:image', content: '/preview-image.png' },
    { property: 'og:image:alt', content: 'Nuxt Boilerplate Preview' },
    { property: 'og:site_name', content: 'Nuxt Boilerplate' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Nuxt Boilerplate' },
    { name: 'twitter:description', content: 'A Nuxt 3 Boilerplate with TypeScript and Tailwind CSS' },
    { name: 'twitter:image', content: '/preview-image.png' },
    { name: 'twitter:image:alt', content: 'Nuxt Boilerplate Preview' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/manifest.json' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Nuxt Boilerplate',
        'description': 'A Nuxt 3 Boilerplate with TypeScript and Tailwind CSS',
        'url': 'https://nuxt-boilerplate.netlify.app',
      }),
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
}

export default headConfig
