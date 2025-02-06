<script setup lang="ts">
interface NavigationItem {
  label: string
  icon?: string
  onSelect: () => void
  active?: boolean
  suffix?: string
  kbds?: string[]
}

interface Props {
  navigation: NavigationItem[]
}

const props = defineProps<Props>()
const open = ref(false)

// Transform navigation items to command palette format
const navigationItems = computed(() => {
  return props.navigation.map(item => ({
    id: item.label,
    label: item.label,
    icon: item.icon,
    suffix: item.suffix,
    shortcuts: item.kbds,
    onSelect: item.onSelect,
  }))
});

const onSelect = (item: any) => {
  if (item?.onSelect) {
    item.onSelect()
    open.value = false
  }
}

// Keyboard shortcut to open command palette
defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      open.value = true
    },
  },
})
</script>

<template>
  <UModal v-model:open="open" :title="'Command Palette'" :description="'Search commands and navigation'">
    <UButton
      size="xl"
      color="primary"
      variant="ghost"
      icon="i-custom-search"
      @click="open = true"
    />

    <template #content>
      <!-- Dialog Title -->
      <h2 id="command-palette-title" class="sr-only">
        Command Palette
      </h2>
      <!-- Dialog Description -->
      <p id="command-palette-description" class="sr-only">
        Search commands and navigation
      </p>
      <UCommandPalette
        :groups="[{ id: 'navigation', label: 'Navigation', items: navigationItems }]"
        @update:open="open = $event"
        @select="onSelect"
      />
    </template>
  </UModal>
</template>
