import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
// import bodyParser, { json, urlencoded } from "body-parser";
import bodyParser from "body-parser";

import Routes from "./routes/route.js";

import Connection from "./database/db.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({extended:true }));
app.use(bodyParser.urlencoded({extended:true }));

app.use(cors());
app.use('/', Routes);

const PORT = 5000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password );

app.listen(PORT, ()=>console.log(`server is running successfully on port ${PORT}`))

