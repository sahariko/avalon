const webpackConfig = require('../webpack.config');

module.exports = {
    stories: [
        '../../client/**/story.tsx'
    ],
    webpackFinal: async(config) => {
        config.module.rules = webpackConfig.module.rules;

        return config;
    }
};
