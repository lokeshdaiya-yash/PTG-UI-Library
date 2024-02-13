import mongoose,{ Schema, model } from 'mongoose';

const designationMasterSchema = new mongoose.Schema({
  designation: String,
  isActive: { type: Number, default: 0 },
});

const designationMaster = mongoose.model(
  'tblDesignationMaster',
  designationMasterSchema
);
export default designationMaster;
