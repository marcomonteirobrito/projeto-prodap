import { Router } from 'express';

import SalaryController from './app/controllers/SalaryController';
import DistanceController from './app/controllers/DistanceController';

const routes = new Router();

routes.get('/salary', SalaryController.index);
routes.post('/salary', SalaryController.store);
routes.get('/distance', DistanceController.index);
routes.post('/distance', DistanceController.store);

export default routes;