import React, { useEffect, useState } from 'react';

import { getSkills } from '../../service/api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import './Skills.scss';
import { PtgUiMaterialTable } from '@ptg-ui/react';
import AddSkills from './AddSkills';

const ViewSkills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    getAllSkills();
  }, []);

  const getAllSkills = async () => {
    const response = await getSkills();
    setSkill(response?.data);
  };

  const deleteSkill = async (id) => {
    await deleteSkill(id);
    getAllSkills();
  };

  const skillsModal = (btnName: string, heading: string, skill?: string) => {
    return (
      <PtgModal
        modal-size="md"
        btn-name={btnName}
        modal-header-name={heading}
        confirm-button-name="Save"
      >
        <div slot="body-block">
          <AddSkills skill={skill} btnName={btnName} />
        </div>
      </PtgModal>
    );
  };

  const Columns = [
    { title: 'name', field: 'value', filtering: false, width: '50%' },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: '50%',
      render: (skill) => (
        <div className="masterdataBtn table-action-button">
          {skillsModal('Edit', 'Edit Skill', skill)}

          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => deleteSkill(skill._id)}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <div className="viewMastertable ">
      {skillsModal('Add Skill', 'Add Skill')}
      <PtgUiMaterialTable
        data={skill}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
      />
    </div>
  );
};
export default ViewSkills;
