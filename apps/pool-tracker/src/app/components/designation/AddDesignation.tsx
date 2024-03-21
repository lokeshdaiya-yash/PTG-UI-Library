

import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { addDesignation } from '../../service/api';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};


const AddDesignation = (props:any) => {
    const { designation, btnName } = props;
  const [formValue, setFormValue] = useState(initialFormValue);

  useEffect(() => {
    if (btnName !== 'Add Designation') {
      setFormValue({
        name: designation.name,
        value: designation.value,
        label: designation.label,
      });
    }
  }, []);

  const onValueChange = (e) => {
    const value = e.target.value;
    setFormValue({
      ...formValue,
      name: value,
      value: value,
      label: value,
    });
  };

  const onSubmit = async () => {
    console.log(formValue);
    await addDesignation(formValue);
  };

  return (
    <div className="ptg-table-addData form-container">
      <label htmlFor="label"> Name </label>
      <PtgUiInput
        type="text"
        name="name"
        id="name"
        value={formValue.name}
        onChange={(e) => onValueChange(e)}
      />

      <PtgUiButton
        className="mt-2 btn-primay btn-position"
        type="button"
        disabled={!formValue.value}
        onClick={() => onSubmit()}
      >
        Add Designation
      </PtgUiButton>
    </div>
  );
};


export default AddDesignation