<script setup lang="ts" >
// I18n
const { t } = useI18n()

// Head configuration
const title = ref('Roadmap')
const description = ref('Discover our future plans and upcoming features. See what we are working on next.')

useHead(() => ({
  title: title.value,
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
  ],
}))
</script >

<template >
  <div >
    Road Map
  </div >
</template >
