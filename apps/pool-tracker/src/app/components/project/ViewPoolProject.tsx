import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../../service/project-api';
import '../../app.module.scss';
import './PoolProject.scss';
import { useNavigate } from 'react-router-dom';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import toaster from '../../service/toaster';

const ViewPoolProject = () => {
  const [project, setProject] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    const response = await getProjects();
    const projectData = response?.data;
    projectData.map((project) => {
      if (project.projectStartDate && project.projectEndDate) {
        project.status = 'Completed';
      } else {
        project.status = 'Ongoing';
      }
      return project;
    });
    setProject(projectData);
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

  const columns = [
    {
      title: 'Project Name',
      field: 'projectName',
      filtering: false,
      width: '10%',
    },
    {
      title: 'Description',
      field: 'description',
      filtering: false,
      width: '10%',
    },
    {
      title: 'Status',
      field: 'status',
      filtering: false,
      width: '5%',
    },
    {
      title: 'Project Start Date',
      field: 'projectStartDate',
      filtering: false,
      width: '5%',
    },
    {
      title: 'Project End Date',
      field: 'projectEndDate',
      filtering: false,
      width: '10%',
    },
    {
      title: 'Name Of Resorces',
      field: 'nameOfResorces',
      filtering: false,
      width: '20%',
    },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: '5%',
      render: (project) => (
        <div className="masterdataBtn">
          <div className="masterdataBtn table-action-button">
            <Link to={`/addProject/${project._id}`}>
              <i className="fa-solid fa-pencil cursor-pointer"></i>
            </Link>
            <i
              className="fa-solid fa-trash cursor-pointer"
              onClick={() => deleteProjectDetails(project._id)}
            ></i>
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
        columns={columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
      />
    </div>
  );
};

export default ViewPoolProject;
