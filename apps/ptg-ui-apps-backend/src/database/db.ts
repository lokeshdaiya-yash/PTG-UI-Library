import mongoose,{ Schema, model } from 'mongoose';
import { environment } from '../environments/environment'
// const ptURL=`mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${dbName}?retryWrites=true&w=majority`
// console.log(url)
const username = encodeURIComponent(environment.DB_USERNAME);
const password = encodeURIComponent(environment.DB_PASSWORD);
// const ptusername = encodeURIComponent(process.env.DB_USERNAME);
// const ptpassword = encodeURIComponent(process.env.DB_PASSWORD);
const dbName = 'test';
const ptdbName = 'poolTracker';
const URL=`mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${dbName}?retryWrites=true&w=majority`
const conn =mongoose.createConnection(URL,    { minPoolSize: 2, maxPoolSize: 10 });
const ptURL =`mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${ptdbName}?retryWrites=true&w=majority`;
const conn1 = mongoose.createConnection(ptURL,    { minPoolSize: 2, maxPoolSize: 10 });
export  {conn,conn1};