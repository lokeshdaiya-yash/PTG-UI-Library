import React,{ useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editMasterdata, getData } from "../../service/api";


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
    designations: "",
  };
const EditMasterdata = () => {
    const [masterData, setMasterdata] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();

 

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getData(id);
    setMasterdata(response?.data);
  };
  
  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setMasterdata({ ...masterData, [e.target.name]: e.target.value });
    console.log(masterData);
  };

  const editMasterDetails = async () => {
    await editMasterdata(masterData, id);
    navigate("/masterData");
  };


  return (
    <div className='addMasterData'>
        <h3>Edit Master Data</h3>
        <div className='inputBox'>
        <input placeholder='Enter Name' onChange={(e) => onValueChange(e)} name="name" value={masterData.name}></input>
        </div>

       <div>
       {/* <label >ClientInterviews</label> */}
        <input placeholder='Enter ClientInterviews' onChange={(e) => onValueChange(e)} name="clientInterviews" value={masterData.clientInterviews}></input>
       </div>

        <div>
        {/* <label>poolStartDate</label> */}
        <input placeholder='Enter poolStartDate' onChange={(e) => onValueChange(e)} name="poolStartDate" value={masterData.poolStartDate}></input>
        </div>

        <div>
        {/* <label>poolEndDate</label> */}
        <input placeholder='Enter poolEndDate' onChange={(e) => onValueChange(e)} name="poolEndDate" value={masterData.poolEndDate}></input>
        </div>

        <div>
        {/* <label>ageing</label> */}
        <input placeholder='Enter ageing' onChange={(e) => onValueChange(e)} name="ageing" value={masterData.ageing}></input>
        </div>

       <div>
       {/* <label>status</label> */}
        <input placeholder='Enter status' onChange={(e) => onValueChange(e)} name="status" value={masterData.status}></input>
       </div>

        <div>
        {/* <label>skills</label> */}
        <input placeholder='Enter skills' onChange={(e) => onValueChange(e)} name="skills" value={masterData.skills}></input>
        </div>

        <div>
        {/* <label>yearsofExp</label> */}
        <input placeholder='Enter yearsofExp' onChange={(e) => onValueChange(e)} name="yearsofExp" value={masterData.yearsofExp}></input>
        </div>

        <div>
        {/* <label>bands</label> */}
        <input placeholder='Enter bands' onChange={(e) => onValueChange(e)} name="bands" value={masterData.bands}></input>
        </div>

        <div>
        {/* <label>comments</label> */}
        <input placeholder='Enter comments' onChange={(e) => onValueChange(e)} name="comments" value={masterData.comments}></input>
        </div>

        <div>
        {/* <label>clientName</label> */}
        <input placeholder='Enter clientName' onChange={(e) => onValueChange(e)} name="clientName" value={masterData.clientName}></input>
        </div>
        <div>
        {/* <label>designation</label> */}
        <input placeholder='Enter designation' onChange={(e) => onValueChange(e)} name="designations" value={masterData.designations}></input>
        </div>

        <div>
        <button onClick={() => editMasterDetails()}> Edit Master Data</button>
        </div>
        </div>
    
  )
}

export default EditMasterdata