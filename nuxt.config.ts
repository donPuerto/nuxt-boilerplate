// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'
import pkg from './package.json'

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
  app: {
    head: {
      link: [],
    },
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
    strategy: 'prefix_except_default',
    defaultLocale: 'en-US',
    locales: [
      {
        code: 'en-US',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'de-DE',
        name: 'Deutsch',
        file: 'de.ts',
      },
      {
        code: 'fr-FR',
        name: 'Français',
        file: 'fr.ts',
      },
    ],
    // langDir: 'i18n',
    lazy: true,
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
})
