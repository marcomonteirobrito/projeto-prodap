import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'Diego',
    salarioFixo: 1000,
    vendaTotal: 200,
    comissao: 10
  });

  return response.json(user);
});

export default routes;