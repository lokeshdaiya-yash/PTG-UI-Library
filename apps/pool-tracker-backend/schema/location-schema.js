import mongoose from 'mongoose';

const locationSchema = mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const location = mongoose.model('location', locationSchema);

export default location;
