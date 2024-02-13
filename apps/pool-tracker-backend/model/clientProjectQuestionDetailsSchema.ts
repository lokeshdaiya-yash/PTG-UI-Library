import mongoose,{ Schema, model } from 'mongoose';

const clientProjectQuestionDetailsSchema = new mongoose.Schema({
  question: String,
  questionAns: String,
  clientId: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblClientMaster',
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
  isActive: { type: Number, default: 0 },
});

const clientProjectQuestionDetails = mongoose.model(
  'tblClientProjectQuestionDetails',
  clientProjectQuestionDetailsSchema
);
export default clientProjectQuestionDetails;
