import 'dotenv/config';
import cors from "cors";
import express from "express";
import bodyParser from 'body-parser';


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

}