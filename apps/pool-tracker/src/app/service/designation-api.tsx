import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl

// ================== Designation ========================

export const addDesignation = async (data) => {
    try {
      return await axios.post(`${URL}/designation/adddesignation`, data);
    } catch (error) {
      console.log("error while calling add designation api",error);  return; 
    }
  };
  
  export const getDesignations = async () => {
    try {
      return await axios.get(`${URL}/designation/alldesignation`);
    } catch (error) {
      console.log("error while calling all designations api",error);  return; 
    }
  };
  
  export const getSingleDesignation = async (id) => {
    try {
      return await axios.get(`${URL}/designation/${id}`);
    } catch (error) {
      console.log("error while calling get designation data api",error);  return; 
    }
  };
  
  export const editDesignation = async (designation, id)=>{
    try {
       return await axios.post(`${URL}/designation/${id}`, designation)
    } catch (error) {
        console.log("error while calling edit designation api",error);  return; 
    }
  }
  
  export const deleteDesignation = async (id) => {
    try {
        return await axios.delete(`${URL}/designation/${id}`);
    } catch (error) {
        console.log("error while calling delete designation api",error);  return; 
        
    }
  
  }