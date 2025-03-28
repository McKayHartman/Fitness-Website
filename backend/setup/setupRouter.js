import express from 'express';
import { Router } from 'express';
import loginRoutes from './loginRoutes.js';
import siteRoutes from './siteRoutes.js'

const apiRouter = Router();

apiRouter.use('/auth', loginRoutes);

export default function(app) {
    app.use('/api', apiRouter);
    app.use('/', siteRoutes);
}