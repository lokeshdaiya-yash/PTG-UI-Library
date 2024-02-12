import React, { useEffect, useState } from 'react';
import { addMasterdata, getSkills, getDesignation, getCompetency, getBand } from '../../service/api';
import '../../app.module.scss';
import './AddMasterData.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PtgUiButton,
  PtgUiCalendar,
  PtgUiDatePicker,
  PtgUiInput,
  PtgUiMultiSelectbox,
  PtgUiSelect,
  PtgUiTextArea,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';

const defaultValue = {
  name: '',
  email: '',
  poolStartDate: '',
  bands: '',
  competency: '',
  ageing: '',
  status: '',
  skills: '',
  yearsofExp: '',
  comments: '',
  clientName: '',
  designations: '',
};

const CLIENT_NAME_LIST = [
  { value: 'pune', label: 'Pune', name: 'city' },
  { value: 'indore', label: 'Indore', name: 'city' },
  { value: 'gujarat', label: 'Gujarat', name: 'city' },
  { value: 'Karnataka', label: 'Karnataka', name: 'city' },
  { value: 'goa', label: 'Goa', name: 'city' },
];

const AddMasterdata = () => {
  const [masterData, setMasterdata] = useState(defaultValue);
  const [skills, setSkill] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const skillItems: any = [];
  const [bands, setBands] = useState([]);
  const [competency, setCompetency] = useState([]);
  const [designations, setDesignation] = useState([]);

  useEffect(() => {
    getAllBands();
    getAllDesignation();
    getAllCompetency();
    getAllSkills();
  }, []);
// ==================== bands select===========================================

const getAllBands = async () => {
    const response = await getBand();
    setBands(response?.data);
  };

  const onBandSelect = (e) => {
    console.log('Select Values, onValueChange', e[0]);
    setMasterdata({ ...masterData, bands: e[0].value });
  };
  // ==================== Competency select===========================================

  const getAllCompetency = async () => {
    const response = await getCompetency();
    setCompetency(response?.data);
  };

  const onCompetencySelect = (e) => {
    console.log('Select Values, onValueChange', e[0]);
    setMasterdata({ ...masterData, competency: e[0].value });
  };

  // ==================== designations select===========================================

  const getAllDesignation = async () => {
    const response = await getDesignation();
    setDesignation(response?.data);
  };

  const onSelect = (e) => {
    console.log('Select Values, onValueChange', e[0]);
    setMasterdata({ ...masterData, designations: e[0].value });
  };

  // ==================== skill multiselect===========================================

  const getAllSkills = async () => {
    try {
      const response = await getSkills();
      console.log(response);
      const skillData = response;
      const transformedSkills = skillData.map((skill) => ({
        value: skill._id,
        label: skill.name,
        name: skill.name,
      }));
      setSkill(transformedSkills);
      console.log('>>>>>', skillData);
    } catch (error) {
      console.error('error while fetching skills', error);
    }
  };

  const onSelectSkills = (e) => {
    setMasterdata({ ...masterData, skills: e });
  };

  const onSelectClientName = (e) => {
    console.log('Select Values, onValueChange', e[0]);
    setMasterdata({ ...masterData, clientName: e[0].value });
  };

  // ========================================================================================================

  const onValueChange = (e) => {
    console.log(e);
    setMasterdata({ ...masterData, [e.target.name]: e.target.value });
    console.log(masterData);
  };

  const addMasterDetails = async () => {
    await addMasterdata(masterData);
    navigate('/masterData');
  };

  //   const addMasterDetails = async () => {
  //     try {

  //         const designationsArray = Array.isArray(masterData.designations) ? masterData.designations : [masterData.designations];
  //         const updatedMasterData = { ...masterData, designations: designationsArray };
  //         await addMasterdata(updatedMasterData);
  //         navigate('/masterData');
  //     } catch (error) {
  //         console.error('Error adding master data:', error);
  //     }
  // };

  // ================================Date picker===================================
  const today = new Date();
  const [date, setStartDate] = useState({
    startDate: null,

    errorMsg: false,
  });
  const setDateState: any = (d: any, field: string) => {
    console.log(d, field);
    setStartDate((preState: any) => {
      return {
        ...preState,
        [field]: d,
      };
    });
  };
  const startDateProp = {
    selected: date.startDate,
    className: 'form-control w-100',
    onChange: (e: any) => setDateState(e, 'startDate'),
    startDate: today,
    poolEndDate: null,
    disabled: false,
  };

  // ==========================================================================

  return (
    <div>
     {/* <div className="ptg-table-addData">
        <h3>Add Master Data</h3>
     
        <label htmlFor="name"> Name </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="name"
          id="inputUsername"
          value={masterData.name}
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="clientInterviews"> Client Interviews </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="clientInterviews"
          id="clientInterviews"
          value={masterData.clientInterviews}
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="poolStartDate"> Pool Start Date </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="poolStartDate"
          id="poolStartDate"
          value={masterData.poolStartDate}
          onChange={(e) => onValueChange(e)}
        />

        <PtgUiCalendar {...startDateProp} />

        <label htmlFor="inputUsername"> Ageing </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="ageing"
          id="inputUsername"
          value={masterData.ageing}
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="inputUsername"> Status </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="status"
          // id="inputUsername"
          value={masterData.status}
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="inputUsername"> Skills </label>
        <PtgUiMultiSelectbox
          name="skills"
          list={skills}
          onSelect={onSelectSkills}
          showCheckbox={true}
          singleSelect={false}
        />

        <label htmlFor="inputUsername"> Years of Exp </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="yearsofExp"
          value={masterData.yearsofExp}
          // id="inputUsername"
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="inputUsername"> Bands </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="bands"
          // id="inputUsername"
          value={masterData.bands}
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="inputUsername"> Comments </label>
        <PtgUiTextArea
          // className={"w-100 form-control bg_0 $"}
          rows="2"
          name="comments"
          id="inputAddress"
          value={masterData.comments}
          // id="inputUsername"
          onChange={(e) => onValueChange(e)}
        />

        <label htmlFor="inputUsername"> Client Name </label>
        <PtgUiMultiSelectbox
          name="clientName"
          list={CLIENT_NAME_LIST}
          onSelect={onSelectClientName}
          showCheckbox={true}
          singleSelect={true}
        />
         <label htmlFor="inputUsername"> Designation </label>
        <PtgUiMultiSelectbox
          name="designations"
          list={designations}
          onSelect={onSelect}
          showCheckbox={true}
          singleSelect={true}
        />

        <PtgUiButton
          className="w-100 mt-2"
          type="button"
          onClick={() => addMasterDetails()}
          // accessKey="s"
          aria-label="next"
          data-testid="next"
        >
          Add Master Data
        </PtgUiButton>
      </div> */}
    
{/* ===================================================================== */}
      <div className="ptg-table-addData">
      <h3>Add Master Data</h3>
{/* ================== name and email========================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="name"> Name </label>
            <PtgUiInput
              className={'form-control '}
              type="text"
              name="name"
              id="inputUsername"
              value={masterData.name}
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="masterdatafield-box">
            <label htmlFor="email"> Email </label>
            <PtgUiInput
              className={'form-control'}
              type="text"
              name="email"
              id="email"
              value={masterData.email}
              onChange={(e) => onValueChange(e)}
            />
          </div>
        </div>
{/* ================== pool start date and band========================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="name"> Pool Start date </label>
            <PtgUiCalendar  {...startDateProp} />
          </div>

          <div className="masterdatafield-box">
            <label > Band </label>
            <PtgUiMultiSelectbox
             
          name="bands"
          list={bands}
          onSelect={onBandSelect}
          showCheckbox={true}
          singleSelect={true}
        />
          </div>
        </div>
{/* ==================competency and designation======================= ===*/}
<div className="masterdatafield">
          <div className="masterdatafield-box">
          <label htmlFor="inputUsername"> Competancy </label>
        <PtgUiMultiSelectbox
          name="competency"
          list={competency}
          onSelect={onCompetencySelect}
          showCheckbox={true}
          singleSelect={true}
        />
          </div>
          <div className="masterdatafield-box">
          <label htmlFor="inputUsername"> Designation </label>
        <PtgUiMultiSelectbox
          name="designations"
          list={designations}
          onSelect={onSelect}
          showCheckbox={true}
          singleSelect={true}
        />
          </div>
        </div>
{/*  =====================skills and years of exp================================*/}
<div className="masterdatafield">
          <div className="masterdatafield-box">
          <label htmlFor="inputUsername"> Skills </label>
        <PtgUiMultiSelectbox
          name="skills"
          list={skills}
          onSelect={onSelectSkills}
          showCheckbox={true}
          singleSelect={false}
        />
          </div>
          <div className="masterdatafield-box">
          <label htmlFor="inputUsername"> Years of Experience </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="yearsofExp"
          value={masterData.yearsofExp}
          // id="inputUsername"
          onChange={(e) => onValueChange(e)}
        />
          </div>
        </div>
{/* ====================comment============================== */}
<div className="masterdatafield">
          <div className="masterdatafield-box">
          <label htmlFor="inputUsername"> Comments </label>
        <PtgUiTextArea
          // className={"w-100 form-control bg_0 $"}
          rows="2"
          name="comments"
          id="inputAddress"
          value={masterData.comments}
          // id="inputUsername"
          onChange={(e) => onValueChange(e)}
        />
          </div>       
        </div>
{/*=====================================================  */}
<div className="masterdatafield-box">
         <PtgUiButton
          className="mt-2"
          type="button"
          onClick={() => addMasterDetails()}
          // accessKey="s"
          aria-label="next"
          data-testid="next"
        >
          Save
        </PtgUiButton>
          </div>
      </div>
    </div>
  );
};

export default AddMasterdata;
