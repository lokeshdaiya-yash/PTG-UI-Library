import mongoose,{ Schema, model } from 'mongoose';
import {conn1} from '../../../database/db'
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

const clientProjectDetails = conn1.model(
  'tblClientProjectDetails',
  clientProjectDetailsSchema
);
export default clientProjectDetails;
