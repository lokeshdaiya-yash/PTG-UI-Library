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
  skills: [{ name: '' }],
  yearsofExp: '',
  comments: '',
  clientName: '',
  designations: '',
};

const AddMasterdata = (props: any) => {
  const { masterData, btnName } = props;
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
  }, [formErrors]);

  //  get user date by ID
  const getUser = async () => {
    const response = await getData(id);
    const userDetails = response?.data;
    console.log('userDetails >>>', userDetails);
    setFormValue({
      ...formValue,
      name: userDetails.name,
      emailId: userDetails.emailId,
      poolStartDate: setDateState(userDetails.poolStartDate, 'startDate'),

      band: userDetails.band,
      designations: userDetails.designations,
      competency: userDetails.competency,

      skills: userDetails.skills,
      ageing: userDetails.ageing,
      yearsofExp: userDetails.yearsofExp,
      comments: userDetails.comments,
    });
  };

  // values handlers
  const selectHandler = (e, field) => {
    setFormValue({ ...formValue, [field]: e[0].value });
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
      const transformedSkills = skillData.map((skill: any) => ({
        name: skill.name ? skill.name : '',
        value: skill.value ? skill.value : '',
        label: skill.name ? skill.name : '',
      }));
      setSkill(transformedSkills);
    } catch (error) {
      console.log('error', error);
    }
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

  // format date
  const formatDate = (str) => {
    const date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join('-');
  };

  const startDateProp = {
    selected: date.startDate,
    className: 'form-control w-100',
    onChange: (date: any) => {
      setDateState(date, 'startDate');
      setFormValue({ ...formValue, poolStartDate: formatDate(date) });
    },
    startDate: today,
  };

  // submit forms data
  const submitMasterDetails = async () => {
    setFormErrors(validateFormFields(formValue));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
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
              value={formValue.emailId}
              onChange={(e) => changeHandler(e)}
            />
            <p className="error">{formErrors.emailId}</p>
          </div>
        </div>

        {/* ================== Pool start date and Band========================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="poolStartDate"> Pool Start date </label>
            <PtgUiCalendar {...startDateProp} />
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
          <div className="masterdatafield-box">
            <label htmlFor="skills"> Skills </label>
            <PtgUiMultiSelectbox
              name="skills"
              list={skills}
              onSelect={(e) => selectHandler(e, 'skills')}
              showCheckbox={true}
              singleSelect={false}
              selectedValues={formValue.skills.map((skill) => {
                return { lable: skill.name };
              })}
            />
            <p className="error">{formErrors.skills}</p>
          </div>

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
