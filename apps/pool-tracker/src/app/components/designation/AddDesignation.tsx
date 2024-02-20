import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDesignation } from '../../service/api';

const AddDesignation = () => {
  const [designation, setDesignation] = useState('');
  const navigate = useNavigate();

  const onValueChange = (e) => {
    const { value } = e.target.value;
    setDesignation(value);
  };

  const addDesignationDetails = async () => {
    await addDesignation(designation);
    navigate('/designation');
  };

  return (
    <div className="ptg-table-addData form-container">
      <label htmlFor="label"> Name </label>
      <PtgUiInput
        type="text"
        name="name"
        id="name"
        value={designation}
        onChange={(e) => onValueChange(e)}
      />

      <PtgUiButton
        className="mt-2 btn-primay btn-position"
        type="button"
        onClick={() => addDesignationDetails()}
      >
        Add Designation
      </PtgUiButton>
    </div>
  );
};

export default AddDesignation;
