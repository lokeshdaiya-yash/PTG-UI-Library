import React, { useEffect, useState } from 'react';
import { addMasterdata } from '../service/api';
import '../app.module.scss';
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

import { getSkills } from '../service/api';
import { getDesignation } from '../service/api';

const defaultValue = {
  name: '',
  clientInterviews: '',
  poolStartDate: '',
  poolEndDate: '',
  ageing: '',
  status: '',
  skills: '',
  yearsofExp: '',
  bands: '',
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

  const [designations, setDesignation] = useState([]);
 

  useEffect(() => {
    getAllDesignation();
    getAllSkills();
  }, []);

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
  // useEffect(() => {
  //   getAllSkills();
  // }, []);

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
      <div className="ptg-table-addData">
        <h3>Add Master Data</h3>
        {/* <DatePicker
     
      dateFormat="MM-dd-yyyy"
      placeholderText="MM-DD-YYYY"
      onChange={(e) => onValueChange(e)}
      maxDate={date.endDate === null ? date.endDate : new Date(date.endDate)}
      isClearable
    />
    { date.errorMsg && <p>DATE_ERROR_TEXT</p>} */}

        <label htmlFor="name"> Name </label>
        <PtgUiInput
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
      </div>
      {/* =============================================================================== */}

      {/* <div className="addMasterData">
        <div className="inputBox">
          <input
            placeholder="Enter Name"
            onChange={(e) => onValueChange(e)}
            name="name"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter ClientInterviews"
            onChange={(e) => onValueChange(e)}
            name="clientInterviews"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter poolStartDate"
            onChange={(e) => onValueChange(e)}
            name="poolStartDate"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter poolEndDate"
            onChange={(e) => onValueChange(e)}
            name="poolEndDate"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter ageing"
            onChange={(e) => onValueChange(e)}
            name="ageing"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter status"
            onChange={(e) => onValueChange(e)}
            name="status"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter skills"
            onChange={(e) => onValueChange(e)}
            name="skills"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter yearsofExp"
            onChange={(e) => onValueChange(e)}
            name="yearsofExp"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter bands"
            onChange={(e) => onValueChange(e)}
            name="bands"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter comments"
            onChange={(e) => onValueChange(e)}
            name="comments"
          ></input>
        </div>

        <div>
          <input
            placeholder="Enter clientName"
            onChange={(e) => onValueChange(e)}
            name="clientName"
          ></input>
        </div>

        <div>
          <button onClick={() => addMasterDetails()}> Add Master Data</button>
        </div>
      </div> */}

      {/* <PtgUiDatePicker
        // disabled={disabled}
        // selected={selected}
        // className={className}
        onChange={(e) => onValueChange(e)}
        maxDate={date.endDate === null ? date.endDate : new Date(date.endDate)}
        // onKeyDown={onKeyDown}
        />
        {date.errorMsg && <p>DATE_ERROR_TEXT</p>} */}
    </div>
  );
};

export default AddMasterdata;
