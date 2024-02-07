import Masterdata from "../schema/masterData-schema.js"

export const addMasterdata= async (request, response)=>{
    const masterdata =request.body

    const newMasterData = new Masterdata(masterdata)
    try {
        await newMasterData.save();
        response.status(201).json(newMasterData);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }

    console.log(masterdata);
}

export const getMasterdata = async (request, response) => {
    try {
      const masterdatas = await Masterdata.find({});
      response.status(200).json(masterdatas);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };

  export const getdata = async (request, response) => {
    try {
      const masterdata = await Masterdata.findById(request.params.id );
      response.status(200).json(masterdata);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };

  export const editMasterdata = async ( request, response)=> {
    let masterdata = request.body;
    const editUser = new Masterdata(masterdata);
    try {
        await Masterdata.updateOne({_id: request.params.id}, editUser)
        response.status(201).json(editUser);
        
    } catch (error) {
    response.status(409).json({ message: error.message });
        
    }
}

export const deleteMasterdata = async( request, response ) => {
    try {
        await Masterdata.deleteOne({_id: request.params.id});
        response.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        response.status(409).json({ message: error.message });
        
    }
}
