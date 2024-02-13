import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addSkill, addDesignation } from '../../service/api';

const defaultValue = {
  name: '',
  label: '',
  value: '',
};

const AddDesignation = () => {
  const [designation, setDesignation] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setDesignation({ ...designation, [e.target.name]: e.target.value });
    console.log(designation);
  };

  const addDesignationDetails = async () => {
    await addDesignation(designation);
    navigate('/designation');
  };

  return (
    <div className="ptg-table-addData form-container">
      {/* <div className="ptg-table-addData"> */}
        {/* <h3>Add Designation</h3> */}
        <label htmlFor="label"> label </label>
        <PtgUiInput
          type="text"
          name="label"
          id="inputUsername"
          value={designation.label}
          onChange={(e) => onValueChange(e)}
        />

<label htmlFor="value"> Value </label>
        <PtgUiInput
          type="text"
          name="value"
          id="inputUsername"
          value={designation.value}
          onChange={(e) => onValueChange(e)}
        />

<label htmlFor="name"> Name </label>
        <PtgUiInput
          type="text"
          name="name"
          id="inputUsername"
          value={designation.name}
          onChange={(e) => onValueChange(e)}
        />

        <PtgUiButton
          className="mt-2 btn-success btn-position"
          type="button"
          onClick={() => addDesignationDetails()}
          // accessKey="s"
          aria-label="next"
          data-testid="next"
        >
          Add Designation
        </PtgUiButton>
      {/* </div> */}
    </div>
  );
};

export default AddDesignation;
