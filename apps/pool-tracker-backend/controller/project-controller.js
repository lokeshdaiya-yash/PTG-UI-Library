import Project from '../schema/project-schema.js';

// add a new record
export const addProject = async (request, response) => {
  const project = request.body;
  const newProject = new Project(project);
  try {
    await newProject.save();
    response.status(201).json({ message: 'Added successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// get all records
export const getProjects = async (request, response) => {
    try {
      const projects = await Project.find({}).sort({ updatedAt: -1});
    //   console.log('yogita', projects);
      response.status(200).json(projects);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };

  // update existing record
export const editProject = async (request, response) => {
    let project = request.body;
    console.log('updated record ', project)
    try {
      await Project.updateOne({ _id: request.params.id }, project);
      response.status(201).json({ message: 'Updated successfully!' });
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };

  // get a single record by employee's Id
export const getSingleProjectData = async (request, response) => {
    try {
      const project = await Project.findById(request.params.id);
      response.status(200).json(project);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
  
  // delete a single record
  export const deleteProject = async (request, response) => {
    try {
      await Project.deleteOne({ _id: request.params.id });
      response.status(200).json({ message: 'project deleted successfully' });
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
  