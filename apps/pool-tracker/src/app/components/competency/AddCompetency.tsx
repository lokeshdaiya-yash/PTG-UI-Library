import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { addCompetency } from '../../service/api';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};


const AddCompetency = (props:any) => {
    const { competency, btnName } = props;
    const [formValue, setFormValue] = useState(initialFormValue);
  
    useEffect(() => {
      if (btnName !== 'Add Competency') {
        setFormValue({
          name: competency.name,
          value: competency.value,
          label: competency.label,
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
      await addCompetency(formValue);
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
          Add Competency
        </PtgUiButton>
      </div>
    );
  };
  

export default AddCompetency