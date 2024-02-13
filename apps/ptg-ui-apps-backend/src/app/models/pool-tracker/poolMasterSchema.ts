import mongoose,{ Schema, model } from 'mongoose';

const poolMasterSchema = new mongoose.Schema({
  memberName: {
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
  designation: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblDesignationMaster',
    },
    name: {
      type: String,
    },
}],
  bandList:  [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'bandMasterSchema',
    },
    name: {
      type: String,
    },
}],
  compatancy: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblCompatncyMaster',
    },
    name: {
      type: String,
    },
}],
  isActive: { type: Number, default: 0 },
},{ timestamps: { createdAt: 'createdAt' }});

const pool_master = mongoose.model('tblPoolMaster', poolMasterSchema);
export default pool_master;
