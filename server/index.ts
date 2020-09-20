import * as express from 'express';
import { createServer } from 'http';
import * as io from 'socket.io';
import * as configuration from '../configuration';
import { register as registerRoutes } from './routes';
import { register as registerEvents } from './events';
import { port } from './config';

const app = express();
const httpServer = createServer(app);
const ioLayer = io(httpServer);

app.set('view engine', 'pug');
app.use(express.static(configuration.paths.dist, {
    index: false
}));

registerRoutes(app);
registerEvents(ioLayer);

httpServer.listen(port, () => console.log(`Avalon app listening on port ${port}!`));
