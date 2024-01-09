
import axios from "axios";

const URL = "http://localhost:5000";

export const addMasterdata = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling add Master data api", error);
  }
};

export const getMasterdata = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("error while calling all masterdata api", error);
  }
};

export const getData = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("error while calling get data api", error);
  }
};

export const editMasterdata = async (user, id)=>{
  try {
     return await axios.post(`${URL}/${id}`, user)
  } catch (error) {
      console.log("error while calling edit Masterdata api", error);
  }
}

export const deleteMasterdata = async (id) => {
  try {
      return await axios.delete(`${URL}/${id}`);
  } catch (error) {
      console.log("error while calling delete Masterdata api", error);
      
  }

}

// export const getUsers = async () => {
//   try {
//     return await axios.get(`${URL}/all`);
//   } catch (error) {
//     console.log("error while calling all user api", error);
//   }
// };

// export const getUser = async (id) => {
//   try {
//     return await axios.get(`${URL}/${id}`);
//   } catch (error) {
//     console.log("error while calling get user api", error);
//   }
// };

// export const editUser = async (user, id)=>{
//     try {
//        return await axios.post(`${URL}/${id}`, user)
//     } catch (error) {
//         console.log("error while calling get user api", error);
//     }
// }

// export const deleteUser = async (id) => {
//     try {
//         return await axios.delete(`${URL}/${id}`);
//     } catch (error) {
//         console.log("error while calling delete user api", error);
        
//     }

// }