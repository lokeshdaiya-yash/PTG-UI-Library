import React, { useEffect, useState } from 'react';
import { addMasterdata } from '../service/api';
import '../app.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { PtgUiButton, PtgUiCalendar, PtgUiDatePicker, PtgUiInput, PtgUiMultiSelectbox, PtgUiSelect } from '@ptg-ui/libs/ptg-ui-react-lib/src';



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
};

 const SKILL_LIST = [
  { value: 'node', label: 'Node', name:'skills' },
  { value: 'react', label: 'React',name:'skills' },
  { value: 'angular', label: 'Angular',name:'skills' },
  { value: 'php', label: 'Php',name:'skills' },
  { value: 'java', label: 'Java',name:'skills' },
];

const CLIENT_NAME_LIST = [
  { value: 'johndear', label: 'Johndear', name:'clientname' },
  { value: 'btn', label: 'BTN',name:'clientname' },
  { value: 'ktp', label: 'KTP',name:'clientname' },
  { value: 'abc', label: 'ABC',name:'clientname' },
  { value: 'moto', label: 'Moto',name:'clientname' },
];

const AddMasterdata = () => {

  const onSelect = (event) => {
    console.log('Select Values, onValueChange', event);
    
  };


  // ==============Date picker=============
  const today = new Date();
    const [date, setStartDate] = useState({
        startDate: null,
        endDate: null,
        errorMsg:false,
    });
    const setDateState: any = (d: any, field: string) => {
        setStartDate((preState: any) => {
            if (field === 'endDate' && date && date.startDate && date.startDate > d) {
                  date.errorMsg = true
            } else {
                date.errorMsg = false
            }
            return {
                ...preState,
                [field]: d
            }
        });
    }
    const startDateProp = {
        selected: date.startDate,
        className: "form-control w-100",
        onChange: (e: any) => setDateState(e, 'startDate'),
        startDate: today,
        poolEndDate: null,
        disabled: false,

    }

    const endDateProp = {
        selected: date.endDate,
        className: "form-control w-100",
        // onChange: (d: any) => setDateState(d, 'poolEndDate'),
        onChange:(e:any) => setDateState(e, 'endDate'),
        poolEndDate: null,
    }


// ==========================================================================
  const [masterData, setMasterdata] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setMasterdata({ ...masterData, [e.target.name]: e.target.value });
    console.log(masterData);
  };

  const addMasterDetails = async () => {
    await addMasterdata(masterData);
    navigate('/masterData');
  };

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

<PtgUiCalendar {...startDateProp}  />




      <label htmlFor="inputUsername"> Pool End tDate </label>
      <PtgUiInput
        className={'w-100 form-control bg_0 '}
        type="text"
        name="poolEndDate"
        id="inputUsername"
        value={masterData.poolEndDate}
        onChange={(e) => onValueChange(e)}
      />
      <PtgUiCalendar {...endDateProp} />

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
      list={SKILL_LIST}
      onSelect={onSelect}
      
      showCheckbox={true}
      singleSelect={false}
    />
    
     {/* <PtgUiSelect
          name="skills"
          list={CITY_LIST}
          id="inputCardType"
          data-testid="skills"
          
          aria-label="given-name"
          value={masterData.skills}
          onChange={(e) => onValueChange(e)}
        /> */}

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
      <PtgUiInput
        className={'w-100 form-control bg_0 '}
        type="text"
        name="comments"
        // id="inputUsername"
        value={masterData.comments}
        onChange={(e) => onValueChange(e)}
      />

      <label htmlFor="inputUsername"> Client Name </label>
      <PtgUiMultiSelectbox
      name="clientName"
      list={CLIENT_NAME_LIST}
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

      <div className="addMasterData">
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
          <input placeholder='Enter poolStartDate' onChange={(e) => onValueChange(e)} name="poolStartDate"></input>
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
    </div>
  );
};

export default AddMasterdata;
