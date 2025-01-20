export type LocaleCode = 'en-US' | 'fr-FR' | 'de-DE'

export interface LocaleConfig {
  code: LocaleCode
  name: string
  language: string
  dir?: 'ltr' | 'rtl'
  nativeName: string
  flag: string
  region: string
  isRTL?: boolean
  dateFormat?: string
  enabled?: boolean
}

export interface LangSwitcherProps {
  mode?: 'flag-only' | 'flag-with-label' | 'full'
  showNativeNames?: boolean
  maxVisible?: number
  groupByRegion?: boolean
  searchable?: boolean
  allowAutoDetect?: boolean
  customFlags?: Record<string, string>
  enabledLocales?: LocaleCode[]
  disabledLocales?: LocaleCode[]
  includeRegions?: string[]
  excludeRegions?: string[]
}
