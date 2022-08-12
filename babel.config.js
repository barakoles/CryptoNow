module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['transform-inline-environment-variables'],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/shared/components/',
          '@hooks': './src/hooks/',
          '@redux': './src/redux/',
          '@i18n': './src/i18n/',
          '@config': './src/config/',
          '@features': './src/features/',
          '@navigation': './src/navigation/',
          '@types': './src/types/',
          '@utils': './src/utils/',
          '@locales': './src/locales/',
          '@assets': './src/assets/',
          '@constants': './src/constants/',
          '@screens': './src/screens/',
          '@shared': './src/shared/',
          '@vars': './src/shared/vars',
          '@core': './src/core/',
        },
      },
    ],
  ],
};
