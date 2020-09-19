const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
    paths: {
        root,
        template: path.join(root, 'client', 'index.pug'),
        dist: path.join(root, 'dist')
    },
    port: 3000
};
