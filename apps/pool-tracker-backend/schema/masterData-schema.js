import mongoose from "mongoose";



const masterDataSchema = mongoose.Schema({
    
//   name: String,
//   clientInterviews: String,
//   competency: String,
//   poolStartDate: String,
//   ageing: String,
//   status: String,
//   skills: [String],
//   yearsofExp: String,
//   bands: String,
//   comments: String,
//   clientName: String,
//   designations: String,
// })


  name: {
    type: String,
    trim: true,
    required: false,
  },
  employeeId: {
    type: String,
    trim: true,
    required: false,
  },
  emailId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  poolStartDate:Date,
  comments: String,
  designations:String,
  // designations: [
  //   {
  //     id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'tblDesignationMaster',
  //     },
  //     name: {
  //       type: String,
  //     },
  //   },
  // ],
  band:String,
  // band: [
  //   {
  //     id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'tblBandMaster',
  //     },
  //     name: {
  //       type: String,
  //     },
  //   },
  // ],
  skills: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tblSkillMaster',
      },
      name: {
        type: String,
      },
    },
  ],
  competency:String,
  // competency: [
  //   {
  //     id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'tblCompatncyMaster',
  //     },
  //     name: {
  //       type: String,
  //     },
  //   },
  // ],
  clientName: String,
  yearsofExp: String,
  ageing: String,
  status: String,
  isActive: { type: Number, default: 0 },
},
{ timestamps: { createdAt: 'createdAt' } }
);


const masterdata = mongoose.model('masterdata', masterDataSchema);
export default masterdata;