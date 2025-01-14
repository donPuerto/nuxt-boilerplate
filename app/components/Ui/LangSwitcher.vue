<script setup lang="ts" >
type DisplayMode = 'flag-only' | 'flag-with-label'
type LocaleCode = 'en-US' | 'fr-FR' | 'de-DE'

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

const { locale, locales, setLocale } = useI18n()
const router = useRouter()
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
    case 'en-US':
      return 'flag:us-4x3'
    case 'fr-FR':
      return 'flag:fr-4x3'
    case 'de-DE':
      return 'flag:de-4x3'
    default:
      return 'flag:us-4x3'
  }
}

async function switchLanguage(item: LocaleItem) {
  try {
    await setLocale(item.code)
    isOpen.value = false
    // Force a page refresh to ensure translations are updated
    window.location.reload()
  } catch (error) {
    console.error('Error switching language:', error)
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
      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md shadow-lg focus:outline-none"
      :class="[props.mode === 'flag-only' ? 'w-16' : 'w-36']"
    >
      <div class="py-1 bg-white dark:bg-gray-800 rounded-md ring-1 ring-black ring-opacity-5" >
        <button
          v-for="item in availableLocales"
          :key="item.code"
          type="button"
          class="flex items-center w-full px-3 py-2 text-sm text-gray-900 gap-x-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-200"
          :class="{ 'bg-gray-100 dark:bg-gray-700': selectedLocale === item.code }"
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
