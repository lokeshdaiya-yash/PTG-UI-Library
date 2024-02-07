import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleSkill, editSkill } from '../service/api';

const defaultValue = {
  name: '',
};

const EditSkill = () => {
  const [skill, setSkill] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setSkill({ ...skill, [e.target.name]: e.target.value });
    console.log(skill);
  };

  useEffect(() => {
    loadSkillDetails();
  }, []);

  const loadSkillDetails = async () => {
    const response = await getSingleSkill(id);
    setSkill(response.data);
  };

  const editSkillDetails = async () => {
    await editSkill(id);
    navigate('/skills');
  };

  return (
    <div>
      <div>EditSkill</div>
      <div className="addMasterData">
        <h3>Edit Skill Data</h3>
        <div className="inputBox">
          <input
            placeholder="Enter Skill Name"
            onChange={(e) => onValueChange(e)}
            name="name"
            
            value={skill.name}
          ></input>
        </div>
        <div>
          <button onClick={() => editSkillDetails()}> Edit Skill Data</button>
        </div>
      </div>
    </div>
  );
};

export default EditSkill;
