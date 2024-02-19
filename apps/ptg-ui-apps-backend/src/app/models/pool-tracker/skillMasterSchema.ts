import mongoose,{ Schema, model } from 'mongoose';
import {conn1} from '../../../database/db'
const skillMasterSchema = new mongoose.Schema({
  skill: String,
    isActive: {type: Number, default: 0},
});

const skillMaster = conn1.model('tblSkillMaster', skillMasterSchema);
export default skillMaster;

