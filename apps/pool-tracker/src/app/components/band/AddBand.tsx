import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBand, checkDuplicateBand } from '../../service/band-api';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};


const AddBand = (props:any) => {
    const { band, btnName } = props;
  const [formValue, setFormValue] = useState(initialFormValue);


    const formErrorsObj: any = {};
    const [formErrors, setFormErrors] = useState(formErrorsObj);
  const [duplicateName, setDuplicateName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (btnName !== 'Add Band') {
      setFormValue({
        name: band.name,
        value: band.value,
        label: band.label,
      });
    }
  }, []);

  const checkDuplicate = async (e: any) => {
    if (e.target.value && !formErrors.name) {
      const response = await checkDuplicateBand(e.target.value);
      if (response && response?.data?.message) {
        setDuplicateName(response?.data?.message);
      } else {
        setDuplicateName('');
      }
    }
  };

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
    setFormErrors(formValue);
    setIsSubmit(true);
    if (
      Object.keys(formErrors).length === 0 &&
      Object.values(formValue).every((value) => value !== '')
    ) {
    await addBand(formValue);
    // return parentCallback(false)
    // navigate('/viewband');
    }
  };

 
  return (
    <div className="ptg-table-addData form-container">
      <label htmlFor="label"> Name </label>
      <PtgUiInput
        type="text"
        name="name"
        id="name"
        value={formValue.name}
        onBlur={checkDuplicate}
        onChange={(e) => onValueChange(e)}
      />
            {duplicateName && <p className="error">{duplicateName}</p>}
            {/* <p className="error">{formErrors.name}</p> */}

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