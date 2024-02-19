import mongoose,{ Schema, model } from 'mongoose';
import {conn1} from '../../../database/db'
const compatncyMasterSchema = new mongoose.Schema({
  compatncy_name: String,
  isActive: { type: Number, default: 0 },
});

const compatncyMaster= conn1.model(
  'tblCompatncyMaster',
  compatncyMasterSchema
);
export default compatncyMaster
