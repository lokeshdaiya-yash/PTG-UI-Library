import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addProject,
  editProject,
  getSingleProjectData,
} from '../../service/project-api';
import toaster from '../../service/toaster';
import {
  PtgUiButton,
  PtgUiCalendar,
  PtgUiInput,
  PtgUiMultiSelectbox,
  PtgUiTextArea,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';
import { getMasterdata } from '../../service/masterData-api';

const initialFormValue = {
  projectName: '',
  description: '',
  status: '',
  projectStartDate: '',
  projectEndDate: '',
  nameOfResorces: '',
};

const AddProject = (props: any) => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [date, setStartDate] = useState({ startDate: null });
  const formErrorsObj: any = {};
  const [formErrors, setFormErrors] = useState(formErrorsObj);
  const [isSubmit, setIsSubmit] = useState(false);
  const [resorce, setResorce] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getResorceList();
    if (id) {
      getPrject();
    }
  }, []);

  // values handlers
  const selectHandler = (e: any, field) => {
    setFormValue({ ...formValue, [field]: e[0].value });
  };

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const getResorceList = async () => {
    const response = await getMasterdata();
    const masterData = response?.data;
    const resourcesName = masterData.map((emp) => {
      return { name: emp.name, value: emp.name, label: emp.name };
    });
    // console.log('resourcesName', resourcesName);
    setResorce(resourcesName);
    // console.log('masterData', masterData);
  };

  const getPrject = async () => {
    const response = await getSingleProjectData(id);
    const projectDetails = response?.data;

    setFormValue({
      ...formValue,
      projectName: projectDetails.projectName,
      description: projectDetails.description,
      //   poolStartDate: setDateState(userDetails.poolStartDate, 'startDate'),
      //   poolReleaseDate: setReleaseState(userDetails.poolReleaseDate, 'endDate'),
      projectStartDate: projectDetails.projectStartDate,
      status: projectDetails.status,
      projectEndDate: projectDetails.projectEndDate,
      nameOfResorces: projectDetails.nameOfResorces,
    });
  };

  // select date
  const setDateState: any = (selectedDate: any, field: string) => {
    setStartDate((preState: any) => {
      return {
        ...preState,
        [field]: new Date(selectedDate),
      };
    });
  };

  const startDateProp = {
    selected: date.startDate,
    className: 'form-control w-100',
    onChange: (date: any) => {
      setDateState(date, 'startDate');
      setFormValue({ ...formValue, projectStartDate: date });
    },
  };

  const validateFormFields = (values): any => {
    const errors: any = {};
    if (!values.projectName) {
      errors.projectName = 'Project name is required!';
    }
    if (!values.nameOfResorces) {
      errors.nameOfResorces = 'Resource name is required!';
    }
    if (!values.projectStartDate) {
      errors.projectStartDate = 'Project start date is required!';
    }
    if (!values.description) {
      errors.description = 'Description is required!';
    }
    return errors;
  };

  const checkFormValues = (data: any) => {
    if (id !== undefined) {
      return Object.values(data).every((value) => value !== '');
    } else {
      const { projectEndDate, status, ...rest } = formValue;
      return Object.values(rest).every((value) => value !== '');
    }
  };

  // submit forms data
  const submitProjectDetails = async () => {
    setFormErrors(validateFormFields(formValue));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && checkFormValues(formValue)) {
      if (!id) {
        await addProject(formValue);
      } else {
        await editProject(formValue, id).then((res) => {
          toaster.success(res?.data.message);
        });
      }
      navigate('/projects');
    }
  };

  const cancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="ptg-table-addData masterdata-form-container">
        {id === undefined ? <h4>Add Project</h4> : <h4>Update Project</h4>}
        {/* ================== Project Name and description========================== */}

        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="projectName">Project Name </label>
            <PtgUiInput
              className={'form-control '}
              type="text"
              name="projectName"
              id="projectName"
              placeholder="Enter Project Name"
              value={formValue.projectName}
              onChange={(e) => changeHandler(e)}
            />
            <p className="error">{formErrors.projectName}</p>
          </div>
          <div className="masterdatafield-box">
            <label htmlFor="nameOfResorces"> Name Of Resorces </label>
            <PtgUiMultiSelectbox
              name="nameOfResorces"
              list={resorce}
              onSelect={(e) => selectHandler(e, 'nameOfResorces')}
              showCheckbox={false}
              singleSelect={true}
              selectedValues={[{ label: formValue.nameOfResorces }]}
            />
            <p className="error">{formErrors.nameOfResorces}</p>
          </div>
        </div>

        {/* ================== Pool start date and Band========================== */}
        <div className="masterdatafield">
          <div className="masterdatafield-box">
            <label htmlFor="projectStartDate"> Project Start date </label>
            {id !== undefined ? (
              <PtgUiCalendar {...startDateProp} disabled />
            ) : (
              <PtgUiCalendar {...startDateProp} />
            )}
            <p className="error">{formErrors.projectStartDate}</p>
          </div>
          <div className="masterdatafield-box">
            <label htmlFor="description"> Project Description </label>
            <PtgUiTextArea
              rows="1"
              name="description"
              id="description"
              value={formValue.description}
              disabled={id !== undefined ? true : false}
              onChange={(e) => changeHandler(e)}
            />
            <p className="error">{formErrors.description}</p>
          </div>
        </div>

        {/* ================== status and name Of Resorces========================== */}

        <div className="masterdatafield">
          {id && (
            <div className="masterdatafield-box">
              <label htmlFor="projectEndDate">Project end date </label>
              {/* {id !== undefined ? (
              <PtgUiCalendar {...startDateProp} disabled />
            ) : ( */}
              <PtgUiCalendar {...startDateProp} />
              {/* )} */}
              <p className="error">{formErrors.projectEndDate}</p>
            </div>
          )}
          {false && (
            <div className="masterdatafield-box">
              <label htmlFor="status"> Status </label>
              <PtgUiInput
                className={'form-control '}
                type="text"
                name="status"
                id="status"
                placeholder="Enter Status"
                value={formValue.status}
                onChange={(e) => changeHandler(e)}
              />
              <p className="error">{formErrors.projectName}</p>
            </div>
          )}
        </div>

        <div className="mt-20 action-button-container">
          <PtgUiButton
            className="btn btn-secondary"
            type="button"
            onClick={() => cancel()}
            aria-label="cancel"
            data-testid="cancel"
          >
            Cancel
          </PtgUiButton>

          <PtgUiButton
            className="ml-20 btn btn-primay"
            type="button"
            onClick={() => submitProjectDetails()}
            aria-label="save"
            data-testid="save"
          >
            {id ? 'Update' : 'Save'}
          </PtgUiButton>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
