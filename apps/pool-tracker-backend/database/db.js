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