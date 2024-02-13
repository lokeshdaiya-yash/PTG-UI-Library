import mongoose,{ Schema, model } from 'mongoose';

const clientProjectDetailsSchema = new mongoose.Schema({
  projectName: String,
  clientId:  [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblClientMaster',
    },
    name: {
      type: String,
    },
}],
  isActive: { type: Number, default: 0 },
});

const clientProjectDetails = mongoose.model(
  'tblClientProjectDetails',
  clientProjectDetailsSchema
);
export default clientProjectDetails;
