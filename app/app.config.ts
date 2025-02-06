export default defineAppConfig({

  site: {
    // Core Info
    url: process.env.NUXT_PUBLIC_BASE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
    description: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
    defaultLocale: process.env.NUXT_PUBLIC_DEFAULT_LOCALE,

    // Visual Elements
    logo: '/android-chrome-512x512.png',
    ogImage: '/preview-image.png',
    favicon: '/favicon.ico',
    themeColor: 'green', // Use your primary color from UI config
    backgroundColor: 'slate', // Use your neutral color from UI config

    // PWA Configuration
    manifest: '/manifest.json',

    // Social Media
    social: {
      twitter: {
        handle: process.env.NUXT_PUBLIC_TWITTER_HANDLE,
        card: process.env.NUXT_PUBLIC_TWITTER_CARD_TYPE,
      },
      github: process.env.NUXT_PUBLIC_GITHUB_URL,
      linkedin: process.env.NUXT_PUBLIC_LINKEDIN_URL,
      portfolio: process.env.NUXT_PUBLIC_PORTFOLIO_URL,
    },

    // SEO Settings
    indexable: process.env.NUXT_PUBLIC_SITE_INDEXABLE === 'true',
    trailingSlash: process.env.NUXT_PUBLIC_TRAILING_SLASH === 'true',
    robots: '/_robots.txt',

    // Performance
    cacheControl: {
      static: process.env.NUXT_PUBLIC_CACHE_CONTROL_STATIC,
      swr: process.env.NUXT_PUBLIC_CACHE_CONTROL_SWR,
    },

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
