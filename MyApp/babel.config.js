module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // NativeWind plugin for Tailwind CSS support
      'nativewind/babel',
      // React Native Reanimated plugin (must be listed last)
      'react-native-reanimated/plugin',
    ],
  };
};
