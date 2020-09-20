const express = require('express');
const http = require('http');
const io = require('socket.io');
const { paths } = require('../configuration');
const routes = require('./routes');
const events = require('./events');
const { port } = require('./config');

const app = express();
const httpServer = http.createServer(app);
const ioLayer = io(httpServer);

app.set('view engine', 'pug');
app.use(express.static(paths.dist, {
    index: false
}));

routes(app);
events(ioLayer);

httpServer.listen(port, () => console.log(`Avalon app listening on port ${port}!`));
