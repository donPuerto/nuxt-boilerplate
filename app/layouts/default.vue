<script setup lang="ts">
const isDark = computed(() => useColorMode().value == 'dark');
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Inspira UI Particles Background -->
    <UiParticlesBg
      class="fixed inset-0 z-0"
      :quantity="400"
      :ease="400"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />

    <!-- Content Container -->
    <div class="container mx-auto px-4 relative z-10">
      <CoreNavbar />
      <div class="min-h-screen">
        <slot />
      </div>
      <CoreFooter />
    </div>
  </div>
</template>
