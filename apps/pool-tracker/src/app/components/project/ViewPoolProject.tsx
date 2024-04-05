// import { PtgUiButton } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getProjects,
  deleteProject,
  getSingleProjectData,
} from '../../service/project-api';
import '../../app.module.scss';
import './PoolProject.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PtgUiInput,
  PtgUiMaterialTable,
  PtgUiButton,
  PtgUiCheckbox,
} from '@ptg-ui/react';
// import AddProject from './AddProject';
import toaster from '../../service/toaster';

const ViewPoolProject = () => {
  const [project, setProject] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProjects();
  },[]);

  const getAllProjects = async () => {
    const response = await getProjects();
    setProject(response?.data);
  };

  const deleteProjectDetails = async (id: any) => {
    await deleteProject(id).then((res) => {
      toaster.success(res?.data.message);
    });

    getAllProjects();
  };

  const handleNavigate = () => {
    navigate('/addProject');
  };

  const Columns = [
    {
      title: 'ProjectName',
      field: 'projectName',
      filtering: false,
      width: '20%',
    },
    {
      title: 'description',
      field: 'description',
      filtering: false,
    },
    {
      title: 'status',
      field: 'status',
      filtering: false,
    },
    {
      title: 'projectStartDate',
      field: 'projectStartDate',
      filtering: false,
    },
    {
      title: 'projectEndDate',
      field: 'projectEndDate',
      filtering: false,
    },
    {
      title: 'nameOfResorces',
      field: 'nameOfResorces',
      filtering: false,
    },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: '20%',
      render: (project) => (
        <div className="masterdataBtn">
          <div className="masterdataBtn table-action-button">
            <Link to={`/addProject/${project._id}`}>
              <i className="fa-solid fa-pencil cursor-pointer"></i>
            </Link>
          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => deleteProjectDetails(project._id)}
          >
            
          </i>
          {/* <PtgUiAlert message={('ERROR_MSG')} /> */}
        </div>
        </div>
      ),
    },
  ];

  return (
    <div className="viewMastertable viewTable">
     <div className="addButton">
        <PtgUiButton className="btnColor" onClick={handleNavigate}>
          New Project +
        </PtgUiButton>
      </div>
      <PtgUiMaterialTable
        data={project}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
      />
    </div>
  );
};

export default ViewPoolProject;
