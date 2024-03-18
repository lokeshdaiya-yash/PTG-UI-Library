// import { PtgUiButton } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMasterdata, deleteMasterdata, getData } from '../../service/api';
import '../../app.module.scss';
import './ViewMasterData.scss';
import { useNavigate, useParams } from 'react-router-dom';

import { PtgUiInput, PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import { PtgModal } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import AddMasterdata from '../addMasterData/AddMasterData';
import EditMasterData from './EditMasterData';
import { PtgUiAlert } from '@ptg-ui/react';

// import { AggridButton } from './aggrid-button';

// const defaultValue = {
//   name: '',
//   emailId: ''
// };

const ViewMasterData = () => {
  const [masterdatas, setMasterdata] = useState<any>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getMasterdata();
    setMasterdata(response?.data);
  };
  const deleteUsersDetails = async (id: any) => {
    await deleteMasterdata(id);
alert('Do You Want To Delete');
    getAllUsers();
  };

  const ActionButton = (props) => {
    return <button>Text</button>;
  };
  const modalClosed = (event) => {
    console.log('Modal Closed successfully', event.returnValue);
  };

  const confirmClicked = (event) => {
    console.log('Confirm Button Clicked', event.returnValue);
  };

  const designationModal = (
    btnName: any,
    heading: string,
    masterdata?: any
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
          <AddMasterdata masterdata={masterdata} btnName={btnName} />
          {/* <EditMasterData masterdata={masterdata} btnName={btnName} /> */}
        </div>
      </PtgModal>
    );
  };
 

  const Columns: any = [
    
    { title: 'Name', field: 'name', filtering: false },
    { title: 'EmailId', field: 'emailId', filtering: false },
    { title: 'Band', field: 'band', filtering: false },
    { title: 'Competency', field: 'competency', filtering: false },
    { title: 'Designations', field: 'designations', filtering: false },
    { title: 'Pool StartDate', field: 'poolStartDate' },
    {
      title: 'skills',
      field: 'skills',
      filtering: false,
      render: (masterdata: any) =>
        masterdata.skills.map((skill) => ' ' + skill.name).toString(),
    },
    // { title: 'name', field: 'memberName', filtering: false, width: '10%' },
    // { title: 'Id', field: '_id', filtering: false },
    // { title: 'yearsofExp', field: 'yearsofExp', filtering: false },
    // { title: 'comments', field: 'comments', filtering: false },
    // { title: 'clientName', field: 'clientName', filtering: false },
    // { title: 'status', field: 'status', filtering: false },

    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: 100,
      render: (masterdata: any) => (
        <div className="masterdataBtn">
          {/* <PtgUiButton onClick={() => deleteUsersDetails(masterdata._id)}>
              Delete
            </PtgUiButton> */}
          {/* <>{console.log('>>>>',masterdata.competency.map(compatancys=> compatancys.name).toString())}</> */}

          {/* <Link to={`/editMasterdata/${masterdata._id}`}>
              <PtgUiButton >Edit</PtgUiButton>
            </Link> */}

          <div className="masterdataBtn table-action-button">
            {designationModal('Edit', 'Edit Masterdata', masterdata)}

            <i
              className="fa-solid fa-trash cursor-pointer"
              onClick={() => deleteUsersDetails(masterdata._id)}
            ></i>

          </div>
        </div>
      ),
    },
  ];

  const detailForAccordion = (masterdata: any) => {
    console.log('masterdata:', masterdata.rowData.name);
  console.log('masterdata.name:', masterdata.rowData.name);
    return (
      <div className='ms-4 me-4 mt-2 mb-2'>
        <p>Name: {masterdata.rowData.name}</p>
        <p>project Name: Interview Screening</p>
        <p>Comments: {masterdata.rowData.comments}</p>
      </div>
    );
  };
 
  // const filterValue = [
  //   { name: 'name', operator: 'name', type: 'string', value: '' },
  //   { name: 'skills', operator: 'skills', type: 'string', value: '' },
  //   { name: 'clientName', operator: 'clientName', type: 'string', value: '' },
  // ];

  return (
    <div className="viewMastertable">
      <PtgUiMaterialTable
        data={masterdatas}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
        detailPanel={detailForAccordion}
      />
    </div>
  );
};

export default ViewMasterData;
