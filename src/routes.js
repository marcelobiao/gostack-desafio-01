import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';

import projectIdValidator from './app/middlewares/projectIdValidator';

const routes = new Router();


routes.post('/projects', ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.put('/projects/:id', projectIdValidator, ProjectController.update);
routes.delete('/projects/:id', projectIdValidator, ProjectController.delete);

routes.post('/projects/:id/tasks',projectIdValidator, ProjectController.storeTask);



routes.get('/', (req, res) => {
    res.json({success: 'Hello World!'});
});

export default routes;
