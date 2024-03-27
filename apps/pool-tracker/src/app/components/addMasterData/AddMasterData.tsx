import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  addMasterdata,
  editMasterdata,
  getSkills,
  getDesignations,
  getCompetency,
  getBands,
  getData,
  checkDuplicateEmail,
} from '../../service/api';

import {
  PtgUiButton,
  PtgUiCalendar,
  PtgUiInput,
  PtgUiMultiSelectbox,
  PtgUiTextArea,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';

import '../../app.module.scss';
import './AddMasterData.scss';

const initialFormValue = {
  name: '',
  emailId: '',
  poolStartDate: '',
  band: '',
  competency: '',
  ageing: '',
  status: '',
  skills: [{ name: '', value: '', label: '' }],
  yearsofExp: '',
  comments: '',
  clientName: '',
  designations: '',
};

const AddMasterdata = (props: any) => {
  const { masterData, btnName } = props;
  const [duplicateEmail, setDuplicateEmail] = useState('');
  const formErrorsObj: any = {};
  const [formValue, setFormValue] = useState(initialFormValue);
  // const [formValue, setFormValue] = useState(formInitialValues);
  const [skills, setSkill] = useState([]);
  const navigate = useNavigate();
  const [band, setBands] = useState([]);
  const [competency, setCompetency] = useState([]);
  const [designations, setDesignation] = useState([]);
  const [formErrors, setFormErrors] = useState(formErrorsObj);
  const [isSubmit, setIsSubmit] = useState(false);
  const { id } = useParams();
  const today = new Date();
  const [date, setStartDate] = useState({ startDate: null });

  useEffect(() => {
    getBandsList();
    getDesignationList();
    getCompetencyList();
    getSkillList();
    if (id) {
      getUser();
    } else {
      // setFormValue(initialFormValue);
    }
  }, []);

  const checkDuplicate = async (e: any) => {
    if (e.target.value && !formErrors.emailId) {
      const response = await checkDuplicateEmail(e.target.value);
      if (response && response?.data?.message) {
        setDuplicateEmail(response?.data?.message);
      } else {
        setDuplicateEmail('');
      }
    }
  };

  const transformData = (skills) => {
    return skills.map((skill: any) => ({
      name: skill.name ? skill.name : '',
      value: skill.name ? skill.name : '',
      label: skill.name ? skill.name : '',
    }));
  };

  //  get user date by ID and patch all the values to the form's fields
  const getUser = async () => {
    const response = await getData(id);
    const userDetails = response?.data;
    const transformedSkills = transformData(userDetails.skills);
    userDetails.poolStartDate = new Date(userDetails.poolStartDate);
    setFormValue({
      ...formValue,
      name: userDetails.name,
      emailId: userDetails.emailId,
      poolStartDate: setDateState(userDetails.poolStartDate, 'startDate'),

      band: userDetails.band,
      designations: userDetails.designations,
      competency: userDetails.competency,

      skills: transformedSkills,
      ageing: userDetails.ageing,
      yearsofExp: userDetails.yearsofExp,
      comments: userDetails.comments,
    });
  };

  // values handlers
  const selectHandler = (e: any, field) => {
    if (field === 'skills') {
      setFormValue({ ...formValue, skills: e });
      console.log(formValue);
    } else {
      setFormValue({ ...formValue, [field]: e[0].value });
    }
  };
  const removeHandler = (e: any) => {
    setFormValue({ ...formValue, skills: e });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // getting Band list
  const getBandsList = async () => {
    const response = await getBands();
    setBands(response?.data);
  };

  // getting Competency list
  const getCompetencyList = async () => {
    const response = await getCompetency();
    setCompetency(response?.data);
  };

  // getting Designation list
  const getDesignationList = async () => {
    const response = await getDesignations();
    setDesignation(response?.data);
  };

  // getting Skills list
  const getSkillList = async () => {
    try {
      const response = await getSkills();
      const skillData = response?.data;
      const transformedSkills = transformData(skillData);
      setSkill(transformedSkills);
    } catch (error) {
      console.log('error', error);
    }
  };

  // format date
  const formatDate = (str) => {
    const date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join('-');
  };

  // select date
  const setDateState: any = (selectedDate: any, field: string) => {
    setStartDate((preState: any) => {
      return {
        ...preState,
        [field]: new Date(selectedDate),
      };
    });
  };

  const startDateProp = {
    selected: date.startDate,
    className: 'form-control w-100',
    onChange: (date: any) => {
      console.log('date selection', date);
      setDateState(date, 'startDate');
      setFormValue({ ...formValue, poolStartDate: date });
 
    },
    startDate: today,
  };

  // submit forms data
  const submitMasterDetails = async () => {
    setFormErrors(validateFormFields(formValue));
    setIsSubmit(true);
    if (
      Object.keys(formErrors).length === 0
      // Object.keys(formErrors).length === 0 && Object.values(formValue).every((value) => value !== '')
    ) {
      if (!id) {
        await addMasterdata(formValue);
      } else {
        await editMasterdata(formValue, id);
      }
      navigate('/masterData');
    }
  };

  const cancel = () => {
    navigate(-1);
  };

  // validate form's fields
  const validateFormFields = (values): any => {
    const errors: any = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name) {
      errors.name = 'Name is required!';
    }
    if (!values.emailId) {
      errors.emailId = 'Email is required!';
    } else if (!emailRegex.test(values.emailId)) {
      errors.emailId = 'Invalid format!';
    }
    if (!values.poolStartDate) {
      errors.poolStartDate = 'Date is required!';
    }
    if (!values.band) {
      errors.band = 'Band is required!';
    }
    if (!values.competency) {
      errors.competency = 'Competency is required!';
    }
    if (!values.designations) {
      errors.designations = 'Designations is required!';
    }
    if (!values.skills) {
      errors.skills = 'Skills are required!';
    }
    if (!values.yearsofExp) {
      errors.yearsofExp = 'Years of exp. is required!';
    }
    return errors;
  };

  return (
    <div>
      <div className="ptg-table-addData masterdata-form-container">
        {id === undefined ? (
          <h4>Add Master Data</h4>
        ) : (
          <h4>Update Master Data</h4>
        )}
        {/* ================== Name and Email========================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="name"> Name </label>
            <PtgUiInput
              className={'form-control '}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={formValue.name}
              onChange={(e) => changeHandler(e)}
            />
            <p className="error">{formErrors.name}</p>
          </div>

          <div className="masterdatafield-box">
            <label htmlFor="emailId"> Email </label>
            <PtgUiInput
              className={'form-control'}
              type="text"
              name="emailId"
              id="emailId"
              placeholder="Enter Email"
              onBlur={checkDuplicate}
              value={formValue.emailId}
              disabled={id !== undefined ? true : false}
              onChange={(e) => changeHandler(e)}
            />
            {/* <p className="error">{formErrors.emailId}</p>
        { duplicateEmail && <p className="error">duplicateEmail</p>} */}
            {duplicateEmail && <p className="error">{duplicateEmail}</p>}
            <p className="error">{formErrors.emailId}</p>
          </div>
        </div>

        {/* ================== Pool start date and Band========================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="poolStartDate"> Pool Start date </label>
            {id !== undefined ? (
              <PtgUiCalendar {...startDateProp} disabled />
            ) : (
              <PtgUiCalendar {...startDateProp} />
            )}
            <p className="error">{formErrors.poolStartDate}</p>
          </div>

          <div className="masterdatafield-box">
            <label htmlFor="band"> Band </label>

            <PtgUiMultiSelectbox
              name="band"
              list={band}
              onSelect={(e) => selectHandler(e, 'band')}
              showCheckbox={false}
              singleSelect={true}
              selectedValues={[{ label: formValue.band }]}
            />
            <p className="error">{formErrors.band}</p>
          </div>
        </div>

        {/* ================== Competency and Designation======================= ===*/}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="competency"> Competancy </label>
            <PtgUiMultiSelectbox
              name="competency"
              list={competency}
              onSelect={(e) => selectHandler(e, 'competency')}
              showCheckbox={true}
              singleSelect={true}
              selectedValues={[{ label: formValue.competency }]}
            />
            <p className="error">{formErrors.competency}</p>
          </div>

          <div className="masterdatafield-box">
            <label htmlFor="designation"> Designation </label>
            <PtgUiMultiSelectbox
              name="designations"
              list={designations}
              onSelect={(e) => selectHandler(e, 'designations')}
              showCheckbox={true}
              singleSelect={true}
              selectedValues={[{ label: formValue.designations }]}
            />
            <p className="error">{formErrors.designations}</p>
          </div>
        </div>

        {/*  ===================== Skills and Exp ================================*/}
        <div className="masterdatafield">
          {id !== undefined ? (
            <div className="masterdatafield-box">
              <label htmlFor="skills"> Skills </label>
              <PtgUiMultiSelectbox
                name="skills"
                list={skills}
                onSelect={(e) => selectHandler(e, 'skills')}
                showCheckbox={true}
                singleSelect={false}
                onRemove={removeHandler}
                selectedValues={formValue.skills?.map((elem) => {
                  return {
                    name: elem.name,
                    value: elem.name,
                    label: elem.name,
                  };
                })}
              />
              <p className="error">{formErrors.skills}</p>
            </div>
          ) : (
            <div className="masterdatafield-box">
              <label htmlFor="skills"> Skills </label>
              <PtgUiMultiSelectbox
                name="skills"
                list={skills}
                onSelect={(e) => selectHandler(e, 'skills')}
                onRemove={removeHandler}
                showCheckbox={true}
                singleSelect={false}
              />
              <p className="error">{formErrors.skills}</p>
            </div>
          )}

          <div className="masterdatafield-box">
            <label htmlFor="yearsofExp"> Years of Experience </label>
            <PtgUiInput
              className={'w-100 form-control bg_0 '}
              type="text"
              name="yearsofExp"
              placeholder="Enter Experience"
              value={formValue.yearsofExp}
              onChange={(e) => changeHandler(e)}
            />
            <p className="error">{formErrors.yearsofExp}</p>
          </div>
        </div>

        {/* ==================== Comments ============================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="comments"> Comments </label>
            <PtgUiTextArea
              rows="2"
              name="comments"
              id="comments"
              value={formValue.comments}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        <div className="mt-20 action-button-container">
          <PtgUiButton
            className="btn btn-secondary"
            type="button"
            onClick={() => cancel()}
            aria-label="cancel"
            data-testid="cancel"
          >
            Cancel
          </PtgUiButton>

          <PtgUiButton
            className="ml-20 btn btn-primay"
            type="button"
            onClick={() => submitMasterDetails()}
            aria-label="save"
            data-testid="save"
          >
            {id ? 'Update' : 'Save'}
          </PtgUiButton>
        </div>
      </div>
    </div>
  );
};

export default AddMasterdata;
