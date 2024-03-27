import mongoose from 'mongoose';

const designationSchema = mongoose.Schema(
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
      type:String,
      unique:true,
      required:true
    },
  },
  {
    timestamps: true,
  }
);

const designation = mongoose.model('designation', designationSchema);

export default designation;
