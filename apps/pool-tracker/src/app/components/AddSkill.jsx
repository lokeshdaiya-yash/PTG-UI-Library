import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addSkill } from '../service/api';

const defaultValue = {
    name: '',
  };
const AddSkill = () => {
    const [skill, setSkill] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();
  
    const onValueChange = (e) => {
      console.log(e.target.value);
      setSkill({ ...skill, [e.target.name]: e.target.value });
      console.log(skill);
    };
  
    const addSkillDetails = async () => {
      await addSkill(skill);
      navigate('/skills');
    };

  return (
    <div>
        <div className="ptg-table-addData">

<h3>Add Skill</h3>

<label htmlFor="name"> Name </label>
<PtgUiInput
  
  type="text"
  name="name"
  id="inputUsername"
  value={skill.name}
  onChange={(e) => onValueChange(e)}
/>

<PtgUiButton
        className="w-100 mt-2"
        type="button"
        onClick={() => addSkillDetails()}
        // accessKey="s"
        aria-label="next"
        data-testid="next"
      >
        Add Master Data
      </PtgUiButton>
    </div>
    </div>
  )
}

export default AddSkill