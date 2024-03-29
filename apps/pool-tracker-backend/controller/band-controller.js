import Bands from '../schema/band-schema.js';
 
export const addBand = async (request, response) => {
  try {
    const bands = await Bands.find({});
    if(bands.length > 0 ){
      let checking = false;
      for(let i=0; i<bands.length; i++){
        if(bands[i]['name'].toLowerCase()===request.body.name.toLowerCase()){
          checking=true;
          break;
        }
      }
      if(checking==false){
        const band = {};
        Object.keys(request.body).forEach(key=>{
          band[key] =request.body[key].toUpperCase();
        });
        console.log("band",band);
        const newBand = new Bands(band);
         await newBand.save();
        response.status(200).json({message: "Band added successfully"});
      }
      else{
         response.status(404).json({ message:"band (" + request.body.name+") is already exist"  });
    }}
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
 
 
 
export const getBand = async (request, response) => {
    try {
      const bands = await Bands.find({});
      response.status(200).json(bands);
     
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
  export const getSingleBand = async (request, response) => {
    try {
      const band = await Bands.findById(request.params.id );
      response.status(200).json(band);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
 
  export const editBand = async ( request, response)=> {
    let band = request.body;
    // const editBand = new Bands(band);
    try {
        await Bands.updateOne({_id: request.params.id}, band)
        response.status(201).json({message: "Band updated successfully"});
       
    } catch (error) {
    response.status(409).json({ message: error.message });
       
    }
}
 
export const deleteBand = async( request, response ) => {
    try {
        await Bands.deleteOne({_id: request.params.id});
        response.status(200).json({message: "Bands deleted successfully"});
    } catch (error) {
        response.status(409).json({ message: error.message });
       
    }
}
 
export const checkDuplicateBand = async (request, response) => {
  const requestedName = request.params.name;
  try {
    const record = await Bands.findOne({ name: {$regex: new RegExp('^' + requestedName + '$', 'i')} });
    if (record) {
      response
        .status(200)
        .json({ message: `${requestedName} is already exist` });
      response.end();
    } else {
      response.status(200).json({ message: '' });
      response.end();
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};