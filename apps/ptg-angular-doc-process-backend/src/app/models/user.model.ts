import * as mongoose from 'mongoose';

export const User = mongoose.model(
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

