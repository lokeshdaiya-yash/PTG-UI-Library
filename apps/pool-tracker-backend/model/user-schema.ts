import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';


const userSchema =new  mongoose.Schema({
   
    username: String,
    email: String,
    password: String,


   
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

 const  user = mongoose.model('user',userSchema);
 
export default user

