const { Router } = require('express');

const DevController = require('./controlles/DevController');
const BuscaController= require('./controlles/BuscaController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/buscar', BuscaController.index);

module.exports = routes;