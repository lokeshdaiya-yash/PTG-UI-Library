import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCompetency, checkDuplicateCompetency } from '../../service/competency-api';

const initialFormValue = {
  name: '',
  value: '',
  label: '',
};


const AddCompetency = (props:any) => {
    const { competency, btnName } = props;
    const [formValue, setFormValue] = useState(initialFormValue);

    const formErrorsObj: any = {};
    const [formErrors, setFormErrors] = useState(formErrorsObj);
  const [duplicateName, setDuplicateName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  
    useEffect(() => {
      if (btnName !== 'Add Competency') {
        setFormValue({
          name: competency.name,
          value: competency.value,
          label: competency.label,
        });
      }
    }, []);
  

    const checkDuplicate = async (e: any) => {
      if (e.target.value && !formErrors.name) {
        const response = await checkDuplicateCompetency(e.target.value);
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
      await addCompetency(formValue);
      // return parentCallback(false)
      // navigate('/viewband');
      }
    };
    // const onSubmit = async () => {
    //   console.log(formValue);
    //   await addCompetency(formValue);
    // };
  
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