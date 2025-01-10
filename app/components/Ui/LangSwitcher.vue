<script setup lang="ts" >
type DisplayMode = 'flag-only' | 'flag-with-label'
type LocaleCode = 'en' | 'fr' | 'de'

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
    case 'en':
      return 'flag:gb-4x3'
    case 'fr':
      return 'flag:fr-4x3'
    case 'de':
      return 'flag:de-4x3'
    default:
      return 'flag:gb-4x3'
  }
}

const switchLanguage = (locale: LocaleItem) => {
  const path = switchLocalePath(locale.code)
  if (path) {
    navigateTo(path)
    isOpen.value = false
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
        class="h-5 w-6"
      />
      <span v-if="props.mode === 'flag-with-label' && selectedLocaleItem" >
        {{ selectedLocaleItem.name }}
      </span >
      <UIcon
        name="i-heroicons-chevron-down"
        class="h-5 w-5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </UButton >

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-gray-100 dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      :class="[props.mode === 'flag-only' ? 'w-16' : 'w-36']"
    >
      <div class="py-1" >
        <button
          v-for="item in availableLocales"
          :key="item.code"
          class="flex w-full items-center gap-x-2 px-3 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          :class="{ 'bg-gray-200 dark:bg-gray-700': selectedLocale === item.code }"
          @click="switchLanguage(item)"
        >
          <UIcon
            :name="item.icon"
            class="h-5 w-6"
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
