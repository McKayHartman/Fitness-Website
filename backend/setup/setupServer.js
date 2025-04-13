import 'dotenv/config';
import cors from "cors";
import express from "express";
import bodyParser from 'body-parser';
import setupRouter from './setupRouter.js';

// use cors to allow access from frontend
export default () => {
    const app = express();

    // Middleware to parse JSON and URL-encoded request bodies
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Set up CORS for frontend access
    app.use(cors({
        origin: ['http://localhost:5173'], // Make sure this matches your frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true // Allow cookies and credentials if needed
    }));

    // Set up API routes using setupRouter
    setupRouter(app);

    return app;
};
