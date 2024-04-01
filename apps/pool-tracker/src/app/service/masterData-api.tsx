
import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl
// const URL = "http://localhost:5000";

// masterData api=========================================

export const addMasterdata = async (data) => {
  try {
    return await axios.post(`${URL}/masterdata/addmasterdata`, data);
  } catch (error) {
    console.log("error while calling add Master data api",error);  return; 
  }
};

export const getMasterdata = async () => {
  try {
    return await axios.get(`${URL}/masterdata/allmasterdata`);
  } catch (error) {
    console.log("error while calling all masterdata api",error);  return; 
  }
};

export const getData = async (id) => {
  try {
    return await axios.get(`${URL}/masterdata/${id}`);
  } catch (error) {
    console.log("error while calling get data api",error);  return; 
  }
};

export const editMasterdata = async (user, id)=>{
  try {
     return await axios.post(`${URL}/masterdata/${id}`, user)
  } catch (error) {
      console.log("error while calling edit Masterdata api",error);  return; 
  }
}

export const deleteMasterdata = async (id) => {
  try {
      return await axios.delete(`${URL}/masterdata/${id}`);
  } catch (error) {
      console.log("error while calling delete Masterdata api",error);  return; 
  }
}

export const checkDuplicateEmail = async (emailId) => {
  try {
      return await axios.get(`${URL}/duplicateemail/${emailId}`);
  } catch (error) {
      console.log("error while checking duplicate email id",error);  return; 
  }
}
