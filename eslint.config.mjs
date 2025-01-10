import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-types': 'off',
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'always',
        endTag: 'always',
        selfClosingTag: 'always',
      }],
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
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'always',
        endTag: 'always',
        selfClosingTag: 'always',
      }],
      'vue/no-v-html': 'off',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1,
      }],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    trailingComma: 'es5',
    arrowParens: 'always',
    bracketSpacing: true,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    endOfLine: 'lf',
    plugins: ['stylistic'],
    rules: {
      'stylistic/indent': ['error', 2],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/eol-last': 'error',
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'stylistic/space-before-function-paren': ['error', 'never'],
      'stylistic/space-in-parens': ['error', 'never'],
      'stylistic/object-curly-spacing': ['error', 'always'],
    },
  }),
)
