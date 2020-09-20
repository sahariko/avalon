const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
    isDev: process.env.NODE_ENV === 'development',
    paths: {
        root,
        client: path.join(root, 'client'),
        dist: path.join(root, 'dist'),
        template: path.join(root, 'client', 'index.pug')
    }
};
