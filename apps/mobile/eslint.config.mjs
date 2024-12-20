// @ts-check

// import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import packageJson from 'eslint-plugin-package-json/configs/recommended'

export default [
  {
    name: 'recommended-rules-with-override',
    files: ['**/*.js'],
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  packageJson,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  // OVERRIDES BELOW
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]
