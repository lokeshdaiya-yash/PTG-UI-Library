// import {
//   PtgUiButton,
//   PtgUiInput,
//   PtgUiMaterialTable,
// } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { getDesignation, deleteDesignation } from '../../service/api';
import { PtgCard, PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import AddDesignation from './AddDesignation';
import './designation.scss';
import { Link } from 'react-router-dom';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import EditDesignation from './EditDesignation';

const Designation = () => {
  const [designations, setDesignation] = useState([]);

  const Columns = [
    { title: 'ID', field: '_id', filtering: false, width: '20%' },
    { title: 'name', field: 'value', filtering: false, width: '20%' },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: 100,
      render: (designation) => (
        <div className="masterdataBtn">
          <PtgUiButton
            onClick={() => deleteDesignationDetails(designation._id)}
          >
            Delete
          </PtgUiButton>
          <PtgModal
        modal-size="lg"
        modal-header-name="Edit Designation"
        confirm-button-name="Okay"
        // onModalClose={modalClosed}
      >
        <div slot="body-block">
        <EditDesignation />
        </div>
      </PtgModal>

            <Link to={`/editdesignation/${designation._id}`}>
            <PtgUiButton >Edit</PtgUiButton>
          </Link>
        </div>
      ),
    },
  ];
  const filterValue = [
    { name: 'id', operator: 'id', type: 'string', value: '' },
    { name: 'name', operator: 'name', type: 'string', value: '' },
  ];
  useEffect(() => {
    getAllDesignations();
  }, []);
  const getAllDesignations = async () => {
    const response = await getDesignation();
    setDesignation(response?.data);
  };
  const deleteDesignationDetails = async (id) => {
    await deleteDesignation(id);
    getAllDesignations();
  };
  return (
    <div className="viewMastertable ">
      <PtgModal
        modal-size="lg"
        modal-header-name="Add Designation"
        confirm-button-name="save"
        btn-name='Skill'
        // onModalClose={modalClosed}
      >
        <div slot="body-block">
          <AddDesignation />
        </div>
      </PtgModal>

      <PtgUiMaterialTable
        data={designations}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
      />
    </div>
  );
};
export default Designation;
