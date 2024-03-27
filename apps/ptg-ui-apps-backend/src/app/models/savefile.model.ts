import * as mongoose from 'mongoose';
import {conn} from '../../database/db'
export const SaveFile = conn.model(
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
    