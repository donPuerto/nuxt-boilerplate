<script setup lang="ts">
import type JSConfetti from 'js-confetti'
import { onMounted, ref } from 'vue'
import { useHead } from '#imports'

// Initialize
let jsConfetti: JSConfetti | null = null

// Config
const config = useRuntimeConfig().public

// I18n
// const { t } = useI18n()

// Head configuration
const title = ref('Home')
const description = ref('Welcome to our modern Nuxt.js starter template. Get started with TypeScript, Tailwind CSS, and more.')

useHead(() => ({
  title: title.value,
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
  ],
}))

// Core Packages
const installedPackages = ref([
  {
    name: 'Vue',
    description: 'The Progressive JavaScript Framework for building user interfaces',
    image: '/images/logos/Vue.png',
    version: config.package.vue,
    color: 'emerald',
  },
  {
    name: 'Nuxt',
    description: 'The Intuitive Vue Framework for building modern web applications',
    image: '/images/logos/Nuxt.png',
    version: config.package.nuxt,
    color: 'green',
  },
  {
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript',
    image: '/images/logos/Typescript.png',
    version: config.package.typescript,
    color: 'blue',
  },
  {
    name: 'Nuxt UI',
    description: 'A fully styled and customizable components library for Nuxt',
    image: '/images/logos/NuxtUI.png',
    version: config.package.nuxtUI,
    color: 'yellow',
  },
  {
    name: 'Tailwind',
    description: 'A utility-first CSS framework for rapid UI development',
    image: '/images/logos/Tailwindcss.png',
    version: config.package.tailwind,
    color: 'cyan',
  },
])

// Technologies
const technologies = ref([
  {
    name: 'Vue',
    icon: 'i-custom-vue',
    version: config.dependencies.vue,
    color: 'emerald',
  },
  {
    name: 'Nuxt',
    icon: 'i-custom-nuxt',
    version: config.dependencies.nuxt,
    color: 'primary',
  },
  {
    name: 'TypeScript',
    icon: 'i-custom-typescript',
    version: config.devDependencies.typescript,
    color: 'blue',
  },
  {
    name: 'Nuxt UI',
    icon: 'i-custom-nuxtui',
    version: config.dependencies.nuxtUI,
    color: 'yellow',
  },
  {
    name: 'Tailwind',
    icon: 'i-custom-tailwindcss',
    version: config.devDependencies.tailwind,
    color: 'cyan',
  },
])

// Features
const features = ref([
  {
    name: 'Modern Stack',
    icon: 'i-custom-cube',
    description: 'Built with the latest technologies including Nuxt 4, Vue 3, and TypeScript for a robust development experience.',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript'],
  },
  {
    name: 'UI Components',
    icon: 'i-custom-square',
    description: 'Powered by Nuxt UI, offering a comprehensive set of ready-to-use components that follow best practices.',
    tags: ['Nuxt UI', 'Components', 'TailwindCSS'],
  },
  {
    name: 'Dark Mode',
    icon: 'i-custom-moon',
    description: 'First-class dark mode support with smooth transitions and system preference detection.',
    tags: ['Theme', 'Color Modes', 'Accessibility'],
  },
  {
    name: 'Type Safe',
    icon: 'i-custom-shield',
    description: 'Full TypeScript support with auto-generated types and Vue macros for an enhanced development experience.',
    tags: ['TypeScript', 'Type Safety', 'DX'],
  },
])

// Stats
const baseStats = [
  { name: 'Lighthouse Score', value: '100/100', endValue: 100 },
  { name: 'Bundle Size', value: '< 100kb', endValue: 100 },
  { name: 'Build Time', value: '< 1s', endValue: 1 },
  { name: 'Time to Interactive', value: '< 2s', endValue: 2 },
]

const stats = ref(baseStats.map(stat => ({
  ...stat,
  currentValue: stat.endValue, // Ensure this is always set
})))

const statsRef = ref<HTMLElement | null>(null)
const isIntersecting = ref(false)

// Lifecycle hooks
onMounted(async () => {
  const { default: JSConfetti } = await import('js-confetti')
  jsConfetti = new JSConfetti()
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      if (entry?.isIntersecting && !isIntersecting.value) {
        isIntersecting.value = true
        startCounterAnimation()
      }
    },
    { threshold: 0.2 },
  )

  const element = statsRef.value
  if (element) {
    observer.observe(element)
  }

  return () => {
    if (element) {
      observer.unobserve(element)
    }
  }
});

// Counter animation
const startCounterAnimation = () => {
  stats.value.forEach((stat) => {
    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      stat.currentValue = easeOutQuart * stat.endValue

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
      else {
        stat.currentValue = stat.endValue
      }
    }

    requestAnimationFrame(updateCounter)
  });
};

