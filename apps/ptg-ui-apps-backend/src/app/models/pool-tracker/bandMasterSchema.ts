import mongoose,{ Schema, model } from 'mongoose';
import {conn1} from '../../../database/db'
const bandMasterSchema = new mongoose.Schema({
  bandName: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblPoolMaster',
},
  isActive: { type: Number, default: 0 },
});


const bandMaster = conn1.model('tblBandMaster', bandMasterSchema);
export default bandMaster;
