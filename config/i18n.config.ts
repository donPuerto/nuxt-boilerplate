const i18nConfig = {
  strategy: 'prefix_except_default',
  defaultLocale: 'en-US',
  locales: [
    {
      code: 'en-US',
      name: 'English',
      file: 'en.ts',
    },
    {
      code: 'de-DE',
      name: 'Deutsch',
      file: 'de.ts',
    },
    {
      code: 'fr-FR',
      name: 'Français',
      file: 'fr.ts',
    },
  ],
  lazy: true,
  langDir: 'i18n/locales',
}

export default i18nConfig