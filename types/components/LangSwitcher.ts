export type LocaleCode = string

export interface LocaleConfig {
  code: LocaleCode          // e.g., 'en-US'
  name: string          // e.g., 'English (US)'
  nativeName: string    // e.g., 'English'
  flag: string          // e.g., 'flag:us-4x3'
  region: string        // e.g., 'Americas'
  isRTL?: boolean       // Right-to-left text
  dateFormat?: string   // Custom date format
  enabled?: boolean     // Is this locale currently enabled?
}

export interface LangSwitcherProps {
  mode?: 'flag-only' | 'flag-with-label' | 'full'
  showNativeNames?: boolean
  maxVisible?: number
  groupByRegion?: boolean
  searchable?: boolean
  allowAutoDetect?: boolean
  customFlags?: Record<string, string>
  enabledLocales?: string[]
  disabledLocales?: string[]
  includeRegions?: string[]
  excludeRegions?: string[]
}
