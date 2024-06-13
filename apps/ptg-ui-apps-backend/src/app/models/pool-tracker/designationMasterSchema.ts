import mongoose, { Schema, model } from 'mongoose';
import { conn1 } from '../../../database/db';
const designationMasterSchema = new mongoose.Schema({
  name: String,
  value: String,
  label: String,
  isActive: { type: Number, default: 0 },
});

const designationMaster = conn1.model(
  'tblDesignationMaster',
  designationMasterSchema
);
export default designationMaster;
