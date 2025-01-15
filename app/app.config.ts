export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    expand: true,
    duration: 5000,
  },
  theme: {
    radius: 0.25,
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
    icons: {
      light: 'i-heroicons-sun-20-solid',
      dark: 'i-heroicons-moon-20-solid',
      arrowLeft: 'i-heroicons-arrow-left-20-solid',
      arrowRight: 'i-heroicons-arrow-right-20-solid',
      check: 'i-heroicons-check-20-solid',
      chevronDoubleLeft: 'i-heroicons-chevron-double-left-20-solid',
      search: 'i-heroicons-search-20-solid',
    },
  },
})
