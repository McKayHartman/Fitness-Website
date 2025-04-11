import express from 'express';
import { Router } from 'express';
import loginRoutes from './loginRoutes.js';
import dbRoutes from './dbRoutes.js';

const router = Router();

router.use('/auth', loginRoutes);
router.use('/db', dbRoutes);

export default function(app) {
    app.use('/api', router);
}