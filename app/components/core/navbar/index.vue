<script setup lang="ts" >
const isDrawerOpen = ref(false)
const commandPaletteOpen = ref(false)
const router = useRouter()

const toggleDrawer = () => {
  isDrawerOpen.value = !!isDrawerOpen.value
}

defineShortcuts({
  meta_g: () => {
    window.open('https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate', '_blank')
  },
  o: () => isDrawerOpen.value = !isDrawerOpen.value,
  meta_t: () => {
    // Define action for Theme Picker shortcut
    // Example: Toggle theme picker
  },
  meta_k: () => {
    commandPaletteOpen.value = true
  },
})

const navigation = [
  {
    label: 'Components',
    suffix: '✨ A Collection of Beautiful Nuxt UI Components',
    icon: 'i-lucide-layout-template',
    onSelect: () => navigateTo('/components', { replace: true }),
    kbds: ['meta', 'C'],
    active: true,
  },
  {
    label: 'Roadmap',
    suffix: '📋 Roadmap Board: Progress and Plans',
    icon: 'i-carbon:roadmap',
    onSelect: () => navigateTo('/roadmap', { replace: true }),
    kbds: ['meta', 'R'],
  },
  {
    label: 'Releases',
    suffix: '🔥 Release Highlights: New Features & Fixes',
    icon: 'i-catppuccin:release',
    onSelect: () => navigateTo('/releases', { replace: true }),
    kbds: ['meta', 'E'],
  },
]
</script >

<template >
  <nav class="border-b border-gray-200 dark:border-gray-800" >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" >
      <div class="flex items-center justify-between h-16" >
        <!-- Left side: Logo and Title -->
        <div class="flex items-center" >
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-[var(--ui-text-highlighted)] min-w-0 focus-visible:outline-[var(--ui-primary)] shrink-0" aria-label="Nuxt UI" >
            <UIcon
              name="i-custom-logo"
              class="w-auto size-10 text-[var(--ui-color-primary)] dark:text-[var(--ui-color-primary-400)]"
            />
            <span class="hidden text-lg font-bold tracking-tight text-gray-900 lg:block dark:text-white" >
              Nuxt <span class="text-[var(--ui-primary)]" >Boilerplate</span >
            </span >
          </NuxtLink >
        </div >

        <!-- Middle: Navigation -->
        <div class="items-center hidden space-x-8 md:flex" >
          <UiNavigationMenu :navigation="navigation" />
        </div >

        <!-- Right side: Icons -->
        <div class="flex items-center space-x-2" >
          <UiThemePicker />
          <UiCommandPalette :navigation="navigation" />

          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden lg:flex" >
            <UButton
              color="primary"
              size="xl"
              variant="ghost"
              to="https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
            />
          </UTooltip >
          <UiLangSwitcher mode="flag-only" />
          <UDrawer
            v-model:open="isDrawerOpen"
            should-scale-background
            handle
            title="Pages"
            description="Navigation menu for mobile devices"
          >
            <UButton
              size="xl"
              :icon="isDrawerOpen ? 'i-lucide-x' : 'i-lucide-menu'"
              color="primary"
              variant="ghost"
              class="lg:hidden"
              aria-label="Toggle navigation menu"
              @click="toggleDrawer"
            />

            <template #body >
              <div class="h-64" >
                <UNavigationMenu
                  orientation="vertical"
                  color="primary"
                  variant="link"
                  highlight
                  :items="navigation"
                  class="justify-center"
                />
              </div >
            </template >
          </UDrawer >
        </div >
      </div >
    </div >
  </nav >
</template >
