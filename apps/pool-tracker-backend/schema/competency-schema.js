import mongoose from "mongoose";

const competencySchema = mongoose.Schema(
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
      },
      {
        timestamps: true,
      }
      
    );

 const  competency = mongoose.model('competency', competencySchema);
 
export default competency