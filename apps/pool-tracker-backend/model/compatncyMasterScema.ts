import mongoose,{ Schema, model } from 'mongoose';

const compatncyMasterSchema = new mongoose.Schema({
  compatncy_name: String,
  isActive: { type: Number, default: 0 },
});

const compatncyMaster= mongoose.model(
  'tblCompatncyMaster',
  compatncyMasterSchema
);
export default compatncyMaster
