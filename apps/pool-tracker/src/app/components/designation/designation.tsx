import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDesignation, deleteDesignation } from '../../service/api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import AddDesignation from './AddDesignation';
import './designation.scss';
import { Link } from 'react-router-dom';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import EditDesignation from './EditDesignation';

const Designation = () => {
  const [designations, setDesignation] = useState([]);

  const Columns = [
    { title: 'name', field: 'value', filtering: false, width: '50%' },
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
            <i className="fa-solid fa-trash"></i>
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
            <PtgUiButton>Edit</PtgUiButton>
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
        modal-size="md"
        btn-name="Add Designation "
        modal-header-name="Add Designation"
        confirm-button-name="Okay"
      >
        <div slot="body-block">
          <AddDesignation />
        </div>
      </PtgModal>

      <i className="fa-thin fa-plus"></i>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
      </svg> */}

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
