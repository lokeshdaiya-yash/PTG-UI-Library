import React, { useEffect, useState } from 'react';
import {

    deleteSkill,
  getSkills,
  
} from '../../service/api';
import '../../app.module.scss';

import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  PtgUiButton, PtgUiMaterialTable,
 
} from '@ptg-ui/libs/ptg-ui-react-lib/src';

const Skill = () => {
  const [skills, setSkill] = useState([])
    useEffect(() => {
       
        getAllSkills();
      }, []);

      
        


        const Columns = [
            { title: 'ID', field: 'value', filtering: false, width: '20%' },
            { title: 'name', field: 'name', filtering: false, width: '20%' },
            {
              title: 'Action',
              field: 'Action',
              name: 'action',
              header: '',
              width: 100,
              render: (skills) => (
                <div className="masterdataBtn">
                  <PtgUiButton
                    onClick={() => deleteSkillDetails(skills._id)}
                  >
                    Delete
                  </PtgUiButton>
                 
        
                    <Link to={`/editdesignation/${skills._id}`}>
                    <PtgUiButton >Edit</PtgUiButton>
                  </Link> 
                </div>
              ),
            },
          ];

       // ==================== skill multiselect===========================================

  const getAllSkills = async () => {
    try {
      const response = await getSkills();
      console.log(response);
      const skillData = response;
      const transformedSkills = skillData.map((skill) => ({
        value: skill.value,
        label: skill.name,
        name: skill.name,
      }));
      setSkill(transformedSkills);
      console.log('>>>>>', skillData);
    } catch (error) {
      console.error('error while fetching skills', error);
    }
  };
  const deleteSkillDetails = async (id) => {
    await deleteSkill(id);
    getAllSkills();
  };

 
  return (
    <div>
        <PtgUiMaterialTable
    data={skills}
    columns={Columns}
    filtering={true}
    paging={true}
    paginationPosition={'bottom'}
    grouping={true}
    
  />
  </div>
  )
}

export default Skill