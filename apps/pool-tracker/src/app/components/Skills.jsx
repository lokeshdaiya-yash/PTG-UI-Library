import {
  PtgUiButton,
  PtgUiMaterialTable,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getSkills, deleteSkill } from '../service/api';

const Skills = () => {
  const [skills, setSkill] = useState([]);

  const Columns = [
    { title: 'ID', field: '_id', filtering: false, width: '20%' },
    { title: 'name', field: 'name', filtering: false, width: '20%' },
  ];

  const filterValue = [
    { name: 'id', operator: 'id', type: 'string', value: '' },
    { name: 'name', operator: 'name', type: 'string', value: '' },
  ];

  useEffect(() => {
    getAllSkills();
  }, []);

  const getAllSkills = async () => {
    let response = await getSkills();
    setSkill(response.data);
  };

  const deleteSkillDetails = async (id) => {
    await deleteSkill(id);
    getAllSkills();
  };

  return (
    <div className="viewMastertable ">
      {/* <NavLink to="/addSkill">Add Skills</NavLink> */}
      <PtgUiButton >
        <NavLink to="/addSkill">Add Skills</NavLink>
      </PtgUiButton>

      <div className="viewMastertable">
        <PtgUiMaterialTable
          data={skills}
          columns={Columns}
          filtering={true}
          paging={true}
          paginationPosition={'bottom'}
          grouping={true}
          filterValue={filterValue}
        />
      </div>

      <table>
        <tr>
          <th>id</th>
          <th>skill Name</th>
          <th>Action</th>
        </tr>

        <tbody>
          {skills.map((skill) => (
            <tr key={skill._id}>
              <td>{skill._id}</td>
              <td>{skill.name}</td>
              <td>
                <button LinkComponent={Link} to={`/editskill/${skill._id}`}>
                  Edit
                </button>
                <a href="/editskill/${skill._id"> Edit Skills</a>
                <PtgUiButton onClick={() => deleteSkillDetails(skill._id)}>
                  Delete
                </PtgUiButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
