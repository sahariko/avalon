const homePage = require('./handlers/home');

const addRoutes = (app) => {
    app.get('/', homePage);
};

module.exports = addRoutes;
