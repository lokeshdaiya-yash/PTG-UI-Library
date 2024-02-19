import mongoose from "mongoose";

const bandSchema = mongoose.Schema(
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

 const  band = mongoose.model('band', bandSchema);
 
export default band