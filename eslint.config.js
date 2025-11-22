import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'

export default defineConfig([
  {
    name: 'app/files-to-ignore',
    ignores: ['**/coverage/**', '**/dist/**']
  },
  {
    name: 'app/language-options',
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },

  js.configs.recommended,

  {
    name: 'app/custom-rules',
    files: ['**/*.{ts}'],
    rules: {}
  }
])
