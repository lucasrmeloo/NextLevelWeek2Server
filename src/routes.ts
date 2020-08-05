import express from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsControler';

const routes = express.Router();

const classesControlers = new ClassesControler();
const connectionsControlers = new ConnectionController();

routes.get('/classes', classesControlers.index);
routes.post('/classes', classesControlers.create);

routes.get('/connections', connectionsControlers.index);
routes.post('/connections', connectionsControlers.create);

export default routes;
