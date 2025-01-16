// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'
import pkg from './package.json'
import headConfig from './config/head.config'

const { resolve } = createResolver(import.meta.url)

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
  ],
  devtools: { enabled: true },
  alias: {
    '@': resolve('./'),
    '~': resolve('./'),
    'types': resolve('./types')
  },
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          "@/*": ["./*"],
          "~/*": ["./*"],
          "types/*": ["./types/*"]
        }
      }
    }
  },
  app: {
    head: headConfig,
    rootAttrs: {
      'vaul-drawer-wrapper': '',
      'class': 'bg-[var(--ui-bg)]',
    },
    // description: 'A modern Nuxt 3 boilerplate with comprehensive SEO setup',
    // defaultLocale: 'en',
  },
  css: [
    './assets/css/main.css',
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'Nuxt Boilerplate',
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      dependencies: {
        vue: pkg.dependencies.vue,
        nuxt: pkg.dependencies.nuxt,
        nuxtUI: pkg.dependencies['@nuxt/ui'],
      },
      devDependencies: {
        typescript: pkg.devDependencies.typescript,
      },
    },
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
    strategy: 'no_prefix',
    defaultLocale: 'en-US',
    vueI18n: './config/i18n.config.ts',
    baseUrl: '/',
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
      redirectOn: 'root'
    }
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons'),
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
    serverBundle: {
      collections: ['uil', 'heroicons', 'logos', 'lucide', 'simple-icons', 'mdi', 'logos', 'skill-icons', 'carbon', 'catppuccin', 'flag'],
    },
  },
  robots: {
    sitemap: ['/sitemap.xml'],
    robotsEnabledValue: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/components',
        '/roadmap',
        '/releases',
      ]
    },
   
  },
})
