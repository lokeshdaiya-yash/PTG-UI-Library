// import { PtgUiButton } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMasterdata, deleteMasterdata } from '../../service/api';
import '../../app.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

import { PtgUiInput, PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
// import { AggridButton } from './aggrid-button';

const ViewMasterData = () => {
    const [masterdatas, setMasterdata] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getMasterdata();
        setMasterdata(response?.data);
    };
    const deleteUsersDetails = async (id: any) => {
        await deleteMasterdata(id);
        getAllUsers();
    }
    const ActionButton = (props) => {
        return (
            <button>Text</button>
        )
    }

    const Columns:any = [
        // { title: 'name', field: 'memberName', filtering: false, width: '10%' },
    { title: 'Id', field: '_id', filtering: false },
    { title: 'employeeId', field: 'employeeId', filtering: false },
    { title: 'emailId', field: 'emailId', filtering: false },
    { title: 'memberName', field: 'memberName', filtering: false },
    // { title: 'bandList', field: 'bandList', filtering: false },
    // { title: 'compatancy', field: 'compatancy', filtering: false },
    // { title: 'designation', field: 'designation', filtering: false },


    // { title: 'poolStartDate', field: 'poolStartDate'},
    // { title: 'status', field: 'status', filtering: false },
    // { title: 'skills', field: 'skills', filtering: false },
    // { title: 'yearsofExp', field: 'yearsofExp', filtering: false },
    // { title: 'comments', field: 'comments', filtering: false },
    // { title: 'clientName', field: 'clientName', filtering: false },
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
  
            <Link to={`/editMasterdata/${masterdata._id}`}>
              <PtgUiButton >Edit</PtgUiButton>
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
                // filterValue={filterValue}
                // actions={[
                //   {
                //     icon: () =>  <PtgUiButton
                //                   className="btn-sm">
                //                   text
                //                   </PtgUiButton>,
                //         tooltip: 'Click Here',
                //         onClick: (event, rowData) => {
                //         console.log(event, rowData);
                //         alert("Button Clicked");
                //     }
                //   }
                // ]}

                // actions={[
                //     {
                //         icon: () => <PtgUiButton
                //             className="btn-sm">
                //             {('CLICK_HERE')}
                //         </PtgUiButton>,
                //         tooltip: 'Click Here',
                //         onClick: (event, rowData) => {
                //             console.log(event, rowData);
                //             alert("Button Clicked");

                //         }
                //     }
                // ]}

            />

            {/* {masterdatas.map((masterdata) => (
            <tr key={masterdata._id}>
            
              <button LinkComponent={Link} to={`/edit/${masterdata._id}`}>Edit</button>
              <PtgUiButton onClick={()=>deleteUsersDetails(masterdata._id)}>Delete</PtgUiButton>
              </tr> */}


        </div>
    );
};

export default ViewMasterData;
