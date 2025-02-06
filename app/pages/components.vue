<script setup lang="ts">
// I18n
const { t } = useI18n()

// Head configuration
const title = ref('Components')
const description = ref('Explore our collection of UI components. Find beautiful, responsive, and accessible components for your next project.')

useHead(() => ({
  title: title.value,
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
  ],
}))
</script>

<template>
  <div>
    Components
  </div>
</template>

<style>

</style>
