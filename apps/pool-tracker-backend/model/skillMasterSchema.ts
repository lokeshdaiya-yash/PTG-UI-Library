import mongoose,{ Schema, model } from 'mongoose';
const skillMasterSchema = new mongoose.Schema({
  skill: String,
    isActive: {type: Number, default: 0},
});

const skillMaster = mongoose.model('tblSkillMaster', skillMasterSchema);
export default skillMaster;

