import Designations from '../schema/designation-schema.js';

export const addDesignation = async (request, response) => {
  try {
    const designations = await Designations.find({});
    if(designations.length > 0 ){
      let checking = false;
      for(let i=0; i<designations.length; i++){
        if(designations[i]['name'].toLowerCase()===request.body.name.toLowerCase()){
          checking=true;
          break;
        }
      }
      if(checking==false){
        const designation = {};
        Object.keys(request.body).forEach(key=>{
          designation[key] =request.body[key].toUpperCase();
        });
        console.log("designation",designation);
        const newDesignation = new Designations(designation);
         await newDesignation.save();
        response.status(200).json({newDesignation, message: "Designation added successfully"});
      }
      else{
         response.status(404).json({ message:"Designation (" + request.body.name+") is already exist"  });
    }}
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getDesignation = async (request, response) => {
  try {
    const designations = await Designations.find({});
    response.status(200).json(designations);
    
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getSingleDesignation = async (request, response) => {
    try {
      const designation = await Designations.findById(request.params.id );
      response.status(200).json(designation);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };

  export const editDesignation = async ( request, response)=> {
    let designation = request.body;
    const editDesignation = new Designations(designation);
    try {
        await Designations.updateOne({_id: request.params.id}, editDesignation)
        response.status(201).json(editDesignation);
        
    } catch (error) {
    response.status(409).json({ message: error.message });
        
    }
}

export const deleteDesignation = async( request, response ) => {
    try {
        await Designations.deleteOne({_id: request.params.id});
        response.status(200).json({message: "Designation deleted successfully"});
    } catch (error) {
        response.status(409).json({ message: error.message });
        
    }
}