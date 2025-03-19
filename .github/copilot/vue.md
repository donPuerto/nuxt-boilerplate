# Vue Component Guidelines

## Structure and Organization
- Always use Composition API with `<script setup lang="ts">`
- Order component sections: <script>, <template>, <style>
- Structure script content in this order:
  1. Imports
  2. Props (use defineProps<{...}>() with TS interfaces)
  3. Models (use defineModel() for v-model bindings - Vue 3.4+)
  4. Emits (use defineEmits<{...}>())
  5. Options (use defineOptions() when needed - Vue 3.3+)
  6. Constants
  7. Refs/Reactive state
  8. Computed properties
  9. Watch functions
  10. Methods

## Best Practices
- Use `shallowRef` for large objects when appropriate
- Prefer ref() over reactive() for primitive values
- Use `readonly()` for immutable derived state
- Use template refs with typed variables
- Implement proper cleanup in `onUnmounted()`
- Use type-safe event handlers

## Component Design
- Keep components focused on a single responsibility
- Extract complex logic to composables
- Use slots for flexible, reusable components
- Properly type component props and emits
