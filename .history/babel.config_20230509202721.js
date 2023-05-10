module.exports = function(api) {
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',
          'allowUndefined': false
        }
      ]
    ]
  };
};