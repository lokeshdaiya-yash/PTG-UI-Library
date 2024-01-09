import React, { useState } from 'react'
import { addMasterdata } from '../service/api';
import "../app.module.scss"
import { useNavigate, useParams } from "react-router-dom";
// import './App.css';

const defaultValue = {
    name: "",
    clientInterviews: "",
    poolStartDate: "",
    poolEndDate: "",
    ageing: "",
    status: "",
    skills: "",
    yearsofExp: "",
    bands: "",
    comments: "",
    clientName: "",
  };
const AddMasterdata = () => {
    const [masterData, setMasterdata] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();
    
  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setMasterdata({ ...masterData, [e.target.name]: e.target.value });
    console.log(masterData);
  };


const addMasterDetails = async () => {
    await addMasterdata(masterData);
    navigate("/all");
  };
  return (
    <div className='addMasterData'>
        <h3>Add Master Data</h3>
        <div className='inputBox'>
        {/* <label>Name</label> */}
        <input placeholder='Enter Name' onChange={(e) => onValueChange(e)} name="name"></input>
        </div>

       <div>
       {/* <label >ClientInterviews</label> */}
        <input placeholder='Enter ClientInterviews' onChange={(e) => onValueChange(e)} name="clientInterviews"></input>
       </div>

        <div>
        {/* <label>poolStartDate</label> */}
        <input placeholder='Enter poolStartDate' onChange={(e) => onValueChange(e)} name="poolStartDate"></input>
        </div>

        <div>
        {/* <label>poolEndDate</label> */}
        <input placeholder='Enter poolEndDate' onChange={(e) => onValueChange(e)} name="poolEndDate"></input>
        </div>

        <div>
        {/* <label>ageing</label> */}
        <input placeholder='Enter ageing' onChange={(e) => onValueChange(e)} name="ageing"></input>
        </div>

       <div>
       {/* <label>status</label> */}
        <input placeholder='Enter status' onChange={(e) => onValueChange(e)} name="status"></input>
       </div>

        <div>
        {/* <label>skills</label> */}
        <input placeholder='Enter skills' onChange={(e) => onValueChange(e)} name="skills"></input>
        </div>

        <div>
        {/* <label>yearsofExp</label> */}
        <input placeholder='Enter yearsofExp' onChange={(e) => onValueChange(e)} name="yearsofExp"></input>
        </div>

        <div>
        {/* <label>bands</label> */}
        <input placeholder='Enter bands' onChange={(e) => onValueChange(e)} name="bands"></input>
        </div>

        <div>
        {/* <label>comments</label> */}
        <input placeholder='Enter comments' onChange={(e) => onValueChange(e)} name="comments"></input>
        </div>

        <div>
        {/* <label>clientName</label> */}
        <input placeholder='Enter clientName' onChange={(e) => onValueChange(e)} name="clientName"></input>
        </div>

        <div>
        <button onClick={() => addMasterDetails()}> Add Master Data</button>
        </div>
        </div>
  )
}

export default AddMasterdata