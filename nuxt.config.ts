// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'
import pkg from './package.json'
import headConfig from './config/head.config';

const { resolve } = createResolver(import.meta.url)

// Define base URL from environment variables
// const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Define config with proper type
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxtjs/i18n',
    'motion-v/nuxt',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  app: {
    head: headConfig,
    rootAttrs: {
      // 'vaul-drawer-wrapper': '',
      'class': 'bg-[var(--ui-bg)]',
    },
    // description: 'A modern Nuxt 3 boilerplate with comprehensive SEO setup',
    // defaultLocale: 'en',
  },
  css: [
    './assets/css/main.css',
  ],

  site: {
    // Core Info
    url: process.env.NUXT_PUBLIC_BASE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
    description: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
    defaultLocale: process.env.NUXT_PUBLIC_DEFAULT_LOCALE,

    // Visual Elements
    logo: '/logo.png',
    ogImage: '/preview-image.png',
    themeColor: '#ffffff',

    // Social Profiles
    social: {
      twitter: {
        handle: process.env.NUXT_PUBLIC_TWITTER_HANDLE,
        card: 'summary_large_image',
      },
      github: process.env.NUXT_PUBLIC_GITHUB_URL,
      linkedin: process.env.NUXT_PUBLIC_LINKEDIN_URL,
      portfolio: process.env.NUXT_PUBLIC_PORTFOLIO_URL,
    },

    // SEO Settings
    indexable: true,
    trailingSlash: false,

    // Performance
    cacheControl: {
      static: 'public, max-age=31536000, immutable',
      swr: 'public, max-age=604800, stale-while-revalidate=86400',
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      siteName: process.env.NUXT_PUBLIC_SITE_NAME,
      siteDescription: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
      version: pkg.version,
      package: {
        vue: pkg.dependencies.vue,
        nuxt: pkg.dependencies.nuxt,
        nuxtUI: pkg.dependencies['@nuxt/ui'],
        typescript: pkg.devDependencies.typescript,
        tailwind: pkg.devDependencies.tailwindcss,
      },
      dependencies: {
        vue: pkg.dependencies.vue,
        nuxt: pkg.dependencies.nuxt,
        nuxtUI: pkg.dependencies['@nuxt/ui'],
      },
      devDependencies: {
        typescript: pkg.devDependencies.typescript,
        tailwind: pkg.devDependencies.tailwindcss,
      },
    },
  },
  // Build Configuration
  build: {
    transpile: ['@iconify/vue'],
    // Optimize chunks
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     maxSize: 244000
    //   }
    // }
  },
  // icon: {
  //   customCollections: [{
  //     prefix: 'custom',
  //     dir: resolve('./app/assets/icons'),
  //   }],
  //   clientBundle: {
  //     scan: true,
  //     includeCustomCollections: true,
  //   },
  //   provider: 'iconify',
  //   serverBundle: {
  //     collections: ['uil', 'heroicons', 'logos', 'lucide', 'simple-icons', 'mdi', 'logos', 'skill-icons', 'carbon', 'catppuccin', 'flag'],
  //   },
  // },
  routeRules: {
    '/admin/**': { index: false },
    '/auth/**': { index: false },
    '/test/**': { index: false },
    '/draft/**': { index: false },
  },
  future: {
    compatibilityVersion: 4,
  },

  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  // srcDir: ".",
  //  dir: {
  //   app: "app",
  // },
  // experimental: {
  //   scanPageMeta: 'after-resolve',
  //   sharedPrerenderData: false,
  //   compileTemplate: true,
  //   resetAsyncDataToUndefined: true,
  //   templateUtils: true,
  //   relativeWatchPaths: true,
  //   normalizeComponentNames: false,
  //   spaLoadingTemplateLocation: 'within',
  //   defaults: {
  //     useAsyncData: {
  //       deep: true
  //     }
  //   }
  // },
  // features: {
  //   inlineStyles: true
  // },
  // unhead: {
  //   renderSSRHeadOptions: {
  //     omitLineBreaks: false
  //   }
  // }
  compatibilityDate: '2025-01-09',
  // sitemap: {
  //   hostname: process.env.NUXT_PUBLIC_BASE_URL
  // },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true, // This will create compressed versions
    },
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/components',
        '/roadmap',
        '/releases',
      ],
    },

  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      'autoprefixer': {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    baseUrl: 'https://your-production-domain.com',
    defaultLocale: 'en-US',
    vueI18n: '~/config/i18n.config.ts',
    locales: [
      {
        code: 'en-US',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'de-DE',
        name: 'Deutsch',
        language: 'de-DE',
      },
      {
        code: 'fr-FR',
        name: 'Français',
        language: 'fr-FR',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  // Icon Configuration
  icon: {
    provider: 'iconify',

    // Use local mode for better performance since you have the icons installed
    mode: 'local',

    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons'),
    }],

    // Server bundle for critical icons
    serverBundle: {

      // Externalize icons JSON to improve build performance
      externalizeIconsJson: true,

      // Specify collections for server-side rendering
      collections: ['flag'],
    },

    // Client Bundle Configuration
    clientBundle: {
      // Enable scanning to detect and bundle frequently used icons
      scan: {
        // Specify directories to scan
        globInclude: ['components/**/*.vue', 'pages/**/*.vue'],
        globExclude: ['node_modules', 'dist', '.nuxt'],
      },
      // Set a reasonable size limit
      sizeLimitKb: 256,
    },

  },
})