// Format value
const formatValue = (value: number): string => {
  return Math.round(value).toString() + '+'
}

// Handle stat click
const handleConfetti = async () => {
  if (!jsConfetti) return

  await jsConfetti.addConfetti({
    emojis: ['⭐', '🚀', '💻', '🔥', '✨', '💡', '🎉'],
    emojiSize: 20,
    confettiNumber: 60,
    confettiRadius: 6,
    // confettiSpeed: 0.8,
  })
}
</script>

<template>
  <main>
    <!-- Hero Section -->
    <div>
      <!-- Hero Content -->
      <div class="py-8 sm:py-12 lg:py-16">
        <div class="text-center">
          <h1
            class="text-center text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1] md:text-6xl"
          >
            Build
            <UiTextHighlight
              class="rounded-xl bg-gradient-to-r from-[var(--ui-color-primary-600)] to-[var(--ui-color-primary-400)] px-4 py-1"
              text-end-color="hsl(var(--accent))"
            >
              <UiFlipWords
                :words="['beautiful', 'stunning']"
                :duration="3000"
              />
            </UiTextHighlight>
            websites using Nuxt
          </h1>

          <p class="max-w-4xl mx-auto mt-2 text-xl leading-snug text-gray-600 dark:text-gray-300 sm:text-2xl text-justify sm:text-center">
            A modern, production-ready template featuring Nuxt 4, Vue 3, and TypeScript for a robust development experience.
            Start your next project with best practices and powerful features out of the box.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col items-center justify-center gap-2 mt-6 sm:flex-row">
            <UButton
              to="/components"
              color="primary"
              variant="solid"
              size="xl"
              class="w-full sm:w-auto"
              trailing-icon="i-custom-arrow-right"
            >
              Get Started
            </UButton>
            <UButton
              as="a"
              href="https://github.com"
              target="_blank"
              color="primary"
              variant="outline"
              size="xl"
              class="w-full sm:w-auto"
              leading-icon="i-custom-github"
              trailing-icon="i-custom-external-link"
            >
              GitHub
            </UButton>
          </div>

          <!-- installedPackages -->
          <div class="py-8 mt-6">
            <h2
              class="text-base font-semibold tracking-wide text-gray-600 uppercase cursor-pointer dark:text-gray-400 mb-4"
            >
              Powered by modern technologies
            </h2>
            <ClientOnly>
              <div class="max-w-screen-xl mx-auto ">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                  <CardContainer
                    v-for="pkg in installedPackages"
                    :key="pkg.name"
                    class="w-full"
                  >
                    <CardBody
                      class="relative w-full border p-2 transition-all duration-300 ease-out cursor-pointer bg-[var(--ui-color-primary-50)] dark:bg-[var(--ui-color-primary-950)] hover:bg-[var(--ui-color-primary-100)] dark:hover:bg-[var(--ui-color-primary-900)] flex flex-col h-[180px] rounded-[var(--ui-radius)]"
                      :class="`border-[var(--ui-color-primary-200)] dark:border-[var(--ui-color-primary-800)]
                              hover:shadow-lg hover:shadow-${pkg.color}-500/20`"
                      @click="handleConfetti"
                    >
                      <!-- Package Name -->
                      <CardItem
                        :translate-z="50"
                        class="text-lg font-bold"
                        :class="`text-${pkg.color}-700 dark:text-${pkg.color}-300`"
                      >
                        {{ pkg.name }}
                      </CardItem>

                      <!-- Package Description -->
                      <CardItem
                        as="p"
                        translate-z="60"
                        class="mt-1 text-xs text-left"
                        :class="`text-${pkg.color}-600/90 dark:text-${pkg.color}-400/90`"
                      >
                        {{ pkg.description }}
                      </CardItem>

                      <!-- Package Icon -->
                      <CardItem
                        :translate-z="100"
                        class="flex-1 w-full"
                      >
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="w-16 h-16 relative flex items-center justify-center">
                            <NuxtImg
                              :src="pkg.image"
                              :alt="`${pkg.name} logo`"
                              class="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        </div>
                      </CardItem>

                      <!-- Version Tag -->
                      <CardItem
                        :translate-z="20"
                        class="mt-1 flex justify-end"
                      >
                        <span
                          class="text-[10px] font-medium px-2 py-1 rounded-full transition-colors duration-200"
                          :class="{
                            'bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300': pkg.color === 'emerald',
                            'bg-green-100/80 text-green-700 dark:bg-green-900/30 dark:text-green-300': pkg.color === 'green',
                            'bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300': pkg.color === 'blue',
                            'bg-yellow-100/80 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300': pkg.color === 'yellow',
                            'bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300': pkg.color === 'cyan',
                          }"
                        >
                          {{ pkg.name }} v{{ pkg.version }}
                        </span>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
            </ClientOnly>
          </div>
          <!-- installedPackages -->

         
        </div>
      </div>

      <!-- Bottom Gradient Ball -->
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--ui-color-primary-500)] to-[var(--ui-color-primary-300)] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>

    <!-- Tech Stack -->
    <div>
      <div class="relative isolate overflow-hidden bg-[var(--ui-color-primary-50)] px-6 py-12 shadow-2xl dark:bg-[var(--ui-color-primary-950)] sm:rounded-[var(--ui-radius)] sm:px-16 xl:py-16">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(70rem_50rem_at_top,theme(colors.primary.100),transparent)] dark:bg-[radial-gradient(70rem_50rem_at_top,theme(colors.primary.900),transparent)]" />
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[var(--ui-color-primary-50)] dark:bg-[var(--ui-color-primary-950)] shadow-xl shadow-primary-600/10 ring-1 ring-[var(--ui-color-primary-200)] dark:ring-[var(--ui-color-primary-800)] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div class="absolute left-1/3 top-0 h-[300px] w-[300px] -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-tr from-[var(--ui-color-primary-500)] to-[var(--ui-color-primary-400)] opacity-20 blur-3xl dark:from-[var(--ui-color-primary-400)] dark:to-[var(--ui-color-primary-300)]" style="animation-duration: 8s" />
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
                Everything you need
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Modern Tech Stack
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Built with the latest technologies to ensure your project starts with a solid foundation.
              </p>
            </div>
          </div>
          <dl class="grid grid-cols-1 col-span-2 text-base leading-7 text-gray-600 gap-x-6 gap-y-8 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-12">
            <div v-for="feature in features" :key="feature.name" class="group relative rounded-[var(--ui-radius)] bg-[var(--ui-color-primary-50)] p-6 ring-1 ring-[var(--ui-color-primary-200)] transition duration-300 ease-out group-hover:bg-[var(--ui-color-primary-100)] group-hover:shadow-xl dark:bg-[var(--ui-color-primary-950)] dark:ring-[var(--ui-color-primary-800)] dark:group-hover:bg-[var(--ui-color-primary-900)]">
              <dt class="font-semibold text-gray-900 dark:text-white">
                <div class="absolute flex items-center justify-center -left-3 top-5 size-7 rounded-xl bg-primary-100/50 dark:bg-primary-500/10">
                  <UIcon
                    :name="feature.icon"
                    class="size-4 text-primary-500 dark:text-primary-400"
                  />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-sm">
                {{ feature.description }}
              </dd>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in feature.tags"
                  :key="tag"
                  class="inline-flex items-center rounded-[calc(var(--ui-radius)*0.75rem)] px-2 py-0.5 text-xs font-medium transform transition duration-300 ease-out bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-500 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <UContainer class="relative pb-16 mt-16 sm:pb-24 lg:pb-32">
      <div class="absolute inset-0 overflow-hidden -z-10">
        <div class="absolute inset-0 bg-[radial-gradient(80rem_50rem_at_center,theme(colors.primary.100),transparent)] dark:bg-[radial-gradient(80rem_50rem_at_center,theme(colors.primary.900),transparent)] opacity-30" />
        <div class="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-tr from-[var(--ui-color-primary-500)] to-[var(--ui-color-primary-400)] opacity-20 blur-3xl dark:from-[var(--ui-color-primary-400)] dark:to-[var(--ui-color-primary-300)]" style="animation-duration: 7s" />
      </div>
      <div class="max-w-2xl mx-auto lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Built for Performance
        </h2>
        <p class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
          Our boilerplate is optimized for speed, developer experience, and production readiness.
        </p>
      </div>
      <dl ref="statsRef" class="grid max-w-2xl grid-cols-1 mx-auto mt-4 text-white gap-x-6 gap-y-8 sm:mt-6 sm:grid-cols-2 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="group relative rounded-[var(--ui-radius)] bg-[var(--ui-color-primary-50)] p-6 ring-1 ring-[var(--ui-color-primary-200)] transition-all duration-300 ease-out hover:bg-[var(--ui-color-primary-100)] hover:shadow-xl dark:bg-[var(--ui-color-primary-950)] dark:ring-[var(--ui-color-primary-800)] dark:hover:bg-[var(--ui-color-primary-900)]"
        >
          <dt class="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
            {{ stat.name }}
          </dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {{ formatValue(stat.currentValue) }}
          </dd>
          <div class="absolute bottom-0 left-0 w-full h-1 transition-opacity duration-200 opacity-0 bg-gradient-to-r from-primary-600 to-purple-600 group-hover:opacity-100" />
        </div>
      </dl>
    </UContainer>
  </main>
</template>
