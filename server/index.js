const express = require('express');
const routes = require('./routes');
const { port, paths } = require('./config');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(paths.dist, {
    index: false
}));

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
