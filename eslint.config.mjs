import globals from "globals";
import stylisticJs from '@stylistic/eslint-plugin-js'
import vitest_globals from 'eslint-plugin-vitest-globals'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
          js: true
        }
      }
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      vitest_globals
    },
    rules: {
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/semi': [
        'error',
        'never'
      ],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
        'error', 'always'
      ],
      'arrow-spacing': [
        'error', { 'before': true, 'after': true },
      ],
      'no-console': 'off',
    },
  },
  { 
    ignores: ["**/dist/**", "build/**", "**/vite.config.js"],
  },
]