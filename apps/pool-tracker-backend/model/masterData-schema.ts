import mongoose from "mongoose";



const client_master_schema = new mongoose.Schema({
    
  
})

const client_master = mongoose.model('tbl_client_master', client_master_schema);
export default client_master;


// import mongoose from "mongoose";



// const masterDataSchema = mongoose.Schema({
    
//   name: String,
//   clientInterviews: String,
//   poolStartDate: String,
//   poolEndDate: String,
//   ageing: String,
//   status: String,
//   skills: String,
//   yearsofExp: String,
//   bands: String,
//   comments: String,
//   clientName: String,
// })



// const masterdata = mongoose.model('masterdata', masterDataSchema);
// export default masterdata;