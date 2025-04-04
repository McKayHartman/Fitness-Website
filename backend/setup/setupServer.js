import 'dotenv/config';
import cors from "cors";
import express from "express";
import bodyParser from 'body-parser';
import setupRouter from './setupRouter.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// use cors to allow access from frontend
export default () => {
    const app = express();

    // use bodyParser for capability to parse the bodies of REST requests
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // use cors to allow access from frontend
    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:5173']
    }));

    // use static site
    app.use('', express.static(path.join(__dirname, '../dist')));

    // set up the API routes
    setupRouter(app);

    return app;
}