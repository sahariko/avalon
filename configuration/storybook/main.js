const webpackConfig = require('../webpack.config');

module.exports = {
    stories: [
        '../../client/**/story.tsx'
    ],
    addons: ['@storybook/addon-knobs'],
    webpackFinal: async(config) => {
        config.module.rules = webpackConfig.module.rules;

        return config;
    }
};
