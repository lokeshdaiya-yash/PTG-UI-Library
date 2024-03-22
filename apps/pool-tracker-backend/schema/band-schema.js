import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose'
import uniqueValidator from 'mongoose'

const bandSchema = mongoose.Schema(
  // {
  //   value: {
  //     type: String,
  //     required: true,
  //   },
  //   label: {
  //     type: String,
  //     required: true,
  //   },
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  //   {
  //     timestamps: true,
  //   }

  {
    name: {
      type:String,
      unique:true,
      required:true
    },
    value: String,
    label: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tblPoolMaster',
    },
    isActive: { type: Number, default: 0 },
  }
);

const band = mongoose.model('band', bandSchema);

export default band;
