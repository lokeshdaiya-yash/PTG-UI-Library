# PtgUiLibrary

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ptg-ui-library/mylib`.

## Development server

#### Install the nx and node_modules by following commands:

```shell
* npm install -g nx
* npm install
```

Run `npm start` or `npm run start:ptg-angular` for a dev server. Navigate to http://localhost:4201/.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.



<!-- ========================================== Node Documentation ========================================================= -->

<!-- Imports -->
npm init
npm i express
npm i mongoose
npm i nodemon
npm i dotenv
npm i cors
npm i body-parser
npm i --legacy-peer-deps mongoose-auto-increment

<!-- ====================== backend setup ======================  -->
go to your application -> create backend folder(pool-tracker-backend) outside to frontend folder(pool-tracker) ->
go to terminal type cd pool-tracker-backend ->install below packages -> 

<!-- install packages -->
npm init
npm i express
npm i mongoose
npm i nodemon
npm i dotenv
npm i cors
npm i body-parser

it will create package.json file -> go to package.json -> write "type":"module" and "start": "nodemon index.js"
refer below sample code

<!-- package.json -->
{
  "name": "pool-tracker-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}

crate index.js file and .env file in backend folder(pool-tracker-backend)
create database folder ->in database folder create db.js file
write below sample code


<!-- .env -->
DB_USERNAME=yogitawasnik
DB_PASSWORD=codeforinterview

<!-- db.js -->
import mongoose from 'mongoose';
const Connection = async(username, password )=>{
    const URL =`mongodb+srv://${username}:${password}@crud-app.mmcrcog.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log("database connected successfully");
    } catch (error) {
        console.log('error while connecting with database', error);
    }
}
export default Connection;

<!-- index.js -->
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

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


<!-- ====================== backend setup end ======================  -->

<!-- ===========================server setup ====================== -->

Go To Bellow Link
https://cloud.mongodb.com/

<!-- database setup -->
Follow Below Steps
login -> database -> create database -> choose shared -> select Mumbai server -> in cluster name type name of cluster ->
create additional information like username and password and remember this credentials which you have to provide in .env file-> 
click on create user ->
it will ask you from where you want to access this database, click on my local environment -> add current IP address ->
finish and close

<!--connection setup -->
Follow Below Steps
Once database setup finish click on connect -> click on connect your application -> select nodejs version -> copy below url ->
like   mongodb+srv://${username}:${password}@crud-app.mmcrcog.mongodb.net/?retryWrites=true&w=majority
you can paste it in url of db.js file

<!-- =========================== Server setup end ====================== -->

<!-- =========================== create controller, schema and router ====================== -->
In backend folder(pool-tracker-backend)
create controller folder -> create skill-controller.js file
create schema folder -> create skill-schema.js file
create routes folder -> create route.js file

Refer below sample code

<!-- code for route.js file -->
import express from "express";
import { addSkill, getSkills, getSingleSkill, editSkill, deleteSkill } from "../controller/skill-controller.js";

const router = express.Router();
router.post("/skill/add", addSkill);
router.get("/skills", getSkills);
router.get("/skill/:id", getSingleSkill);
router.post("/skill/:id", editSkill);
router.delete("/skill/:id", deleteSkill);

export default router;

<!-- code for skill-schema.js file -->
import mongoose from "mongoose";
const skillSchema = mongoose.Schema(
    {
        name: {
          type: [String],
          required: true,
        },
      },
      {
        timestamps: true,
      }
    );
 const  skill = mongoose.model('skill',skillSchema);
export default skill

<!-- code for skill-controller.js file -->

import { request } from 'express';
import Skill from '../schema/skill-schema.js';
 <!-- sample code for add records -->
export const addSkill = async (request, response) => {
  const skill = request.body;
  console.log(skill);
  const newSkill = new Skill(skill);
  try {
    await newSkill.save();
    response.status(201).json(newSkill);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
<!-- sample code for get all record -->
export const getSkills = async (request, response) => {
  try {
    const skills = await Skill.find({});
    response.status(200).json(skills);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
<!-- sample code for get single record -->
export const getSingleSkill = async (request, response) => {
  try {
    const skill = await Skill.findById(request.params.id);
    response.status(200).json(skill);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
<!-- sample code for edit record -->
export const editSkill = async (request, response) => {
  let skill = request.body;
  const editSkill = new Skill(skill);
  try {
    await Skill.updateOne({ _id: request.params.id }, editSkill);
    response.status(201).json(editSkill);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
<!-- sample code for delete api -->
export const deleteSkill = async (request, response) => {
  try {
    await Skill.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
