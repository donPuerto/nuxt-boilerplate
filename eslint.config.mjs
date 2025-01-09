import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      // Disables the rule that bans certain types in TypeScript
      '@typescript-eslint/ban-types': 'off',
      // Controls line breaks before tag's closing brackets
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',

      }],
      // Requires consistent spacing before tag's closing brackets
      'vue/html-closing-bracket-spacing': ['error', 'always'],
    },
    ignores: [
      'node_modules/',
      'test/assets',
      '**/.nuxt',
      '**/.output',
      'dist',
    ],
  },
  {
    files: ['**/*.vue'],
    rules: {
      // Enforces a specific order of component tags: <script>, then <template>, then <style>
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      // Enforces consistent indentation in <template> (2 spaces)
      'vue/html-indent': ['error', 2],
      // Controls line breaks before tag's closing brackets
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      // Requires consistent spacing before tag's closing brackets
      'vue/html-closing-bracket-spacing': 'error',
      // Disables the rule that warns against using v-html
      'vue/no-v-html': 'off',
      // Enforces self-closing on HTML elements
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      }],
      // Limits the maximum number of attributes allowed per line
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1,
      }],
      // Disables the rule requiring multi-word component names
      'vue/multi-word-component-names': 'off',
      // Disables the rule requiring default values for props
      'vue/require-default-prop': 'off',
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    // trailingComma: 'es5',
    // arrowParens: 'always',
    // bracketSpacing: true,
    // singleQuote: true,
    tabWidth: 2,
    // useTabs: false,
    // endOfLine: 'lf',
    // plugins: ['stylistic'],
    // rules: {
    //   'stylistic/indent': ['error', 2],
    //   'stylistic/no-trailing-spaces': 'error',
    //   'stylistic/eol-last': 'error',
    //   'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    //   'stylistic/space-before-function-paren': ['error', 'never'],
    //   'stylistic/space-in-parens': ['error', 'never'],
    //   'stylistic/object-curly-spacing': ['error', 'always'],
    // },
  }),
)
