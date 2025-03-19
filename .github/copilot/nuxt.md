# Nuxt 3 Framework Guidelines

## Project Structure
- Follow Nuxt 3/4 directory structure conventions:
  - `app/` - Application-level files and overrides
    - `app/components/` - Global components organized by domain
    - `app/layouts/` - Layout components
    - `app/composables/` - Global composables
    - `app/assets/` - Assets that need processing (CSS, images, etc.)
    - `app/plugins/` - App plugins
    - `app/middleware/` - Route middleware
  - `components/` - Auto-imported Vue components
  - `composables/` - Auto-imported composition functions
  - `pages/` - File-based routing components
  - `server/` - API routes and server utilities
    - `server/api/` - API endpoints
    - `server/middleware/` - Server-side middleware
    - `server/utils/` - Server utilities
  - `public/` - Static assets served at root path
  - `utils/` - Auto-imported utility functions
  - `content/` - Content files for Nuxt Content
  - `types/` - TypeScript type definitions

## Code Organization
- Use named exports for components and composables
- Group related functionality in subdirectories
- Keep component files focused on a single responsibility
- Extract reusable logic to composables
- Use index.ts files for barrel exports

## Nuxt-Specific Features
- Leverage auto-imports for Vue and Nuxt functions
- Use `useAsyncData()` for data fetching with proper key parameters
- Use `useFetch()` for simple API calls
- Use `useState()` for cross-component shared state
- Use `useHead()` and `useSeoMeta()` for SEO optimization
- Use `useNuxtApp()` to access the Nuxt instance
- Use `definePageMeta()` for page metadata
- Use `useNuxtData()` to access prefetched data
- Use `useError()` and `createError()` for error handling
- Use `navigateTo()` for programmatic navigation
- Use `$fetch()` for making HTTP requests

## Routing and Navigation
- Implement nested routes using directory structure
- Use dynamic routes with proper params typing
- Create custom route middleware when needed
- Use route validation with `definePageMeta()`
- Implement param transformers for cleaner URLs
- Use route aliases for backward compatibility
- Implement route guards where appropriate
- Utilize lazy-loading for route components

## Data Fetching
- Fetch data on the server when possible
- Use proper caching strategies
- Implement optimistic updates for better UX
- Handle loading and error states gracefully
- Use `refresh()` for data refetching
- Implement proper request cancellation

## Nuxt UI Components
- Use Nuxt UI components when appropriate
- Extend Nuxt UI theming through tailwind.config.ts
- Create component variants using Tailwind plugins
- Use slots and expose for component customization
- Follow accessibility best practices
- Create composition utilities for complex UI logic
- Use v-model binding with defineModel()

## Performance
- Use server components where appropriate
- Implement proper code splitting strategies
- Use `<NuxtImg>` and `<NuxtPicture>` for optimized images
- Implement lazy loading for offscreen content
- Use proper payload extraction
- Minimize JavaScript bundle size
- Utilize HTTP/2 server push capabilities
- Implement intelligent preloading strategies

## SEO and Metadata
- Set page titles and descriptions for each route
- Implement Open Graph and Twitter card metadata
- Create a sitemap.xml using @nuxtjs/sitemap
- Implement structured data/JSON-LD for rich results
- Use canonical URLs for duplicate content
- Implement i18n SEO best practices

## Error Handling
- Create custom error pages
- Implement graceful API error handling
- Use error boundaries where appropriate
- Log errors for monitoring and debugging
- Implement retry mechanisms for transient errors

## Testing
- Write unit tests for composables
- Create component tests with Vue Test Utils
- Implement end-to-end tests with Playwright or Cypress
- Use Nuxt testing utilities
- Implement proper mocking strategies
