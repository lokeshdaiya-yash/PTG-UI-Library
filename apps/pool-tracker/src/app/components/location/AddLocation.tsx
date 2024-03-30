import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { addLocation } from '../../service/api';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};

const AddLocation = (props: any) => {
  const { location, btnName } = props;
  const [formValue, setFormValue] = useState(initialFormValue);

  useEffect(() => {
    if (btnName !== 'Add Location') {
      setFormValue({
        name: location?.name,
        value: location?.value,
        label: location?.label,
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
    await addLocation(formValue);
  };

  return (
    <div className="ptg-table-addData form-container">
      <label htmlFor="label"> Location Name </label>
      <PtgUiInput
        type="text"
        name="name"
        id="name"
        value={formValue.name}
        onChange={(e) => onValueChange(e)}
      />

      {/* <PtgUiButton
        className="mt-2 btn-primay btn-position"
        type="button"
        disabled={!formValue.value}
        onClick={() => onSubmit()}
      >
        Add Location
      </PtgUiButton> */}
    </div>
  );
};

export default AddLocation;
