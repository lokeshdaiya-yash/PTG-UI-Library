import React, { useEffect, useState } from 'react';

import { getDesignation, deleteDesignation } from '../../service/api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import AddDesignation from './AddDesignation';
import './designation.scss';
import { Link } from 'react-router-dom';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import EditDesignation from './EditDesignation';

const Designation = () => {
  const [designations, setDesignation] = useState([]);

  useEffect(() => {
    getAllDesignations();
  }, []);

  const getAllDesignations = async () => {
    const response = await getDesignation();
    console.log('getAllDesignations >>>', response);
    setDesignation(response?.data);
  };

  const deleteDesignationDetails = async (id) => {
    await deleteDesignation(id);
    getAllDesignations();
  };

  // const btnName = <i className="fa-solid fa-pencil"></i>;

  const modalClosed = (event) => {
    console.log('Modal Closed successfully', event.returnValue);
  };

  const confirmClicked = (event) => {
    console.log('Confirm Button Clicked', event.returnValue);
  };

  const designationModal = (
    btnName: any,
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
      width: '50%',
      render: (designation) => (
        <div className="masterdataBtn table-action-button">
          {designationModal('Edit', 'Edit Designation', designation)}
          {/* <PtgModal
            modal-size="lg"
            modal-header-name="Edit Designation"
            btn-name={btnName}
            confirm-button-name="Okay"
          >
            <div slot="body-block">
              <EditDesignation />
            </div>
          </PtgModal> */}

          {/* <Link to={`/editdesignation/${designation._id}`}>
            <i className="fa-solid fa-pencil icon-color"></i>
          </Link> */}

          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => deleteDesignationDetails(designation._id)}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <div className="viewMastertable ">
      {/* <PtgModal
        modal-size="md"
        btn-name="Add Designation "
        modal-header-name="Add Designation"
        confirm-button-name="Okay"
      >
        <div slot="body-block">
          <AddDesignation />
        </div>
      </PtgModal> */}
      {designationModal('Add Designation', 'Add Designation')}

      {/* <i className="fa-thin fa-plus"></i> */}

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
