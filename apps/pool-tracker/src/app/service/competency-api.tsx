import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl

// ================== Competency ========================

export const addCompetency = async (data) => {
    try {
      return await axios.post(`${URL}/competency/addcompetency`, data);
    } catch (error) {
      console.log("error while calling add competency api",error);  return; 
    }
  };
  
  export const getCompetency = async () => {
    try {
      return await axios.get(`${URL}/competency/allcompetency`);
    } catch (error) {
      console.log("error while calling all competency api",error);  return; 
    }
  };
  
  export const getSingleCompetency = async (id) => {
    try {
      return await axios.get(`${URL}/competency/${id}`);
    } catch (error) {
      console.log("error while calling get competency data api",error);  return; 
    }
  };
  
  export const editCompetency = async (competency, id)=>{
    try {
       return await axios.post(`${URL}/competency/${id}`, competency)
    } catch (error) {
        console.log("error while calling edit competency api",error);  return; 
    }
  }
  
  export const deleteCompetency = async (id) => {
    try {
        return await axios.delete(`${URL}/competency/${id}`);
    } catch (error) {
        console.log("error while calling delete competency api",error);  return;    
    }
  }