<script setup lang="ts" >
type DisplayMode = 'flag-only' | 'flag-with-label'
type LocaleCode = 'us' | 'fr' | 'de'

interface Props {
  mode?: DisplayMode
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'flag-with-label',
})

interface LocaleItem {
  code: LocaleCode
  name: string
  icon: string
}

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)

const availableLocales = computed(() => {
  return (locales.value as unknown as LocaleItem[]).map((l) => ({
    ...l,
    icon: getLocaleIcon(l.code as LocaleCode),
  }))
})

const selectedLocale = computed(() => locale.value as LocaleCode)

const selectedLocaleItem = computed(() => {
  return availableLocales.value.find((l) => l.code === selectedLocale.value)
})

function getLocaleIcon(code: LocaleCode): string {
  switch (code) {
    case 'us':
      return 'i-flag-us-4x3'
    case 'fr':
      return 'i-flag-fr-4x3'
    case 'de':
      return 'i-flag-de-4x3'
    default:
      return 'i-flag-us-4x3'
  }
}

const switchLanguage = (locale: LocaleItem) => {
  const fullLocaleCode = getFullLocaleCode(locale.code)
  const path = switchLocalePath(fullLocaleCode)
  if (path) {
    navigateTo(path)
    isOpen.value = false
  }
}

watch(locale, (newLocale) => {
  selectedLocale.value = newLocale as LocaleCode
})

function getFullLocaleCode(code: LocaleCode): 'en-US' | 'fr-FR' | 'de-DE' {
  switch (code) {
    case 'us':
      return 'en-US'
    case 'fr':
      return 'fr-FR'
    case 'de':
      return 'de-DE'
    default:
      return 'en-US'
  }
}
</script >

<template >
  <div class="relative" >
    <UButton
      variant="ghost"
      type="button"
      :class="[props.mode === 'flag-only' ? 'w-16' : 'w-36']"
      @click="isOpen = !isOpen"
    >
      <UIcon
        v-if="selectedLocaleItem"
        :name="selectedLocaleItem.icon"
        class="w-6 h-5"
      />
      <span v-if="props.mode === 'flag-with-label' && selectedLocaleItem" >
        {{ selectedLocaleItem.name }}
      </span >
      <UIcon
        name="i-heroicons-chevron-down"
        class="w-5 h-5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </UButton >

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 origin-top-right bg-gray-100 rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
      :class="[props.mode === 'flag-only' ? 'w-16' : 'w-36']"
    >
      <div class="py-1" >
        <button
          v-for="item in availableLocales"
          :key="item.code"
          class="flex items-center w-full px-3 py-2 text-sm text-gray-900 gap-x-2 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          :class="{ 'bg-gray-200 dark:bg-gray-700': selectedLocale === item.code }"
          @click="switchLanguage(item)"
        >
          <UIcon
            :name="item.icon"
            class="w-6 h-5"
          />
          <span v-if="props.mode === 'flag-with-label'" >{{ item.name }}</span >
        </button >
      </div >
    </div >
  </div >
</template >

<style scoped >
.rotate-180 {
  transform: rotate(180deg);
}
</style >
