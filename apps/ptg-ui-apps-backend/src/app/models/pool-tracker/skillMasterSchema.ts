import { Value } from './../../../../../../libs/ptg-ui-angular-lib/textarea/textarea/textarea.stories';
import mongoose,{ Schema, model } from 'mongoose';
import {conn1} from '../../../database/db'
const skillMasterSchema = new mongoose.Schema({
  name: String,
  Value: String,
  label: String,
    isActive: {type: Number, default: 0},
});

const skillMaster = conn1.model('tblSkillMaster', skillMasterSchema);
export default skillMaster;

