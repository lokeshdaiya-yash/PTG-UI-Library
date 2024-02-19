
import axios from "axios";

import { environment } from "../../environments/environment";
const URL = environment.baseUrl

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
    const response = await axios.get(`${URL}/skill/all`);
    const skills = response.data;
    const transformedSkills = skills.map(skill =>({
      value: skill._id,
        label: skill.name,
        name: skill.name,
    }));
    return transformedSkills;
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

// ================== Designation ========================

export const addDesignation = async (data) => {
  try {
    return await axios.post(`${URL}/designation/add`, data);
  } catch (error) {
    console.log("error while calling add designation api", error);
  }
};

export const getDesignation = async () => {
  try {
    return await axios.get(`${URL}/designation/all`);
  } catch (error) {
    console.log("error while calling all designations api", error);
  }
};

export const getSingleDesignation = async (id) => {
  try {
    return await axios.get(`${URL}/designation/${id}`);
  } catch (error) {
    console.log("error while calling get designation data api", error);
  }
};

export const editDesignation = async (designation, id)=>{
  try {
     return await axios.post(`${URL}/designation/${id}`, designation)
  } catch (error) {
      console.log("error while calling edit designation api", error);
  }
}

export const deleteDesignation = async (id) => {
  try {
      return await axios.delete(`${URL}/designation/${id}`);
  } catch (error) {
      console.log("error while calling delete designation api", error);
      
  }

}

// ================== Competency ========================

export const addCompetency = async (data) => {
  try {
    return await axios.post(`${URL}/competency/add`, data);
  } catch (error) {
    console.log("error while calling add competency api", error);
  }
};

export const getCompetency = async () => {
  try {
    return await axios.get(`${URL}/competency/all`);
  } catch (error) {
    console.log("error while calling all competency api", error);
  }
};

export const getSingleCompetency = async (id) => {
  try {
    return await axios.get(`${URL}/competency/${id}`);
  } catch (error) {
    console.log("error while calling get competency data api", error);
  }
};

export const editCompetency = async (competency, id)=>{
  try {
     return await axios.post(`${URL}/competency/${id}`, competency)
  } catch (error) {
      console.log("error while calling edit competency api", error);
  }
}

export const deleteCompetency = async (id) => {
  try {
      return await axios.delete(`${URL}/competency/${id}`);
  } catch (error) {
      console.log("error while calling delete competency api", error);   
  }
}
// ================== Band ========================

export const addBand = async (data) => {
  try {
    return await axios.post(`${URL}/band/add`, data);
  } catch (error) {
    console.log("error while calling add band api", error);
  }
};

export const getBand = async () => {
  try {
    return await axios.get(`${URL}/band/all`);
  } catch (error) {
    console.log("error while calling all band api", error);
  }
};

export const getSingleBand = async (id) => {
  try {
    return await axios.get(`${URL}/band/${id}`);
  } catch (error) {
    console.log("error while calling get band data api", error);
  }
};

export const editBand = async (band, id)=>{
  try {
     return await axios.post(`${URL}/band/${id}`, band)
  } catch (error) {
      console.log("error while calling edit band api", error);
  }
}

export const deleteBand = async (id) => {
  try {
      return await axios.delete(`${URL}/band/${id}`);
  } catch (error) {
      console.log("error while calling delete band api", error);   
  }
}