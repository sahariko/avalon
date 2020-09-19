const { paths } = require('../../config');

const home = (req, res) => {
    res.render(paths.template, {
        public_path: ''
    });
};

module.exports = home;
