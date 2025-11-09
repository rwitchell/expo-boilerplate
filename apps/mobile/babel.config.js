// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      'react-native-reanimated/plugin',
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
      '@babel/plugin-transform-class-static-block',
    ],
  }
}
