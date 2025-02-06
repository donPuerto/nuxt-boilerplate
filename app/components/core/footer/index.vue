<script setup lang="ts">
const socials = [
  {
    name: 'Twitter',
    icon: 'i-custom-x',
    url: 'https://x.com/donpuerto_',
  },
  {
    name: 'LinkedIn',
    icon: 'i-custom-linkedin',
    url: 'https://www.linkedin.com/in/don-puerto-58a26295/',
  },
  {
    name: 'GitHub',
    icon: 'i-custom-github',
    url: 'https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate',
  },
]
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-12 flex flex-col items-center gap-8">
        <!-- Logo -->
        <div class="flex justify-center">
          <UIcon
            color="primary"
            name="i-custom-logo"
            size="32"
            class="text-primary-500 dark:text-primary-400 transition-all duration-300 hover:scale-110 hover:animate-pulse sm:size-36 md:size-40 lg:size-44"
          />
        </div>

        <!-- Copyright -->
        <div class="text-center">
          <p class="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">
            {{ new Date().getFullYear() }} Nuxt Boilerplate. All rights reserved.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-4 sm:gap-6 md:gap-8">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            :aria-label="social.name"
            class="inline-flex items-center justify-center rounded-[var(--ui-radius)] p-1.5 sm:p-2 md:p-2.5 text-[var(--ui-color-primary-600)] hover:text-[var(--ui-color-primary-500)] hover:bg-[var(--ui-color-primary-50)] dark:text-[var(--ui-color-primary-400)] dark:hover:text-[var(--ui-color-primary-300)] dark:hover:bg-[var(--ui-color-primary-950)] transition-all duration-300 hover:scale-110"
          >
            <Icon
              :name="social.icon"
              :size="22"
              class="sm:text-3xl md:text-4xl"
            />
          </a>
        </div>

        <!-- Description -->
        <p class="text-center text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-4">
          A modern and feature-rich boilerplate built with Nuxt 4, enhanced by Nuxt UI 3, and powered by TailwindCSS. Perfect for building scalable, performant, and beautiful web applications.
        </p>
      </div>
    </div>
  </footer>
</template>
