const { paths, isDev } = require('../../../configuration');
const session = require('../../session');

const home = (req, res) => {
    console.log('session.users:', session.users);
    res.render(paths.template, {
        public_path: isDev ? 'http://localhost:8080/dist' : '',
        initial_data: {
            connectedUsers: session.users
        }
    });
};

module.exports = home;
