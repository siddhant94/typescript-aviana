//import * as express from "express";
// Import only what we need from express
//import { Router, Request, Response } from './node_modules/express';
import express from 'express';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);``
});