import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleDesignation, editDesignation } from '../../service/api';

const defaultValue = {
  value: '',
  label: '',
  name: '',
};

const EditDesignation = () => {
    const [designation, setDesignation] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDesignation({ ...designation, [e.target.name]: e.target.value });
    console.log(designation);
  };

  useEffect(() => {
    loadDesignationDetails();
  }, []);

  const loadDesignationDetails = async () => {
    const response = await getSingleDesignation(id);
    setDesignation(response?.data);
  };

  const editDesignationDetails = async () => {
    // await editDesignation(id);
    navigate('/designation');
  };

  return (
    <div>
      <div className="addMasterData">
        <h3>Edit Designation Data</h3>
        <div className="inputBox">
          <input
            placeholder="Enter Designation Label"
            onChange={(e) => onValueChange(e)}
            name="label"
            // value={designation.label}
          ></input>
        </div>
        <div className="inputBox">
          <input
            placeholder="Enter Designation value"
            onChange={(e) => onValueChange(e)}
            name="name"
            // value={designation.name}
          ></input>
        </div>
        <div className="inputBox">
          <input
            placeholder="Enter Designation Name"
            onChange={(e) => onValueChange(e)}
            name="value"
            // value={designation.value}
          ></input>
        </div>
        <div>
          <button onClick={() => editDesignationDetails()}> Edit Skill Data</button>
        </div>
      </div>
    </div>
  )
}

export default EditDesignation