import { Router } from 'express';

import SalaryController from './app/controllers/SalaryController';
import DistanceController from './app/controllers/DistanceController';

import SalaryMiddleware from './app/middlewares/SalaryMiddleware';

const routes = new Router();

routes.get('/salary', SalaryController.index);
routes.post('/salary', SalaryMiddleware, SalaryController.store);
routes.delete('/salary/:deleteSalaryId', SalaryController.delete);
routes.get('/distance', DistanceController.index);
routes.post('/distance', DistanceController.store);

export default routes;