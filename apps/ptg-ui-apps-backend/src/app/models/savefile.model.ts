import * as mongoose from 'mongoose';
export const SaveFile = mongoose.model(
    "SaveFile",
    new mongoose.Schema({
      type: String,
      userId:String,
      fileName:String,
      size:String,
      originalname:String,
      isSigned:{ type: Boolean, default: false },
      fileType:String
    },{ timestamps: true })
  );
    