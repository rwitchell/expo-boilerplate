/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'avoid',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    'prettier-plugin-packagejson',
    // 'prettier-plugin-tailwindcss'
  ],
}

export default config
