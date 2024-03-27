/* eslint-disable @typescript-eslint/no-empty-function */
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import userRoutes from './app/routers/user.routes';
import router from './app/routers/auth.routes';
import ptroutes  from './app/routers/poolTracker.routes'
import * as path from 'path';
import * as url from 'url';
import {conn,conn1} from '../../ptg-ui-apps-backend/src/database/db'
const port = process.env.port || 8080;
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'POST, GET, OPTIONS, PUT, DELETE, PATCH'
  );
  next();
}); //


// main routes
app.get('/api', (req: any, res: any) => {
  res.json({ message: 'Welcome to interview-screening-backend!' });
});
app.use(express.static(path.join(__dirname, 'assets')));

const server = app.listen(port, async () => {
});

// using authentication routes
app.use('/', router);
app.use('/', userRoutes);
app.use('/', ptroutes);
app.use('/files', express.static('assets'));
app.use(express.static(path.join(__dirname, 'assets')));

// const username = encodeURIComponent(process.env.PTG_UI_USERNAME);
// const password = encodeURIComponent(process.env.PTG_UI_PASSWORD);
// const dbName = 'test';
// const URL=`mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${dbName}?retryWrites=true&w=majority`
// // const ptURL=`mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${dbName}?retryWrites=true&w=majority`
// // console.log(url)
// const ptURL =`mongodb+srv://${username}:${password}@crud-app.mmcrcog.mongodb.net/?retryWrites=true&w=majority`;
// const conn = mongoose.createConnection(URL);
// const conn2 = mongoose.createConnection(ptURL);

// mongoose
//   .connect(
//     URL
//     // `mongodb+srv://${username}:${password}@atlascluster.27xfa.mongodb.net/${dbName}?retryWrites=true&w=majority`
//   )
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => console.log(err));

// fallback when refreshed browser
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('*', (req: express.Request, res: express.Response) => {
  const pathname = url.parse(req.url).pathname;
  const pathArr = pathname.split('/');
  const apps = {
    'ptg-angular-app': 'ptg-angular-app',
    'ptg-react-app': 'ptg-react-app',
    'ptg-angular-doc-process': 'ptg-angular-doc-process',
    'ptg-angular-google-map': 'ptg-angular-google-map',
    'ptg-react-animations': 'ptg-react-animations',
    'ptg-ui-web-comp-angular': 'ptg-ui-web-comp-angular',
    'ptg-ui-web-comp-react': 'ptg-ui-web-comp-react',
    'pool-tracker':'pool-tracker'
  };
  const projectName = pathArr[1] && apps[pathArr[1]];
  if (projectName) {
    res.sendFile(path.join(__dirname, `public/${projectName}`) + '/index.html');
  } else {
    res.sendFile(path.join(__dirname, ``) + '/index.html');
  }
});
server.on('error', console.error);
