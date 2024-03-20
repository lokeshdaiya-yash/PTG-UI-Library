import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const skillSchema = mongoose.Schema(
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
      required: true,
    },
    // name: {
    //   type: [String],
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

const skill = mongoose.model('skill', skillSchema);

export default skill;
