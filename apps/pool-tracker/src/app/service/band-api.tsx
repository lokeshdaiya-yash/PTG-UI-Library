import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl
// ================== Band ========================

export const addBand = async (data) => {
    try {
      return await axios.post(`${URL}/band/addband`, data);
    } catch (error) {
      console.log("error while calling add band api",error);  return; 
    }
  };
  
  export const getBands = async () => {
    try {
      return await axios.get(`${URL}/band/allband`);
    } catch (error) {
      console.log("error while calling all band api",error);  return; 
    }
  };
  
  export const getSingleBand = async (id) => {
    try {
      return await axios.get(`${URL}/band/${id}`);
    } catch (error) {
      console.log("error while calling get band data api",error);  return; 
    }
  };
  
  export const editBand = async (band, id)=>{
    try {
       return await axios.post(`${URL}/band/${id}`, band)
    } catch (error) {
        console.log("error while calling edit band api",error);  return; 
    }
  }
  
  export const deleteBand = async (id) => {
    try {
        return await axios.delete(`${URL}/band/${id}`);
    } catch (error) {
        console.log("error while calling delete band api",error);  return;    
    }
  }
  
  export const checkDuplicateBand = async (name) => {
    try {
        return await axios.get(`${URL}/duplicateband/${name}`);
    } catch (error) {
        console.log("error while checking duplicate band",error);  return; 
    }
  }