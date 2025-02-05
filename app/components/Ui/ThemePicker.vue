<script lang="ts" setup >
import colors from 'tailwindcss/colors'
import { omit } from '#ui/utils'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const neutralColors = ['slate', 'gray', 'zinc', 'neutral', 'stone']
const neutral = computed({
  get() {
    return appConfig.ui.colors.neutral
  },
  set(option) {
    appConfig.ui.colors.neutral = option
    window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.colors.neutral)
  },
})

const colorsToOmit = ['inherit', 'current', 'transparent', 'black', 'white', ...neutralColors]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const primaryColors = Object.keys(omit(colors, colorsToOmit as any))

const primary = computed({
  get() {
    return appConfig.ui.colors.primary
  },
  set(option) {
    appConfig.ui.colors.primary = option
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.colors.primary)
  },
})

const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
const radius = computed({
  get() {
    return appConfig.theme.radius
  },
  set(option) {
    appConfig.theme.radius = option
    window.localStorage.setItem('nuxt-ui-radius', String(appConfig.theme.radius))

    // Update the CSS variable
    document.documentElement.style.setProperty('--ui-radius', `${option}rem`)
  },
})

const modes = [
  { label: 'light', icon: appConfig.ui.icons.light },
  { label: 'dark', icon: appConfig.ui.icons.dark },
]
const mode = computed({
  get() {
    return colorMode.value
  },
  set(option) {
    colorMode.preference = option
  },
})
</script >

<template >
  <UPopover :ui="{ content: 'w-72 px-6 py-4 flex flex-col gap-4' }" >
    <template #default="{ open }" >
      <UButton
        size="xl"
        icon="i-custom-swatch"
        color="neutral"
        :variant="open ? 'soft' : 'ghost'"
        square
        aria-label="Color picker"
        :ui="{ leadingIcon: 'text-[var(--ui-primary)]' }"
      />
    </template >
    <template #content >
      <fieldset >
        <legend class="text-[11px] leading-none font-semibold mb-2" >
          Primary
        </legend >
        <div class="grid grid-cols-3 gap-1 -mx-2" >
          <UiThemePickerButton
            v-for="color in primaryColors"
            :key="color"
            :label="color"
            :chip="color"
            :selected="primary === color"
            @click="primary = color"
          />
        </div >
      </fieldset >

      <fieldset >
        <legend class="text-[11px] leading-none font-semibold mb-2" >
          Neutral
        </legend >

        <div class="grid grid-cols-3 gap-1 -mx-2" >
          <UiThemePickerButton
            v-for="color in neutralColors"
            :key="color"
            :label="color"
            :chip="color"
            :selected="neutral === color"
            @click="neutral = color"
          />
        </div >
      </fieldset >

      <fieldset >
        <legend class="text-[11px] leading-none font-semibold mb-2" >
          Radius
        </legend >

        <div class="grid grid-cols-5 gap-1 -mx-2" >
          <UiThemePickerButton
            v-for="r in radiuses"
            :key="r"
            :label="String(r)"
            class="justify-center px-0"
            :selected="radius === r"
            @click="radius = r"
          />
        </div >
      </fieldset >

      <fieldset >
        <legend class="text-[11px] leading-none font-semibold mb-2" >
          Theme
        </legend >

        <div class="flex gap-1 -mx-2" >
          <UiThemePickerButton
            v-for="m in modes"
            :key="m.label"
            v-bind="m"
            :selected="mode === m.label"
            @click="mode = m.label"
          />
        </div >
      </fieldset >
    </template >
  </UPopover >
</template >
