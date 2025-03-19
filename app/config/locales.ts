import type { LocaleConfig } from '../../types'

export const ALL_LOCALES: LocaleConfig[] = [
  {
    code: 'en-US',
    name: 'English',
    language: 'en-US',
    dir: 'ltr',
    nativeName: 'English',
    flag: 'flag:us-4x3',
    region: 'Americas',
  },
  {
    code: 'fr-FR',
    name: 'Français',
    language: 'fr-FR',
    dir: 'ltr',
    nativeName: 'Français',
    flag: 'flag:fr-4x3',
    region: 'Europe',
  },
  {
    code: 'de-DE',
    name: 'Deutsch',
    language: 'de-DE',
    dir: 'ltr',
    nativeName: 'Deutsch',
    flag: 'flag:de-4x3',
    region: 'Europe',
  },
];

// Helper functions
export const getLocaleByCode = (code: string): LocaleConfig | undefined => {
  return ALL_LOCALES.find(locale => locale.code === code)
}

export const getEnabledLocales = (): LocaleConfig[] => {
  return ALL_LOCALES
}

export const getLocalesByRegion = (region: string): LocaleConfig[] => {
  return ALL_LOCALES.filter(locale => locale.region === region)
}

export const getAllRegions = (): string[] => {
  return [...new Set(ALL_LOCALES.map(locale => locale.region))]
}
