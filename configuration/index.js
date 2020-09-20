const path = require('path');

const paths = new function() {
    this.root = path.resolve(__dirname, '..');

    [
        'client',
        'dist'
    ].forEach((dir) => {
        this[dir] = path.join(this.root, dir);
    });

    this.template = path.join(this.client, 'index.pug');
};

module.exports = {
    isDev: process.env.NODE_ENV === 'development',
    paths
};
