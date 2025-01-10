<script setup lang="ts" >
defineProps<{
  label: string
  icon?: string
  chip?: string
  selected?: boolean
}>()
</script >

<template >
  <UButton
    size="sm"
    color="neutral"
    :icon="icon"
    :label="label"
    :variant="selected ? 'soft' : 'outline'"
  >
    <template v-if="chip" #leading >
      <span
        class="inline-block w-2 h-2 rounded-full"
        :class="`bg-[var(--color-light)] dark:bg-[var(--color-dark)]`"
        :style="{
          '--color-light': `var(--color-${chip}-500)`,
          '--color-dark': `var(--color-${chip}-400)`,
        }"
      />
    </template >
  </UButton >
</template >
