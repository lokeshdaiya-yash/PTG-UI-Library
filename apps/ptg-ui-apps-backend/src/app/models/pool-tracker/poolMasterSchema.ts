import mongoose, { Schema, model } from 'mongoose';
import { conn1 } from '../../../database/db';

const poolMasterSchema = new mongoose.Schema(
  {
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
    isActive: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: 'createdAt' } }
);
const pool_master = conn1.model('tblPoolMaster', poolMasterSchema);

export default pool_master;
