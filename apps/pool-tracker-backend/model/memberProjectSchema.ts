import mongoose,{ Schema, model } from 'mongoose';
const memberProjectSchema =new  mongoose.Schema({
  memberId: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblPoolMaster',
    },
    name: {
      type: String,
    },
}],
  projectId: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblClientProjectDetails',
    },
    name: {
      type: String,
    },
}],
  memberStatus: Number,
  startDate: String,
  endDate: String,
  interviewDate: String,
  interviewStatus: Number,
  interviewMemberfb: String,
  interviewClientFb: String,
},{ timestamps: { createdAt: 'createdAt' }});

const memberProject = mongoose.model(
  'tblMemberProject',
  memberProjectSchema
);
export default memberProject;
