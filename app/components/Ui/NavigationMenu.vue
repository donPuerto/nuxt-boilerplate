<script setup lang="ts" >
import { defineProps, computed } from 'vue'

// Define the NavigationMenuItem type
type NavigationMenuItem = {
  label: string
  icon?: string
  onSelect: () => void
  active?: boolean
  suffix?: string
  kbds?: string[]
}

const props = defineProps<{
  navigation: NavigationMenuItem[]
}>()

// Transform navigation items to use onSelect for navigation
const items = computed(() => props.navigation.map((item) => ({
  ...item,
  click: () => item.onSelect(),
})))
</script >

<template >
  <UNavigationMenu
    color="primary"
    variant="link"
    highlight
    :items="items"
    class="justify-center"
  />
</template >
