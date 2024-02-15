import React, { useState, useEffect } from 'react';
import './ViewMasterData.scss';
import { getMasterdata, deleteMasterdata } from '../../service/api';
import { Link } from 'react-router-dom';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import { PtgModal } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import AddMasterdata from '../addMasterData/AddMasterData';

const ViewMasterdata = () => {
    const [masterdatas, setMasterdata] = useState([]);
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getMasterdata, deleteMasterdata } from '../../service/api';
// import '../app.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PtgUiInput, PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';


const ViewMasterdata = () => {
  const [masterdatas, setMasterdata] = useState([]);

//     useEffect(() => {
//         getAllUsers();
//     }, []);

//     const getAllUsers = async () => {
//         const response = await getMasterdata();
//         setMasterdata(response?.data);
//     };
//     const deleteUsersDetails = async (id: any) => {
//         await deleteMasterdata(id);
//         getAllUsers();
//     }
//     const ActionButton = (props) => {
//         return (
//             <button>Text</button>
//         )
//     }

//     const Columns = [
//         { title: 'name', field: 'name', filtering: false, width: '20%' },
//         { title: 'clientInterviews', field: 'clientInterviews', filtering: false },
//         { title: 'poolStartDate', field: 'poolStartDate' },
//         { title: 'poolEndDate', field: 'poolEndDate', filtering: false },
//         { title: 'ageing', field: 'ageing', filtering: false },
//         { title: 'status', field: 'status', filtering: false },
//         { title: 'skills', field: 'skills', filtering: false },
//         { title: 'yearsofExp', field: 'yearsofExp', filtering: false },
//         { title: 'bands', field: 'bands', filtering: false },
//         { title: 'comments', field: 'comments', filtering: false },
//         { title: 'clientName', field: 'clientName', filtering: false },
//         { field: 'Action', cellRenderer: ActionButton, minWidth: 100 },
//         // { title: 'action', field: '', filtering: false, cellRenderer: <PtgUiButton  type="submit"variant="primary" onClick={()=>deleteUsersDetails(masterdatas._id)} className="btn-sm">Delete</PtgUiButton>  },
//         //   <PtgUiButton
//         //   type="submit"
//         //   variant="primary"
//         //   data-testid="handleSubmit"
//         //   onClick={handleSubmit}
//         //   // data-testid="forgotButton"
//         //   disabled={values.btnDisable}
//         // >
//     ];

//     const filterValue = [
//         { name: 'name', operator: 'name', type: 'string', value: '' },
//         { name: 'skills', operator: 'skills', type: 'string', value: '' },
//         { name: 'clientName', operator: 'clientName', type: 'string', value: '' },
//     ];

//     return (
//         <div className="viewMastertable">
//             <PtgUiMaterialTable
//                 data={masterdatas}
//                 columns={Columns}
//                 filtering={true}
//                 paging={true}
//                 paginationPosition={'bottom'}
//                 grouping={true}
//                 // filterValue={filterValue}
//                 // actions={[
//                 //   {
//                 //     icon: () =>  <PtgUiButton
//                 //                   className="btn-sm">
//                 //                   text
//                 //                   </PtgUiButton>,
//                 //         tooltip: 'Click Here',
//                 //         onClick: (event, rowData) => {
//                 //         console.log(event, rowData);
//                 //         alert("Button Clicked");
//                 //     }
//                 //   }
//                 // ]}

//                 actions={[
//                     {
//                         icon: () => <PtgUiButton
//                             className="btn-sm">
//                             {('CLICK_HERE')}
//                         </PtgUiButton>,
//                         tooltip: 'Click Here',
//                         onClick: (event, rowData) => {
//                             console.log(event, rowData);
//                             alert("Button Clicked");

//                         }
//                     }
//                 ]}

//             />

//             {/* {masterdatas.map((masterdata) => (
//             <tr key={masterdata._id}>
            
//               <button LinkComponent={Link} to={`/edit/${masterdata._id}`}>Edit</button>
//               <PtgUiButton onClick={()=>deleteUsersDetails(masterdata._id)}>Delete</PtgUiButton>
//               </tr> */}


//         </div>
//     );
// };

// export default ViewMasterData;
