import mongoose,{ Schema, model } from 'mongoose';

const bandMasterSchema = new mongoose.Schema({
  bandName: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblPoolMaster',
},
  isActive: { type: Number, default: 0 },
});


const bandMaster = mongoose.model('tblBandMaster', bandMasterSchema);
export default bandMaster;
