<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n()
const appConfig = useAppConfig()

const currentLocale = computed(() => locales[locale.value as keyof typeof locales])
</script>

<template>
  <UApp  :locale="currentLocale">
    <NuxtLoadingIndicator color="#FFF" />
    <div class="bg-[var(--ui-bg)]" vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
