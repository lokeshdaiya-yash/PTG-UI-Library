import Skill from '../schema/skill-schema.js';

export const addSkill = async (request, response) => {
  const skill = request.body;
  console.log(skill);
  const newSkill = new Skill(skill);
  try {
    const skill = await Skill.find({});
    if (skill.length > 0) {
      let checking = false;
      for (let i = 0; i < skill.length; i++) {
        if (
          skill[i]['name'].toLowerCase() === request.body.name.toLowerCase()
        ) {
          checking = true;
          break;
        }
      }
      if (checking == false) {
        const skills = {};
        Object.keys(request.body).forEach((key) => {
          skills[key] = request.body[key];
        });
        console.log('skills', skills);
        const newSkill = new Skill(skills);
        await newSkill.save();
        response.status(200).json({ message: 'skill added successfully' });
      } else {
        response.status(404).json({
          message: 'skill (' + request.body.name + ') is already exist',
        });
      }
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getSkills = async (request, response) => {
  try {
    const skills = await Skill.find({}).sort({createdAt: -1});
    response.status(200).json(skills);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getSingleSkill = async (request, response) => {
  try {
    const skill = await Skill.findById(request.params.id);
    response.status(200).json(skill);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editSkill = async (request, response) => {
  let skill = request.body;
  // const editSkill = new Skill(skill);
  try {
    await Skill.updateOne({ _id: request.params.id }, skill);
    response.status(201).json(skill, { message: 'skill updated successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteSkill = async (request, response) => {
  try {
    await Skill.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const checkDuplicateSkill = async (request, response) => {
  const requestedName = request.params.name;
  try {
    const record = await Skill.findOne({ name: {$regex: new RegExp('^' + requestedName + '$', 'i')} });
    if (record) {
      response
        .status(200)
        .json({ message: `${requestedName} is already exist` });
      response.end();
    } else {
      response.status(200).json({ message: '' });
      response.end();
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
