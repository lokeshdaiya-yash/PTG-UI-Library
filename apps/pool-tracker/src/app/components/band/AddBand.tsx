import React, { useEffect, useState } from 'react';
import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import { addBand, editBand } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};
 
const AddBand = ({ band, btnName, parentCallback }) => {
  const [formValue, setFormValue] = useState(band || initialFormValue); 
 
  useEffect(() => {
    setFormValue(band || initialFormValue); 
  }, [band]);
 
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
 
  const onSubmit = async () => {
    if (btnName === 'Add Band') {
      await addBand(formValue);
    } else {
      await editBand(formValue._id, formValue); 
    }
    parentCallback(false);
  };
 
  return (
    <div className="ptg-table-addData form-container">
      <label htmlFor="name">Name</label>
      <PtgUiInput
        type="text"
        name="name"
        id="name"
value={formValue.name}
        onChange={(e) => onValueChange(e)}
      />
      <label htmlFor="value">Value</label>
      <PtgUiInput
        type="text"
        name="value"
        id="value"
        value={formValue.value}
        onChange={(e) => onValueChange(e)}
      />
      <label htmlFor="label">Label</label>
      <PtgUiInput
        type="text"
        name="label"
        id="label"
        value={formValue.label}
        onChange={(e) => onValueChange(e)}
      />
      <PtgUiButton
        className="mt-2 btn-primay btn-position"
        type="button"
disabled={!formValue.name || !formValue.value}
        onClick={() => onSubmit()}
      >
        {btnName}
      </PtgUiButton>
    </div>
  );
};
export default AddBand