import React, { useEffect, useState } from 'react';
import {
  addMasterdata,
  getSkills,
  getDesignation,
  getCompetency,
  getBand,
} from '../../service/api';
import '../../app.module.scss';
import './AddMasterData.scss';
import { useNavigate } from 'react-router-dom';
import {
  PtgUiButton,
  PtgUiCalendar,
  PtgUiInput,
  PtgUiMultiSelectbox,
  PtgUiTextArea,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';

const initialFormValue = {
  name: '',
  // memberName: '',
  emailId: '',
  poolStartDate: '',
  band: '',
  competency: '',
  ageing: '',
  status: '',
  skills: '',
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllBands();
    getAllDesignation();
    getAllCompetency();
    getAllSkills();
    // console.log(formErrors);
  }, [formErrors]);
  // ==================== band select================================================

  const getAllBands = async () => {
    const response = await getBand();
    setBands(response?.data);
  };

  const onBandSelect = (e) => {
    // console.log('Select Values, onValueChange', e[0]);
    setFormValue({ ...formValue, band: e[0].value });
  };
  // ==================== Competency select===========================================

  const getAllCompetency = async () => {
    const response = await getCompetency();
    setCompetency(response?.data);
  };

  const onCompetencySelect = (e) => {
    setFormValue({ ...formValue, competency: e[0].value });
  };

  // ==================== designations select===========================================

  const getAllDesignation = async () => {
    const response = await getDesignation();
    setDesignation(response?.data);
  };

  const onSelect = (e) => {
    setFormValue({ ...formValue, designations: e[0].value });
  };

  // ==================== skill multiselect===========================================

  const getAllSkills = async () => {
    try {
      const response = await getSkills();
      const skillData = response?.data;
      const transformedSkills = skillData.map((skill:any) => ({
        name: skill.name ? skill.name: '',
        value: skill.value ? skill.value : '',
        label: skill.name ? skill.name: '',
        // name: skill.label ? skill.label: '',
      }));
      setSkill(transformedSkills);
    } catch (error) {}
  };

  const onSelectSkills = (e) => {
    setFormValue({ ...formValue, skills: e });
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

   // ==================== select date ===========================================
  const today = new Date();
  const [date, setStartDate] = useState({
    startDate: null,
  });
  const setDateState: any = (selectedDate: any, field: string) => {
    setStartDate((preState: any) => {
      return {
        ...preState,
        [field]: new Date(selectedDate),
      };
    });
  };

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

  const submitMasterDetails = async () => {
    setFormErrors(validateFormFields(formValue));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      await addMasterdata(formValue);
      navigate('/masterData');
    }

  };
  const cancel = () => {
    navigate('/');
  };

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
        <h4>Add Master Data</h4>
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
              onChange={(e) => onValueChange(e)}
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
              onChange={(e) => onValueChange(e)}
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
              onSelect={onBandSelect}
              showCheckbox={false}
              singleSelect={true}
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
              onSelect={onCompetencySelect}
              showCheckbox={true}
              singleSelect={true}
            />
            <p className="error">{formErrors.competency}</p>
          </div>
          <div className="masterdatafield-box">
            <label htmlFor="designation"> Designation </label>
            <PtgUiMultiSelectbox
              name="designations"
              list={designations}
              onSelect={onSelect}
              showCheckbox={true}
              singleSelect={true}
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
              onSelect={onSelectSkills}
              showCheckbox={true}
              singleSelect={false}
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
              onChange={(e) => onValueChange(e)}
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
              onChange={(e) => onValueChange(e)}
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
            Save
          </PtgUiButton>
        </div>
      </div>
    </div>
  );
};

export default AddMasterdata;
