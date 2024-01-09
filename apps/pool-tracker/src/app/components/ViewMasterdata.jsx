import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getMasterdata, deleteMasterdata } from '../service/api';

const ViewMasterdata = () => {
  const [masterdatas, setMasterdata] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

 const getAllUsers = async() =>{
   let response = await getMasterdata();
  setMasterdata(response.data)
  
 }

 const deleteUsersDetails = async (id) =>{
  await deleteMasterdata(id);
  getAllUsers();
} 
  
  
    

  return (
    <div className='viewMastertable'>
      <h4>View Master data</h4>

      <table>
        <tr>
          <th>name</th>
          <th>clientInterviews</th>
          <th>poolStartDate</th>
          <th>poolEndDate</th>
          <th>ageing</th>
          <th>status</th>
          <th>skills</th>
          <th>yearsofExp</th>
          <th>bands</th>
          <th>comments</th>
          <th>clientName</th>
        </tr>
        
          {masterdatas.map((masterdata) => (
            <tr key={masterdata._id}>
            <th>{masterdata.name}</th>
            <th>{masterdata.clientInterviews}</th>
            <th>{masterdata.poolStartDate}</th>
            <th>{masterdata.poolEndDate}</th>
            <th>{masterdata.ageing}</th>
            <th>{masterdata.status}</th>
            <th>{masterdata.skills}</th>
            <th>{masterdata.yearsofExp}</th>
            <th>{masterdata.bands}</th>
            <th>{masterdata.ViewMasterdatacomments}</th>
            <th>{masterdata.clientName}</th>
            <th>
              <button LinkComponent={Link} to={`/edit/${masterdata._id}`}>Edit</button>
              <button onClick={()=>deleteUsersDetails(masterdata._id)}>Delete</button>
            </th>
          </tr>
             
            
          ))}
        
      </table>
    </div>
  );
};

export default ViewMasterdata;
