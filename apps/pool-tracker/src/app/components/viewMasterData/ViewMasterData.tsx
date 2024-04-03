// import { PtgUiButton } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getMasterdata,
  deleteMasterdata,
  getData,
} from '../../service/masterData-api';
import '../../app.module.scss';
import './ViewMasterData.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PtgUiInput,
  PtgUiMaterialTable,
  PtgUiButton,
  PtgUiCheckbox,
} from '@ptg-ui/react';
import { PtgModal } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import AddMasterdata from '../addMasterData/AddMasterData';
import EditMasterData from './EditMasterData';
import { PtgUiAlert } from '@ptg-ui/react';

const ViewMasterData = () => {
  const [masterdatas, setMasterdata] = useState<any>([]);
  const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
  let poolEmployees: any = [];
  let poolReleaseEmployees: any = [];
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, [selectedCheck]);

  const getAllUsers = async () => {
    const response = await getMasterdata();
    poolEmployees = response?.data.filter((emp) => !emp.poolReleaseDate);
    poolReleaseEmployees = response?.data.filter((emp) => emp.poolReleaseDate);
    // debugger;
    if (!selectedCheck) {
      setMasterdata(poolEmployees);
    } else {
      setMasterdata(poolReleaseEmployees);
    }

    const bandCount = {};
    response?.data.forEach((element) => {
      const band = element.band;
      bandCount[band] = (bandCount[band] || 0) + 1;
    });
    console.log('band count', bandCount);
  };

  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheck(event.target.checked);
    // debugger;
    if (event.target.checked) {
      setMasterdata(poolReleaseEmployees);
    } else {
      setMasterdata(poolEmployees);
    }
  };

  const deleteUsersDetails = async (id: any) => {
    await deleteMasterdata(id);
    alert('Do You Want To Delete');
    getAllUsers();
  };

  const handleNavigate = () => {
    navigate('/addMasterData');
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

  const Columns: any = [
    { title: 'Name', field: 'name', filtering: false },
    { title: 'EmailId', field: 'emailId', filtering: false },
    { title: 'Band', field: 'band', filtering: false },
    { title: 'Competency', field: 'competency', filtering: false },
    { title: 'Designations', field: 'designations', filtering: false },
    {
      title: 'Pool StartDate',
      field: 'poolStartDate',
      render: (rowData: any) => {
        const poolStartDate = new Date(rowData.poolStartDate);

        const day = poolStartDate.getDate();
        const month = poolStartDate.getMonth() + 1;
        const year = poolStartDate.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate;
      },
    },
    {
      title: 'skills',
      field: 'skills',
      filtering: false,
      render: (masterdata: any) =>
        masterdata.skills.map((skill) => ' ' + skill.name).toString(),
    },

    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: 100,
      render: (masterdata: any) => (
        <div className="masterdataBtn">
          <div className="masterdataBtn table-action-button">
            <Link to={`/addMasterData/${masterdata._id}`}>
              <i className="fa-solid fa-pencil cursor-pointer"></i>
            </Link>
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
    const poolReleaseDate = new Date(masterdata.rowData.poolReleaseDate);
    return (
      <div className="ms-4 me-4 mt-2 mb-2 tableAccordion">
        <div className="row">
          <div className="col-3">
            <strong>Name</strong>
            <p className="mt-3"> {masterdata.rowData.name}</p>
          </div>
          <div className="col-3">
            <strong>project Name</strong>
            <p className="mt-3"> Interview Screening</p>
          </div>
          <div className="col-3">
            <strong>Location</strong>
            <p className="mt-3"> {masterdata.rowData.locations}</p>
          </div>
          {selectedCheck && (
            <div className="col-3">
              <strong>Pool Release Date</strong>
              <p className="mt-3"> {poolReleaseDate.toString()}</p>
            </div>
          )}
          <div className="col-3">
            <strong>Comments</strong>
            <p className="mt-3"> {masterdata.rowData.comments}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="viewMastertable">
      <div className="addButton">
        <PtgUiButton className="btnColor" onClick={handleNavigate}>
          New Master Data +
        </PtgUiButton>

        <PtgUiCheckbox
          label={'Show Released Employess'}
          htmlFor="Show Released Employess"
          checked={selectedCheck}
          onChange={checkHandler}
          className={`form-check-input`}
          name="Show Released Employess"
          id="Show Released Employess"
          aria-label="Show Released Employess"
        />
      </div>

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
