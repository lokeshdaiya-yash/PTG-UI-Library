import axios from "axios";
import { environment } from "../../environments/environment";
const URL = environment.baseUrl

// ================skill api======================

export const addSkill = async (data) => {
    try {
      return await axios.post(`${URL}/skill/addskill`, data);
    } catch (error) {
      console.log("error while calling add Skill api",error);  return; 
    }
  };
  
  // export const getSkills = async () => {
  //   try {
  //     const response = await axios.get(`${URL}/skills`);
  //     const skills = response.data;
  //     const transformedSkills = skills.map(skill =>({
  //       value: skill.name,
  //         label: skill.name,
  //         name: skill.name,
  //     }));
  //     return transformedSkills;
  //   } catch (error) {
  //     console.log("error while calling all skill api",error);  return; 
  //   }
  // };  
  export const getSkills = async () => {
    try {
      return await axios.get(`${URL}/skill/allskill`);
    } catch (error) {
      console.log("error while calling all skills api",error);  return; 
    }
  };
  
  export const getSingleSkill = async (id) => {
    try {
      return await axios.get(`${URL}/skill/${id}`);
    } catch (error) {
      console.log("error while calling get skill data api",error);  return; 
    }
  };
  
  export const editSkill = async (skill, id)=>{
    try {
       return await axios.post(`${URL}/skill/${id}`, skill)
    } catch (error) {
        console.log("error while calling edit Skill api",error);  return; 
    }
  }
  
  export const deleteSkill = async (id) => {
    try {
        return await axios.delete(`${URL}/skill/${id}`);
    } catch (error) {
        console.log("error while calling delete Skill api",error);  return; 
        
    }
  
  }