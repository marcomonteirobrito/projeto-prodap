import { Router } from 'express';

import UserController from './app/controllers/UserController';
import DistanceController from './app/controllers/DistanceController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/distance', DistanceController.index);
routes.post('/distance', DistanceController.store);

export default routes;