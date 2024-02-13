import mongoose from "mongoose";



const masterDataSchema = mongoose.Schema({
    
  name: String,
  clientInterviews: String,
  competency: String,
  poolEndDate: String,
  ageing: String,
  status: String,
  skills: [String],
  yearsofExp: String,
  bands: String,
  comments: String,
  clientName: String,
  designations: String,
})



const masterdata = mongoose.model('masterdata', masterDataSchema);
export default masterdata;