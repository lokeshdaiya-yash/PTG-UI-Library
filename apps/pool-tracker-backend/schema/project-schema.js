import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      trim: true,
      required: false,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    projectStartDate: String,
    projectEndDate: String,
    nameOfResorces: String,
    isActive: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: 'createdAt' } }

);

const project = mongoose.model('project', projectSchema);
export default project;
