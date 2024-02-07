import Designations from '../schema/designation-schema.js';

export const addDesignation = async (request, response) => {
  const designation = request.body;
  console.log(designation);
  const newDesignation = new Designations(designation);
  try {
    await newDesignation.save();
    response.status(201).json(newDesignation);
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