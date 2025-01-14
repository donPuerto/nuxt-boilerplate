import { messages } from '../app/locales/messages'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en-US',
  messages
}))