// import { request } from "express";
// import Skill from "../schema/skill-schema.js";


// export const addSkill = async (request, response) => {
//     const skill = request.body;
//     console.log(skill);
//     const newSkill = new Skill(skill);
//     try {
//       await newSkill.save();
//       response.status(201).json(newSkill);
//     } catch (error) {
//       response.status(409).json({ message: error.message });
//     }
//   };
  

//   export const getSkills = async (request, response) => {
//     try {
//       const skills = await Skill.find({});
//       response.status(200).json(skills);
//     } catch (error) {
//       response.status(404).json({ message: error.message });
//     }
//   };

//   export const getSingleSkill = async (request, response) => {
//     try {
//       const skill = await Skill.findById(request.params.id );
//       response.status(200).json(skill);
//     } catch (error) {
//       response.status(404).json({ message: error.message });
//     }
//   };

//   export const editSkill = async ( request, response)=> {
//     let skill = request.body;
//     const editSkill = new Skill(skill);
//     try {
//         await Skill.updateOne({_id: request.params.id}, editSkill)
//         response.status(201).json(editSkill);
        
//     } catch (error) {
//     response.status(409).json({ message: error.message });
        
//     }
// }
// export const deleteSkill = async( request, response ) => {
//     try {
//         await Skill.deleteOne({_id: request.params.id});
//         response.status(200).json({message: "Skill deleted successfully"});
//     } catch (error) {
//         response.status(409).json({ message: error.message });
        
//     }
// }
