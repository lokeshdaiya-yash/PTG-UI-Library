import mongoose from "mongoose";



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



const masterdata = mongoose.model('masterdata', masterDataSchema);
export default masterdata;