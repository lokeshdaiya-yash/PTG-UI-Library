import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl

// ================== Location ========================

export const addLocation = async (data) => {
    console.log('in service', data);
    try {
      return await axios.post(`${URL}/location/addlocation`, data);
    } catch (error) {
      console.log('error while calling add location api', error);
      return;
    }
  };
  
  export const getLocations = async () => {
    try {
      return await axios.get(`${URL}/location/alllocation`);
    } catch (error) {
      console.log('error while calling all location api', error);
      return;
    }
  };
  
  export const getSingleLocation = async (id) => {
    try {
      return await axios.get(`${URL}/location/${id}`);
    } catch (error) {
      console.log('error while calling get location data api', error);
      return;
    }
  };
  
  export const editLocation = async (designation, id) => {
    try {
      return await axios.post(`${URL}/location/${id}`, designation);
    } catch (error) {
      console.log('error while calling edit location api', error);
      return;
    }
  };
  
  export const deleteLocation = async (id) => {
    try {
      return await axios.delete(`${URL}/location/${id}`);
    } catch (error) {
      console.log('error while calling delete location api', error);
      return;
    }
  };

  export const checkDuplicateLocation = async (name) => {
    try {
        return await axios.get(`${URL}/duplicatelocation/${name}`);
    } catch (error) {
        console.log("error while checking duplicate location",error);  return; 
    }
  }