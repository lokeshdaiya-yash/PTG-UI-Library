import {
  PtgUiButton,
  PtgUiInput,
  PtgUiMaterialTable,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getSkills, deleteSkill } from '../service/api';
// import { useTranslation } from 'react-i18next';

const Skills = () => {
  const [skills, setSkill] = useState([]);
  // const [isDisabled, setIsDisabled] = useState(true);

  const Columns = [
    { title: 'ID', field: '_id', filtering: false, width: '20%' },
    { title: 'name', field: 'name', filtering: false, width: '20%' },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: 100,
      render: (skill) => (
        <div className="masterdataBtn">
          <PtgUiButton onClick={() => deleteSkillDetails(skill._id)}>
            Delete
          </PtgUiButton>
          <Link to={`/editskill/${skill._id}`}>
            <PtgUiButton component={Link}>Edit</PtgUiButton>
          </Link>
        </div>
      ),
    },
  ];

  const filterValue = [
    { name: 'id', operator: 'id', type: 'string', value: '' },
    { name: 'name', operator: 'name', type: 'string', value: '' },
  ];

  useEffect(() => {
    getAllSkills();
  }, []);

  const getAllSkills = async () => {
    let response = await getSkills();
    setSkill(response.data);
  };

  const deleteSkillDetails = async (id) => {
    await deleteSkill(id);
    getAllSkills();
  };
  // =================form validation===========================

  // const { t } = useTranslation();
  // const [step, setStep] = useState(0);
  // const [details, setDetails] = useState({
  //   firstName: '',
  //   lastName: '',
  //   userName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   Greeting: '',
  //   Gender: '',
  //   phone: '',
  //   zipCode: '',
  //   state: '',
  //   homeAddress: '',
  //   country: '',
  //   cardType: '',
  //   cardNumber: '',
  //   cvc: '',
  //   expiration: '',
  //   cardHolder: '',
  // });
  // const [error, setError] = useState({
  //   firstName: false,
  //   lastName: false,
  //   userName: false,
  //   email: false,
  //   password: false,
  //   confirmPassword: false,
  //   Greeting: false,
  //   Gender: false,
  //   phone: false,
  //   zipCode: false,
  //   state: false,
  //   homeAddress: false,
  //   country: false,
  //   cardType: false,
  //   cardNumber: false,
  //   cvc: false,
  //   expiration: false,
  //   cardHolder: false,
  // });

  // const [showCodeOne, setShowCodeOne] = useState(false);

  // const ShowExampleCode = () => {
  //   if (!showCodeOne) {
  //     setShowCodeOne(true);
  //   } else {
  //     setShowCodeOne(false);
  //   }
  // };

  // reset Form
  // const resetForm = () => {
  //   setStep(0);
  //   setDetails({
  //     firstName: '',
  //     lastName: '',
  //     userName: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     Greeting: '',
  //     Gender: '',
  //     phone: '',
  //     zipCode: '',
  //     state: '',
  //     homeAddress: '',
  //     country: '',
  //     cardType: '',
  //     cardNumber: '',
  //     cvc: '',
  //     expiration: '',
  //     cardHolder: '',
  //   });
  // };

  // // submit form
  // const submitForm = () => {
  //   console.log({ details });
  //   resetForm();
  // };

  // // on blur method
  // const handleBlur = (event) => {
  //   if (!event.target.value) {
  //     setError({ ...error, [event.target.name]: true });
  //   }
  // };

  // // validating different fields
  // const validate = (field, value) => {
  //   let formError = error;
  //   if (!value) {
  //     formError = { ...formError, [field]: 'field is required' };
  //   } else {
  //     formError = { ...formError, [field]: false };

  //     // password validation
  //     if (
  //       (field === 'confirmPassword' && details.password !== value) ||
  //       (field === 'password' &&
  //         details.confirmPassword !== value &&
  //         details.confirmPassword)
  //     ) {
  //       formError = {
  //         ...formError,
  //         password: true,
  //         confirmPassword: "passwords don't match",
  //       };
  //     } else if (
  //       (field === 'confirmPassword' && details.password === value) ||
  //       (field === 'password' && details.confirmPassword === value)
  //     ) {
  //       formError = { ...formError, password: false, confirmPassword: false };
  //     }

  //     // email validation
  //     else if (field === 'email') {
  //       const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //       if (value === '' || value ? true : false !== regexEmail.test(value)) {
  //         if (!regexEmail.test(value)) {
  //           formError = { ...formError, [field]: true };
  //         }
  //       }
  //     }

  //     // phone validation
  //     else if (field === 'phone') {
  //       const regexPhone = /^\d{10}$/;
  //       if (value === '' || value ? true : false !== regexPhone.test(value)) {
  //         if (!regexPhone.test(value)) {
  //           formError = { ...formError, [field]: true };
  //         }
  //       }
  //     }

  //     // card validaion
  //     else if (field === 'cardNumber') {
  //       const regexCardNumber = /^\d{16}$/;
  //       if (
  //         value === '' || value ? true : false !== regexCardNumber.test(value)
  //       ) {
  //         if (!regexCardNumber.test(value)) {
  //           formError = { ...formError, [field]: true };
  //         }
  //       }
  //     }
  //     // cvc validation
  //     else if (field === 'cvc') {
  //       const regexCvc = /^\d{3}$/;
  //       if (value === '' || value ? true : false !== regexCvc.test(value)) {
  //         if (!regexCvc.test(value)) {
  //           formError = { ...formError, [field]: true };
  //         }
  //       }
  //     }
  //     // pincode validation
  //     else if (field === 'zipCode') {
  //       const regexZipCode = /^\d{6}$/;
  //       if (value === '' || value ? true : false !== regexZipCode.test(value)) {
  //         if (!regexZipCode.test(value)) {
  //           formError = { ...formError, [field]: true };
  //         }
  //       }
  //     }
  //   }
  //   setError(formError);
  // };

  // // handleChange
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setDetails({ ...details, [name]: value });
  //   validate(name, value);
  // };

  // function showNext() {
  //   setStep(+step + 1);
  // }
  // const showPrevious = () => {
  //   setStep(+step - 1);
  // };

  // useEffect(() => {
  //   setIsDisabled(
  //     !(
  //       details.userName.length > 0 &&
  //       details.password.length > 0 &&
  //       details.confirmPassword.length > 0 &&
  //       details.phone &&
  //       details.email &&
  //       !error.userName &&
  //       !error.password &&
  //       !error.confirmPassword &&
  //       !error.phone &&
  //       !error.email
  //     )
  //   );
  // }, [
  //   details.userName,
  //   details.password,
  //   details.confirmPassword,
  //   details.phone,
  //   details.email,

  //   error.userName,
  //   error.password,
  //   error.confirmPassword,
  //   error.email,
  //   error.phone,
  // ]);

  // useEffect(() => {
  //   setIsDisabled(
  //     !(
  //       details.Greeting.length &&
  //       details.Gender.length &&
  //       details.firstName &&
  //       details.lastName &&
  //       details.email &&
  //       !error.email &&
  //       details.phone &&
  //       !error.phone &&
  //       details.zipCode &&
  //       !error.zipCode &&
  //       details.state &&
  //       details.homeAddress &&
  //       details.country
  //     )
  //   );
  // }, [details, error]);

  return (
    <div className="viewMastertable ">
      {/* <NavLink to="/addSkill">Add Skills</NavLink> */}
      <PtgUiButton>
        <NavLink to="/addSkill">Add Skills123</NavLink>
      </PtgUiButton>

      <PtgUiMaterialTable
        data={skills}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
        filterValue={filterValue}
      />

      {/* <table className="viewMastertable">
        <tr>
          <th>id</th>
          <th>skill Name</th>
          <th>Action</th>
        </tr>

        <tbody>
          {skills.map((skill) => (
            <tr key={skill._id}>
              <td>{skill._id}</td>
              <td>{skill.name}</td>
              <td>
                <button LinkComponent={Link} to={`/editskill/${skill._id}`}>
                  Edit
                </button>
                <a href="/editskill/${skill._id"> Edit Skills</a>
                <PtgUiButton onClick={() => deleteSkillDetails(skill._id)}>
                  Delete
                </PtgUiButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* ==================================== validation form ================================= */}
{/* 
      <div className="ptg-table-addData">
        <label htmlFor="inputUsername"> USER_NAME </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="text"
          name="userName"
          id="inputUsername"
          value={details.userName}
          onChange={handleChange}
        />

        <label htmlFor="password"> LABEL_PASSWORD </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="password"
          name="password"
          id="password"
          value={details.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword"> CONFIRM_PASSWORD_LABEL </label>
        <PtgUiInput
          className={'w-100 form-control bg_0 '}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={details.confirmPassword}
          onChange={handleChange}
        />
        {error.confirmPassword && (
          <span className="form-text text-danger">{error.confirmPassword}</span>
        )}

       
        <label htmlFor="inputEmail">{t('LABEL_EMAIL')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.email ? 'border-danger' : ''
          }`}
          type="text"
          name="email"
          id="inputEmail"
          value={details.email}
          onChange={handleChange}
        />
        
        <label htmlFor="inputPhone">{t('PHONE')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.phone ? 'border-danger' : ''
          }`}
          type="phone"
          name="phone"
          id="inputPhone"
          value={details.phone}
          onChange={handleChange}
        />
      

        <PtgUiButton
          className="w-100 mt-2"
          type="button"
          onClick={showNext}
          disabled={isDisabled}
          // accessKey="s"
          aria-label="next"
          data-testid="next"
        >
          {' '}
          NEXT{' '}
        </PtgUiButton>
      </div> */}

      {/* ==============accordion ============================== */}
      {/* <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Skill
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="viewMastertable">
                <PtgUiMaterialTable
                  data={skills}
                  columns={Columns}
                  filtering={true}
                  paging={true}
                  paginationPosition={'bottom'}
                  grouping={true}
                  filterValue={filterValue}
                />
              </div>

             
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Designation
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Project
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
