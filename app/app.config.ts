export default defineAppConfig({
  seo: {
    // Basic SEO - Used by search engines and browsers
    title: 'Nuxt Boilerplate', // Appears in browser tab and search results
    description: 'A modern, feature-rich Nuxt.js starter template with TypeScript, Tailwind CSS, and best practices built-in', // Appears in search results
    image: '/preview-image.png',

    // Open Graph - Used by Facebook, LinkedIn, etc
    openGraph: {
      title: 'Nuxt Boilerplate - Modern Vue.js Starter Template', // Can be longer, more descriptive
      description: 'Start your next Vue.js project faster with our production-ready Nuxt boilerplate featuring TypeScript, Tailwind CSS, ESLint, and more', // Can include more details
      imageAlt: 'Nuxt Boilerplate Preview',
      type: 'website' as const,
      siteName: 'Nuxt Boilerplate',
    },

    // Twitter - Used by Twitter cards
    twitter: {
      card: 'summary_large_image' as const,
      title: 'Nuxt Boilerplate - Modern Vue.js Starter', // Limited to 70 characters
      description: 'Production-ready Nuxt starter with TypeScript, Tailwind CSS, and modern development tools', // Limited to 200 characters
    },

    // Additional metadata
    author: 'Don Puerto',
    keywords: 'nuxt, vue, typescript, tailwind, boilerplate, starter template, frontend development, web development, vue.js, nuxt.js',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
  },
  toaster: {
    position: 'bottom-right' as const,
    expand: true,
    duration: 5000,
  },
  theme: {
    radius: 0.25,
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
    icons: {
      light: 'i-heroicons-sun-20-solid',
      dark: 'i-heroicons-moon-20-solid',
      arrowLeft: 'i-heroicons-arrow-left-20-solid',
      arrowRight: 'i-heroicons-arrow-right-20-solid',
      check: 'i-heroicons-check-20-solid',
      chevronDoubleLeft: 'i-heroicons-chevron-double-left-20-solid',
      search: 'i-heroicons-search-20-solid',
    },
  },
})
