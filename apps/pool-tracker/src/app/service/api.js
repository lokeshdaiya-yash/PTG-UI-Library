
import axios from "axios";

const URL = "http://localhost:5000";

// masterData api=========================================

export const addMasterdata = async (data) => {
  try {
    return await axios.post(`${URL}/masterdata/add`, data);
  } catch (error) {
    console.log("error while calling add Master data api", error);
  }
};

export const getMasterdata = async () => {
  try {
    return await axios.get(`${URL}/masterdata/all`);
  } catch (error) {
    console.log("error while calling all masterdata api", error);
  }
};

export const getData = async (id) => {
  try {
    return await axios.get(`${URL}/masterdata/${id}`);
  } catch (error) {
    console.log("error while calling get data api", error);
  }
};

export const editMasterdata = async (user, id)=>{
  try {
     return await axios.post(`${URL}/masterdata/${id}`, user)
  } catch (error) {
      console.log("error while calling edit Masterdata api", error);
  }
}

export const deleteMasterdata = async (id) => {
  try {
      return await axios.delete(`${URL}/masterdata/${id}`);
  } catch (error) {
      console.log("error while calling delete Masterdata api", error);
      
  }

}

// ================skill api======================

export const addSkill = async (data) => {
  try {
    return await axios.post(`${URL}/skill/add`, data);
  } catch (error) {
    console.log("error while calling add Skill api", error);
  }
};

export const getSkills = async () => {
  try {
    return await axios.get(`${URL}/skill/all`);
  } catch (error) {
    console.log("error while calling all skill api", error);
  }
};  

export const getSingleSkill = async (id) => {
  try {
    return await axios.get(`${URL}/skill/${id}`);
  } catch (error) {
    console.log("error while calling get skill data api", error);
  }
};

export const editSkill = async (skill, id)=>{
  try {
     return await axios.post(`${URL}/skill/${id}`, skill)
  } catch (error) {
      console.log("error while calling edit Skill api", error);
  }
}

export const deleteSkill = async (id) => {
  try {
      return await axios.delete(`${URL}/skill/${id}`);
  } catch (error) {
      console.log("error while calling delete Skill api", error);
      
  }

}
// ================user api======================

export const loginUser = async (data) => {
  try {
    console.log(data);
    return await axios.post(`${URL}/user/login`, data);
    
  } catch (error) {
    console.log("error while calling login user api", error);
  }
};

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/user/add`, data);
  } catch (error) {
    console.log("error while calling add user api", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/user/all`);
  } catch (error) {
    console.log("error while calling all user api", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/user/${id}`);
  } catch (error) {
    console.log("error while calling get user api", error);
  }
};

export const editUser = async (user, id)=>{
    try {
       return await axios.post(`${URL}/user/${id}`, user)
    } catch (error) {
        console.log("error while calling get user api", error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/user/${id}`);
    } catch (error) {
        console.log("error while calling delete user api", error);
        
    }

}