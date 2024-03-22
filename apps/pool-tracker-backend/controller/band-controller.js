import Bands from '../schema/band-schema.js';

export const addBand = async (request, response) => {
  // const band = request.body;
  // console.log(band);
  // const newBand = new Bands(band);
  try {
    const bands = await Bands.find({});
    if(bands.length>0 ){
      let chacking = false;
      for(let i=0; i<bands.length; i++){
        if(bands[i]['name'].toLowerCase()===request.body.name.toLowerCase()){
          chacking=true;
          break;
        }
      }
      if(chacking==false){
        debugger
        const bandName =new Bands(request.body);
        console.log("bandName",bandName, request.body.name)
        const bandData = await Bands.save();
        response.status(200).json(bandData);
      }
      else{
        response.status(209).json({ message: error.message, msg:"this name (" + request.body.name+") is already exist" });
      }
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
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
    const editBand = new Bands(band);
    try {
        await Bands.updateOne({_id: request.params.id}, editBand)
        response.status(201).json(editBand);
        
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
