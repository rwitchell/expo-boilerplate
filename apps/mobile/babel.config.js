// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@babel/plugin-transform-runtime', 'react-native-reanimated/plugin'],
  }
}
