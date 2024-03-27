import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { addBand } from '../../service/api';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};


const AddBand = (props:any) => {
    const { band, btnName } = props;
  const [formValue, setFormValue] = useState(initialFormValue);

  useEffect(() => {
    if (btnName !== 'Add Band') {
      setFormValue({
        name: band.name,
        value: band.value,
        label: band.label,
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
    await addBand(formValue);
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
        Add Band
      </PtgUiButton>
    </div>
  );
};


export default AddBand