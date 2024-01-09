import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment"
// import autoIncrement from 'mongoose-auto-increment';


const masterDataSchema = mongoose.Schema({
    
  name: String,
  clientInterviews: String,
  poolStartDate: String,
  poolEndDate: String,
  ageing: String,
  status: String,
  skills: String,
  yearsofExp: String,
  bands: String,
  comments: String,
  clientName: String,
})

// autoIncrement.initialize(mongoose.connection);
// masterDataSchema.plugin(autoIncrement.plugin, 'masterdata');

const masterdata = mongoose.model('masterdata', masterDataSchema);
export default masterdata;