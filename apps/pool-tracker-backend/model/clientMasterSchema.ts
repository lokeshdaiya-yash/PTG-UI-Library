import mongoose,{ Schema, model } from 'mongoose';

const ClientMasterSchema = new mongoose.Schema({
  clientName: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblPoolMaster',
},
  isActive: { type: Number, default: 0 },
  
});

const client_master = mongoose.model('tblClientMaster', ClientMasterSchema);
export default client_master;
