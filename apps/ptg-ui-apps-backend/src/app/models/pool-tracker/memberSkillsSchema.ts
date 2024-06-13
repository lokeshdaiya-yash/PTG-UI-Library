import mongoose,{ Schema, model } from 'mongoose';
import {conn1} from '../../../database/db';
const memberSkillsSchema =new mongoose.Schema({
  memberId:[{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblPoolMaster',
    },
    name: {
      type: String,
    },
}],
  skill_id:[{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblSkillMaster',
    },
    name: {
      type: String,
    },
}], 
  isPrimary: { type: Number, default: 0 },
});


const memberSkills = conn1.model('tblMemberSkills', memberSkillsSchema);
export default memberSkills;
