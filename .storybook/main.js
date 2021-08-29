const path = require('path');

module.exports = {
  'stories': [
    '../src/components/ui/**/**/*.stories.mdx',
    '../src/components/ui/**/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '~src': path.resolve(__dirname, '..', 'src'),
      '~components': path.resolve(__dirname, '..', 'src/components'),
      '~templates': path.resolve(__dirname, '..', 'src/components/ui/templates'),
      '~organisms': path.resolve(__dirname, '..', 'src/components/ui/organisms'),
      '~molecules': path.resolve(__dirname, '..', 'src/components/ui/molecules'),
      '~atoms': path.resolve(__dirname, '..', 'src/components/ui/atoms'),
      '~styles': path.resolve(__dirname, '..', './src/styles'),
      '~assets': path.resolve(__dirname, '..', './public/assets'),
      '~svg': path.resolve(__dirname, '..', './public/assets/svg'),
      '~img': path.resolve(__dirname, '..', './public/assets/img'),
    };
    return config;
  },
}
