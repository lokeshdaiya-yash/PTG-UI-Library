/**
 * @since April 2022
 * @author Ahilyabai Netaji Pawar
 * @updatedBy Harsha zalawa
 * @desc Web-accessibility Example
 */

/* eslint-disable jsx-a11y/no-access-key */
import './web-accessibility.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CITY_LIST, GENDER_LIST } from '../../mock/mocks';
import {
  PtgUiButton,
  PtgUiInput,
  PtgUiSelect,
  PtgUiCheckbox,
  PtgUiRadio,
  PtgUiDatePicker,
  PtguseFetch
} from '@ptg-ui/react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import { resources } from '../../resource/resource';
import { useTranslation } from 'react-i18next';
/* eslint-disable-next-line */
export interface WebAccessibilityProps {}
export function WebAccessibility(props: WebAccessibilityProps) {
  const [cityList, setCityList]= useState([])
  const [genders, setGenders]= useState([])
  const {data:apiData} = PtguseFetch('http://localhost:1337/api/city-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return{
      value: item.attributes.value,
      name:item.attributes.name,
      label:item.attributes.label
      }
     })
     setCityList(data)
    }
  useEffect(()=>{
    fetchApi()
  },[apiData])
  const {data:apiDataGender} = PtguseFetch('http://localhost:1337/api/gender-lists') as any
  const fetchGenders = ()=>{
    const dataList = apiDataGender.map(item=>{
      return{
      value: item.attributes.value,
      name:item.attributes.name,
      label:item.attributes.label
      }
     })
     setGenders(dataList)
    }
  useEffect(()=>{
    fetchGenders()
  },[apiDataGender])
   const { t } = useTranslation();
  const startRef: any = useRef();

  const [user, setUser]: any = useState({
    isLoading: false,
    username: '',
    email: '',
    gender: 'male',
    city: '',
    password: '',
    selectedCheck: '',
    error: null,
    disable: true,
  });
  const [formErr, setFormErr] = useState({
    username: false,
    email: false,
    gender: false,
    city: false,
    password: false,
  });
  const setState: any = (field: string, value: any) => {
    setUser((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };
  const setErrState: any = (field: string, value: any) => {
    setFormErr((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    console.log('name' + name);
    console.log('value' + value);
    validate(name, value);
    setUser((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  const [date, setDate] = useState(null);
  const dateChange = (date: any) => {
    setDate(date);
  };
  const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheck(event.target.checked);
  };
  const isDisabled: any = () => {
    setState(
      'disable',
      !(
        user.email.length > 0 &&
        user.password.length > 0 &&
        !formErr.email &&
        !formErr.password &&
        user.username.length > 0 &&
        user.city.length > 0 &&
        user.gender.length > 0 &&
        selectedCheck &&
        date
      )
    );
  };
  const validate = (fieldName: string, value: any) => {
    let disabled = false;
    let formErr = false;
    switch (fieldName) {
      case 'username':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'email':
        // eslint-disable-next-line no-case-declarations
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          disabled = true;
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
      case 'city':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'gender':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'password':
        if (value !== '') {
          disabled = true;
        }
        break;
      default: {
        disabled = true;
      }
    }
    setErrState(fieldName, formErr);
  };
  useEffect(() => {
    isDisabled();
  }, [
    user.username,
    user.email,
    date,
    user.city,
    user.gender,
    user.password,
    selectedCheck,
  ]);

  //validate on focus out or blur input
  const handleBlur: any = (e: any) => {
    const { name } = e.target;
    setFormErr((preState: any) => {
      return {
        ...preState,
        [name]: true,
      };
    });
  };

  const navigate = useNavigate();
  const handleRegister = (event: any) => {
    event.preventDefault();
    setState('error', null);
    setState('isLoading', true);
    authClass
      .signUp({
        username: user.value,
        email: user.email,
        DOB: user.date,
        city: user.city,
        gender: user.gender,
        password: user.password,
      })
      .then((response: any) => {
        if (response) {
          setState('isLoading', false);
          localStorage.setItem('token', response);
          navigate('/login');
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className=" signup-wrappper container-fluid p-0 d-flex justify-content-center align-items-center">
      <div className="signup-container">
        <div className="signup-form-wrapperr">
          <div className="form-group">
            <div className="text-center mb-3">
              <h1>{t('WEB_ACCESSIBILITY_TEXT')}</h1>
            </div>
          </div>
          <div className="row access-wrapper">
            <div className="col-12">
              <form className="form-login">
                <div className="login-form w-75 m-auto">
                  <div className="form-container">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="inputUsername"
                            tabIndex={0}
                            aria-label="User Name"
                          >
                            {t('USER_NAME')}
                          </label>
                          <PtgUiInput
                            type="text"
                            name="username"
                            id="inputUsername"
                            data-testid="username"
                            placeholder={t('USER_NAME_PLACEHOLDER')}
                            // accessKey="u"
                            value={user.username}
                            onChange={handleChange}
                            className={`w-100 form-control bg_0 ${
                              formErr.username ? 'border-danger' : ''
                            }`}
                            onBlur={user.username === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="inputEmail"
                            tabIndex={0}
                            aria-label="Email"
                          >
                            {t('LABEL_EMAIL')}
                          </label>
                          <PtgUiInput
                            type="email"
                            name="email"
                            id="inputEmail"
                            data-testid="email"
                            placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                            //accessKey="m"
                            value={user.email}
                            onChange={handleChange}
                            className={`w-100 form-control bg_0 ${
                              formErr.email ? 'border-danger' : ''
                            }`}
                            onBlur={user.email === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="inputDOB"
                            tabIndex={0}
                            aria-label="DOB"
                            id="enterDOB"
                          >
                            {t('DOB')}
                          </label>
                          <PtgUiDatePicker
                            variant="inline"
                            className="date-picker mt-1 w-100"
                            format="MM/dd/yyyy"
                            id="inputDOB"
                            data-testid="inputDOB"
                            placeholder={t('DATE_PLACEHOLDER')}
                            inputVariant="outlined"
                            value={date}
                            onChange={dateChange}
                            //accessKey="c"
                            ariaLabel="date"
                            disableRipple={true}
                            disableTouchRipple={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="inputCity"
                            tabIndex={0}
                            aria-label="city"
                          >
                            {t('CITY')}
                          </label>
                          <PtgUiSelect
                            name="city"
                            list={cityList}
                            id="inputCity"
                            data-testid="city"
                            // className={`sel-placeholder w-100`}
                            className={`sel-placeholder w-100 ${
                              formErr.city ? 'border-danger' : ''
                            }`}
                            onChange={handleChange}
                            value={user.city}
                            aria-label="given-name"
                            onBlur={user.city === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2">
                          <fieldset>
                            <legend className="gender-align">
                              <label tabIndex={0} aria-label="Gender">
                                {t('GENDER')}
                              </label>
                            </legend>

                            <div className="d-flex">
                              <PtgUiRadio
                                name="gender"
                                htmlFor="radioinputForGender"
                                id="radioinputForGender"
                                list={genders}
                                // accessKey="g"
                                onChange={handleChange}
                                value={user.gender}
                              />
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="inputPassword"
                            tabIndex={0}
                            aria-label="Password"
                          >
                            {t('LABEL_PASSWORD')}
                          </label>
                          <PtgUiInput
                            type="password"
                            className={`w-100 form-control bg_0`}
                            value={user.password}
                            onChange={handleChange}
                            name="password"
                            id="inputPassword"
                            data-testid="password"
                            placeholder={t('ENTER_PASSWORD_PLACEHOLDER')}
                            //accessKey="p"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required mb-2">
                          <PtgUiCheckbox
                            label={t('CONFIRM_LABEL')}
                            htmlFor="confirm"
                            id="confirm"
                            name="confirm-registration"
                            data-testid="confirm-registration"
                            checked={selectedCheck}
                            onChange={checkHandler}
                            className={`form-check-input `}
                            //accessKey="i"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <PtgUiButton
                    className="w-100"
                    type="button"
                    onClick={handleRegister}
                    disabled={user.disable}
                    //accessKey="s"
                    aria-label="submit"
                    data-testid="register"
                  >
                    {t('SUBMIT')}
                  </PtgUiButton>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <h2>{t('ACHIEVED_HEADING')}</h2>
                        <ol>
                          <li>{t('ACHIEVED_PNT_ONE')}</li>
                          <li>{t('ACHIEVED_PNT_TWO')}</li>
                          <li>{t('ACHIEVED_PNT_THREE')}</li>
                          <li>{t('ACHIEVED_PNT_FOUR')}</li>
                          <li>{t('ACHIEVED_PNT_FIVE')}</li>
                        </ol>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WebAccessibility;
