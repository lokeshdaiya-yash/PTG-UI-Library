import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl

// ================project api======================

export const addProject = async (data) => {
    try {
      return await axios.post(`${URL}/project/addproject`, data);
    } catch (error) {
      console.log("error while calling add project api",error);  return; 
    }
  };
  
  export const getProjects = async () => {
    try {
      return await axios.get(`${URL}/project/allproject`);
    } catch (error) {
      console.log("error while calling all projects api",error);  return; 
    }
  };
  
  export const getSingleProjectData = async (id) => {
    try {
      return await axios.get(`${URL}/project/${id}`);
    } catch (error) {
      console.log("error while calling get project data api",error);  return; 
    }
  };
  
  export const editProject = async (project, id)=>{
    try {
       return await axios.post(`${URL}/project/${id}`, project)
    } catch (error) {
        console.log("error while calling edit project api",error);  return; 
    }
  }
  
  export const deleteProject = async (id) => {
    try {
        return await axios.delete(`${URL}/project/${id}`);
    } catch (error) {
        console.log("error while calling delete project api",error);  return; 
        
    }
  
  }
