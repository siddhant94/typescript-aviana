"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from "express";
// Import only what we need from express
//import { Router, Request, Response } from './node_modules/express';
var express_1 = __importDefault(require("express"));
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
var port = Number(process.env.PORT) || 3000;
app.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
    "";
});
