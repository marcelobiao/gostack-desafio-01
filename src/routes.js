import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';

const routes = new Router();


routes.post('/projects', ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);

routes.post('/projects/:id/tasks', ProjectController.storeTask);



routes.get('/', (req, res) => {
    res.json({success: 'Hello World!'});
});

export default routes;
