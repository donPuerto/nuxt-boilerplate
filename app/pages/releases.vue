<script setup lang="ts" >
// I18n
const { t } = useI18n()

// Head configuration
const title = ref('Releases')
const description = ref('Stay up to date with our latest releases. Explore new features, improvements, and bug fixes.')

useHead(() => ({
  title: title.value,
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
  ],
}))

const sections = {
  ui: ['nuxt_ui', 'tailwind', 'icons'],
  core: ['nuxt', 'vue', 'typescript'],
  seo: ['i18n', 'sitemap', 'schema', 'robots'],
  dev: ['eslint', 'pnpm', 'vscode'],
} as const
</script >

<template >
  <div class="container mx-auto px-4 py-8" >
    <div class="space-y-6" >
      <h1 class="text-4xl font-bold mb-6" >
        {{ t('pages.releases.title') }}
      </h1 >

      <div class="grid gap-6" >
        <UCard >
          <template #header >
            <div class="flex justify-between items-center" >
              <h2 class="text-xl font-semibold" >
                {{ t('pages.releases.version') }}
              </h2 >
              <UBadge color="primary" >
                {{ t('pages.releases.latest') }}
              </UBadge >
            </div >
          </template >

          <div class="space-y-8" >
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed" >
              {{ t('pages.releases.description') }}
            </p >

            <div class="space-y-8" >
              <div v-for="(features, section) in sections" :key="section" class="space-y-4" >
                <h3 class="font-semibold text-xl" >
                  {{ t(`pages.releases.features.${section}.title`) }}
                </h3 >
                <ul class="space-y-3 text-gray-600 dark:text-gray-400" >
                  <li
                    v-for="feature in features"
                    :key="feature"
                    class="flex items-start gap-2"
                  >
                    <span class="text-lg" >•</span >
                    <span >{{ t(`pages.releases.features.${section}.${feature}`) }}</span >
                  </li >
                </ul >
              </div >
            </div >
          </div >
        </UCard >
      </div >
    </div >
  </div >
</template >
