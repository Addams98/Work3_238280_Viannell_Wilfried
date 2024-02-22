module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-reanimated/plugin',
        {
          // Add any plugin options here if needed
        },
      ],
    ],
  };
};
