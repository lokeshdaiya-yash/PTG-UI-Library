import React, { useState, useEffect } from 'react';
import { getMasterdata, deleteMasterdata } from '../service/api';
import '../app.module.scss';
import { Link } from 'react-router-dom';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import { dateFormat } from 'highcharts';

const ViewMasterdata = () => {
  const [masterdatas, setMasterdata] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getMasterdata();
    setMasterdata(response?.data);
  };
  const deleteUsersDetails = async (id) => {
    await deleteMasterdata(id);
    alert('Do You Want To Delete');
    getAllUsers();
  };
  const ActionButton = (props) => {
    return <button>Text</button>;
  };

  const Columns = [
    { title: 'name', field: 'name', filtering: false, width: '10%' },
    { title: 'clientInterviews', field: 'clientInterviews', filtering: false },
    { title: 'poolStartDate', field: 'poolStartDate'},
    { title: 'status', field: 'status', filtering: false },
    { title: 'skills', field: 'skills', filtering: false },
    { title: 'yearsofExp', field: 'yearsofExp', filtering: false },
    { title: 'bands', field: 'bands', filtering: false },
    { title: 'competency', field: 'competency', filtering: false },
    { title: 'comments', field: 'comments', filtering: false },
    { title: 'clientName', field: 'clientName', filtering: false },
    { title: 'designations', field: 'designations', filtering: false },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: 100,
      render: (masterdata) => (
        <div className="masterdataBtn">
          <PtgUiButton onClick={() => deleteUsersDetails(masterdata._id)}>
            Delete
          </PtgUiButton>

          <Link to={`/editMasterData/${masterdata._id}`}>
            <PtgUiButton component={Link}>Edit</PtgUiButton>
          </Link>
        </div>
      ),
    },
  ];

  const filterValue = [
    { name: 'name', operator: 'name', type: 'string', value: '' },
    { name: 'skills', operator: 'skills', type: 'string', value: '' },
    { name: 'clientName', operator: 'clientName', type: 'string', value: '' },
  ];

  return (
    <div className="viewMastertable">
      <PtgUiMaterialTable
        data={masterdatas}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
        filterValue={filterValue}
        actions={[
          {
            icon: () => (
              <PtgUiButton className="btn-sm">{'CLICK_HERE'}</PtgUiButton>
            ),
            tooltip: 'Click Here',
            onClick: (event, rowData) => {
              console.log(event, rowData);
              alert('Button Clicked');
            },
          },
        ]}
      />
    </div>
  );
};

export default ViewMasterdata;