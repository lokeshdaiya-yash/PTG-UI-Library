import mongoose from 'mongoose';

const masterDataSchema = mongoose.Schema(
  {
    name: {
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
    poolStartDate: String,
    comments: String,
    yearsofExp: String,
    designations: String,
    locations: String,
    // locations: [
    //   {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'location',
    //     },
    //     name: {
    //       type: String,
    //     },
    //   },
    // ],
    band: String,
    // band: [
    //   {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'tblBandMaster',
    //     },
    //     name: {
    //       type: String,
    //     },
    //   },
    // ],
    skills: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'tblSkillMaster',
        },
        name: {
          type: String,
        },
      },
    ],
    competency: String,
    // competency: [
    //   {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'tblCompatncyMaster',
    //     },
    //     name: {
    //       type: String,
    //     },
    //   },
    // ],
    isActive: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: 'createdAt' } }
);

const masterdata = mongoose.model('masterdata', masterDataSchema);
export default masterdata;
