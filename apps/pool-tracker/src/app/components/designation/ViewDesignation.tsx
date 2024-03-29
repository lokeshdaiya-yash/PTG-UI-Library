import React, { useEffect, useState } from 'react';

import { getDesignations, deleteDesignation } from '../../service/api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import AddDesignation from './AddDesignation';
import './Designation.scss';
import { PtgUiMaterialTable } from '@ptg-ui/react';

const ViewDesignation = () => {
  const [designations, setDesignation] = useState([]);

  useEffect(() => {
    getAllDesignations();
  }, []);

  const getAllDesignations = async () => {
    const response = await getDesignations();
    setDesignation(response?.data);
  };

  const deleteDesignationDetails = async (id) => {
    await deleteDesignation(id);
    getAllDesignations();
  };

  const modalClosed = (event) => {
    console.log('Modal Closed successfully', event.returnValue);
  };

  const confirmClicked = (event) => {
    console.log('Confirm Button Clicked', event.returnValue);
  };

  const designationModal = (
    btnName: string,
    heading: string,
    designation?: any
  ) => {
    return (
      <PtgModal
        modal-size="md"
        btn-name={btnName}
        modal-header-name={heading}
        confirm-button-name="Save"
        onModalClose={modalClosed}
        onConfirmClose={confirmClicked}
        style={{ marginRight: '20px' }}
      >
        <div slot="body-block">
          <AddDesignation designation={designation} btnName={btnName} />
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
      width: '20%',
      render: (designation: any) => (
        <div className="masterdataBtn table-action-button">
          {designationModal('Edit', 'Edit Designation', designation)}
          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => deleteDesignationDetails(designation._id)}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <div className="viewMastertable viewTable">
      {designationModal('Add Designation', 'Add Designation')}
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
export default ViewDesignation;
