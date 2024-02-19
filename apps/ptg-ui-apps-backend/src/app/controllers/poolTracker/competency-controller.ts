import Competencies from '../../models/pool-tracker/compatncyMasterScema';

export const addCompetency = async (request, response) => {
  const competency = request.body;
  console.log(competency);
  const newCompetency = new Competencies(competency);
  try {
    await newCompetency.save();
    response.status(201).json(newCompetency);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getCompetency = async (request, response) => {
  try {
    const competencies = await Competencies.find({});
    response.status(200).json(competencies);
    
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getSingleCompetency = async (request, response) => {
    try {
      const competency = await Competencies.findById(request.params.id );
      response.status(200).json(competency);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };

  export const editCompetency = async ( request, response)=> {
    const competency = request.body;
    const editCompetency = new Competencies(competency);
    try {
        await Competencies.updateOne({_id: request.params.id}, editCompetency)
        response.status(201).json(editCompetency);
        
    } catch (error) {
    response.status(409).json({ message: error.message });
        
    }
}

export const deleteCompetency = async( request, response ) => {
    try {
        await Competencies.deleteOne({_id: request.params.id});
        response.status(200).json({message: "Competency deleted successfully"});
    } catch (error) {
        response.status(409).json({ message: error.message });
        
    }
}