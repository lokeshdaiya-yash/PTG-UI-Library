import Competencies from '../schema/competency-schema.js';

export const addCompetency = async (request, response) => {
  try {
    const competency = await Competencies.find({});
    if (competency.length > 0) {
      let checking = false;
      for (let i = 0; i < competency.length; i++) {
        if (
          competency[i]['name'].toLowerCase() ===
          request.body.name.toLowerCase()
        ) {
          checking = true;
          break;
        }
      }
      if (checking == false) {
        const competencies = {};
        Object.keys(request.body).forEach((key) => {
          competencies[key] = request.body[key].toUpperCase();
        });
        console.log('competencies', competencies);
        const newcompetency = new Competencies(competencies);
        await newcompetency.save();
        response.status(200).json({ message: 'competency added successfully' });
      } else {
        response.status(404).json({
          message: 'competency (' + request.body.name + ') is already exist',
        });
      }
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getCompetency = async (request, response) => {
  try {
    const competencies = await Competencies.find({}).sort({createdAt: -1});
    response.status(200).json(competencies);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getSingleCompetency = async (request, response) => {
  try {
    const competency = await Competencies.findById(request.params.id);
    response.status(200).json(competency);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editCompetency = async (request, response) => {
  let competency = request.body;
  // const editCompetency = new Competencies(competency);
  try {
    await Competencies.updateOne({ _id: request.params.id }, competency);
    response.status(201).json({ message: 'competency updated successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteCompetency = async (request, response) => {
  try {
    await Competencies.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'Competency deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
