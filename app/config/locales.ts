import type { LocaleConfig } from '../../types'

export const ALL_LOCALES: LocaleConfig[] = [
  // Americas
  {
    code: 'en-US',
    name: 'English (US)',
    nativeName: 'English',
    flag: 'flag:us-4x3',
    region: 'Americas',
    enabled: true
  },
  {
    code: 'es-MX',
    name: 'Spanish (Mexico)',
    nativeName: 'Español',
    flag: 'flag:mx-4x3',
    region: 'Americas'
  },
  {
    code: 'pt-BR',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português',
    flag: 'flag:br-4x3',
    region: 'Americas'
  },

  // Europe
  {
    code: 'en-GB',
    name: 'English (UK)',
    nativeName: 'English',
    flag: 'flag:gb-4x3',
    region: 'Europe'
  },
  {
    code: 'fr-FR',
    name: 'French',
    nativeName: 'Français',
    flag: 'flag:fr-4x3',
    region: 'Europe',
    enabled: true
  },
  {
    code: 'de-DE',
    name: 'German',
    nativeName: 'Deutsch',
    flag: 'flag:de-4x3',
    region: 'Europe',
    enabled: true
  },
  {
    code: 'es-ES',
    name: 'Spanish (Spain)',
    nativeName: 'Español',
    flag: 'flag:es-4x3',
    region: 'Europe'
  },
  {
    code: 'it-IT',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: 'flag:it-4x3',
    region: 'Europe'
  },

  // Asia
  {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '中文',
    flag: 'flag:cn-4x3',
    region: 'Asia'
  },
  {
    code: 'zh-TW',
    name: 'Chinese (Traditional)',
    nativeName: '繁體中文',
    flag: 'flag:tw-4x3',
    region: 'Asia'
  },
  {
    code: 'ja-JP',
    name: 'Japanese',
    nativeName: '日本語',
    flag: 'flag:jp-4x3',
    region: 'Asia'
  },
  {
    code: 'ko-KR',
    name: 'Korean',
    nativeName: '한국어',
    flag: 'flag:kr-4x3',
    region: 'Asia'
  },

  // Middle East
  {
    code: 'ar-SA',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: 'flag:sa-4x3',
    region: 'Middle East',
    isRTL: true
  },
  {
    code: 'he-IL',
    name: 'Hebrew',
    nativeName: 'עברית',
    flag: 'flag:il-4x3',
    region: 'Middle East',
    isRTL: true
  },

  // Oceania
  {
    code: 'en-AU',
    name: 'English (Australia)',
    nativeName: 'English',
    flag: 'flag:au-4x3',
    region: 'Oceania'
  },
  {
    code: 'en-NZ',
    name: 'English (New Zealand)',
    nativeName: 'English',
    flag: 'flag:nz-4x3',
    region: 'Oceania'
  }
]

// Helper functions
export const getLocaleByCode = (code: string): LocaleConfig | undefined => {
  return ALL_LOCALES.find(locale => locale.code === code)
}

export const getEnabledLocales = (): LocaleConfig[] => {
  return ALL_LOCALES.filter(locale => locale.enabled)
}

export const getLocalesByRegion = (region: string): LocaleConfig[] => {
  return ALL_LOCALES.filter(locale => locale.region === region)
}

export const getAllRegions = (): string[] => {
  return [...new Set(ALL_LOCALES.map(locale => locale.region))]
}
