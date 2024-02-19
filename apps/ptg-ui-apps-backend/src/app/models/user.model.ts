import * as mongoose from 'mongoose';
import {conn} from '../../database/db'
export const User = conn.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    city: String,
    dob: String,
    password: String,
    isPasswordChange:{ type: Boolean, default: true },
  },{ timestamps: true })
);

