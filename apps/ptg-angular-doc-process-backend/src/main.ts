/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import userRoutes from './app/routers/user.routes';
import router from './app/routers/auth.routes';
import * as  path from 'path'
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization')
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE, PATCH')
  next()
}) //


// using authentication routes
app.use('/',router)
app.use('/',userRoutes)
// app.use('/files',express.static('assets'))
app.use(express.static(path.join(__dirname, 'assets'))); 


// app.use(express.static(path.resolve('../../uploads')));
// app.use('files', express.static(path.join(__dirname, './apps/uploads')))
// app.use(express.static(path.resolve('./assets')));


app.get('/', (req, res) => {
 
  // app.use('/files',express.static('./assets'))
  
  res.send({ message: 'Welcome to docProcess-backend!'});
});

const port = process.env.port || 3000;
const username = encodeURIComponent("priyanshu");
const password = encodeURIComponent("priyanshu921");
const dbName = "test"
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${dbName}?retryWrites=true&w=majority`
    // `mongodb+srv://${username}:${password}@atlascluster.27xfa.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  .then((data) => {
    const server = app.listen(port, () => {
      console.log(`Listening at Port - ${port}`);
      console.log("Successfully connect to MongoDB.");    
    });
    server.on('error', console.error);
  })
  .catch((err) => console.log(err));

