<script setup lang="ts">
import type { LocaleConfig, LangSwitcherProps } from '../../../types'
import { ALL_LOCALES, getLocaleByCode, getLocalesByRegion } from '~/config/locales'

const props = withDefaults(defineProps<LangSwitcherProps>(), {
  mode: 'flag-with-label',
  showNativeNames: false,
  maxVisible: 5,
  groupByRegion: false,
  searchable: false,
  allowAutoDetect: true,
  customFlags: () => ({}),
  enabledLocales: () => [],
  disabledLocales: () => [],
  includeRegions: () => [],
  excludeRegions: () => [],
})

const { locale, locales, setLocale } = useI18n()
const router = useRouter()
const isOpen = ref(false)
const searchQuery = ref('')
const currentIndex = ref(0)

// Computed properties for filtered and grouped locales
const filteredLocales = computed(() => {
  let filtered = ALL_LOCALES

  // Filter by enabled/disabled status
  if (props.enabledLocales.length > 0) {
    filtered = filtered.filter(l => props.enabledLocales.includes(l.code))
  }
  else {
    filtered = filtered.filter(l => l.enabled || !props.disabledLocales.includes(l.code))
  }

  // Filter by regions
  if (props.includeRegions.length > 0) {
    filtered = filtered.filter(l => props.includeRegions.includes(l.region))
  }
  if (props.excludeRegions.length > 0) {
    filtered = filtered.filter(l => !props.excludeRegions.includes(l.region))
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(l =>
      l.name.toLowerCase().includes(query)
      || l.nativeName.toLowerCase().includes(query),
    );
  }

  return filtered
});

const groupedLocales = computed(() => {
  if (!props.groupByRegion) return { All: filteredLocales.value }
  return filteredLocales.value.reduce((acc, locale) => {
    const region = locale.region || 'Other'
    acc[region] = acc[region] || []
    acc[region].push(locale)
    return acc
  }, {} as Record<string, LocaleConfig[]>)
});

const selectedLocale = computed(() => {
  return getLocaleByCode(locale.value as string)
});

// Methods
async function switchLanguage(item: LocaleConfig) {
  try {
    await setLocale(item.code)
    isOpen.value = false
    // Force a page refresh to ensure translations are updated
    window.location.reload()
  }
  catch (error) {
    console.error('Error switching language:', error)
  }
}

// Keyboard navigation
const handleKeyboard = (e: KeyboardEvent) => {
  if (!isOpen.value) return

  switch (e.key) {
    case 'ArrowDown':
      currentIndex.value = (currentIndex.value + 1) % filteredLocales.value.length
    break;
    case 'ArrowUp':
      currentIndex.value = currentIndex.value - 1 < 0
        ? filteredLocales.value.length - 1
        : currentIndex.value - 1
    break;
    case 'Enter': {
      const selectedLocale = filteredLocales.value[currentIndex.value]
    if (selectedLocale) {
        switchLanguage(selectedLocale)
    }
      break;
    }
    case 'Escape':
      isOpen.value = false
    break;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
});
</script>

<template>
  <div class="relative">
    <UButton
      variant="ghost"
      type="button"
      :class="[props.mode === 'flag-only' ? 'w-16' : props.mode === 'full' ? 'w-72' : 'w-36']"
      @click="isOpen = !isOpen"
    >
      <template v-if="selectedLocale">
        <UIcon
          :name="selectedLocale.flag"
          class="w-6 h-5"
        />
        <template v-if="props.mode !== 'flag-only'">
          <span class="locale-name">{{ selectedLocale.name }}</span>
          <span
            v-if="props.showNativeNames && selectedLocale.nativeName !== selectedLocale.name"
            class="native-name text-sm text-gray-500"
          >
            {{ selectedLocale.nativeName }}
          </span>
        </template>
      </template>
      <UIcon
        name="i-heroicons-chevron-down"
        class="w-5 h-5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </UButton>

    <div
      v-if="isOpen"
      class="absolute right-0 z-50 mt-2 origin-top-right rounded-md shadow-lg focus:outline-none"
      :class="[props.mode === 'flag-only' ? 'w-16' : props.mode === 'full' ? 'w-72' : 'w-36']"
    >
      <div class="py-1 bg-white dark:bg-gray-800 rounded-md ring-1 ring-black ring-opacity-5">
        <!-- Search -->
        <div
          v-if="props.searchable && filteredLocales.length > props.maxVisible"
          class="px-3 py-2 border-b border-gray-200 dark:border-gray-700"
        >
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass"
            placeholder="Search languages..."
            class="w-full"
          />
        </div>

        <!-- Locale List -->
        <template v-if="props.groupByRegion">
          <div v-for="(locales, region) in groupedLocales" :key="region" class="py-2">
            <div class="px-3 text-xs font-medium text-gray-500 uppercase">
              {{ region }}
            </div>
            <button
              v-for="item in locales"
              :key="item.code"
              type="button"
              class="flex items-center w-full px-3 py-2 text-sm text-gray-900 gap-x-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-200"
              :class="{
                'bg-gray-100 dark:bg-gray-700': selectedLocale?.code === item.code,
                'cursor-pointer': true,
                'rtl': item.isRTL,
              }"
              @click="switchLanguage(item)"
            >
              <UIcon
                :name="item.flag"
                class="w-6 h-5 flex-shrink-0"
              />
              <div class="flex flex-col items-start">
                <span class="font-medium">{{ item.name }}</span>
                <span
                  v-if="props.showNativeNames && item.nativeName !== item.name"
                  class="text-xs text-gray-500"
                >
                  {{ item.nativeName }}
                </span>
              </div>
            </button>
          </div>
        </template>
        <template v-else>
          <button
            v-for="item in filteredLocales"
            :key="item.code"
            type="button"
            class="flex items-center w-full px-3 py-2 text-sm text-gray-900 gap-x-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-200"
            :class="{
              'bg-gray-100 dark:bg-gray-700': selectedLocale?.code === item.code,
              'cursor-pointer': true,
              'rtl': item.isRTL,
            }"
            @click="switchLanguage(item)"
          >
            <UIcon
              :name="item.flag"
              class="w-6 h-5 flex-shrink-0"
            />
            <div class="flex flex-col items-start">
              <span class="font-medium">{{ item.name }}</span>
              <span
                v-if="props.showNativeNames && item.nativeName !== item.name"
                class="text-xs text-gray-500"
              >
                {{ item.nativeName }}
              </span>
            </div>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
