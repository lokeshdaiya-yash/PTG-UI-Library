/**
 * @since March 2022
 * @author Ankit patidar
 * @desc Reusable Login Component
 *
 */

import './Login.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { authClass } from '../services/auth.service';
import ForgotPassword from '../forgotpassword/ForgotPassword';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../../common/showCode/showCodeComponent';
import {
  PtgUiButton,
  PtgUiInput,
  PtgUiLoading,
  PtgUiAlert,
} from '@ptg-ui/react';
import msalInstance from '../msal';
import { acquireToken } from '../msal';

export interface PtgUiLoginProps {}

export function PtgUiLogin(props: PtgUiLoginProps) {
  const [showCode, setShowCode] = useState(false);

  const { t } = useTranslation();
  const [user, setUser]: any = useState({
    isLoading: false,
    isAlert: false,
    email: '',
    password: '',
    error: null,
    disable: true,
  });

  const [formErr, setFormErr] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

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

  const isDisabled: any = () => {
    setState(
      'disable',
      !(
        user.email.length > 0 &&
        user.password.length > 0 &&
        !formErr.email &&
        !formErr.password
      )
    );
  };
  //validate email and password
  const validate = (fieldName: string, value: any) => {
    let formErr = false;
    switch (fieldName) {
      case 'email':
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
      case 'password':
        if (value === '') {
          formErr = true;
        }
        break;
      default: {
      }
    }

    setErrState(fieldName, formErr);
  };

  //generic function for all input field
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    validate(name, value);
    setUser((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

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

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  useEffect(() => {
    isDisabled();
  }, [user.email, user.password]);

  const componentCode = `
    import {
      PtgUiButton,
      PtgUiInput,
      PtgUiLoading,
      PtgUiAlert,
    } from '@ptg-ui/react';

    const [user, setUser]: any = useState({
      isLoading: false,
      isAlert: false,
      email: '',
      password: '',
      error: null,
      disable: true,
    });

    const [formErr, setFormErr] = useState({
      email: false,
      password: false,
    });

    useEffect(() => {
      isDisabled();
    }, [user.email, user.password]);

    const isDisabled: any = () => {
      setState(
        'disable',
        !(
          user.email.length > 0 &&
          user.password.length > 0 &&
          !formErr.email &&
          !formErr.password
        )
      );
    };

    const setErrState: any = (field: string, value: any) => {
      setFormErr((preState: any) => {
        return {
          ...preState,
          [field]: value,
        };
      });
    };

    const handleBlur: any = (e: any) => {
      const { name } = e.target;
      setFormErr((preState: any) => {
        return {
          ...preState,
          [name]: true,
        };
      });
    };

    const setState: any = (field: string, value: any) => {
      setUser((preState: any) => {
        return {
          ...preState,
          [field]: value,
        };
      });
    };

    const validate = (fieldName: string, value: any) => {
    let formErr = false;
    switch (fieldName) {
      case 'email':
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
      case 'password':
        if (value === '') {
          formErr = true;
        }
        break;
      default: {
      }
    }

    setErrState(fieldName, formErr);
  };

  //Forgot password functionality
  const intialState = {
    show: false,
    email: '',
    btnDisable: false,
    showMessage: { show: false, type: '', message: '' },
  };

  const [values, setValues] = useState(intialState);

  const handleClose = () => setState('show', false);

  const handleShow = () => {
    setValues(intialState);
    setState('show', true);
  };

  const validate = (fieldName: string, value: any) => {
    let disabled = false;
    let formErr = false;
    switch (fieldName) {
      case 'email':
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          disabled = true;
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
    }

    setState('disable', disabled);
    setErrState(fieldName, formErr);
  };

  
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    validate(name, value);
    setValues((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  
  const handleBlur: any = (e: any) => {
    const { name } = e.target;
    setFormErr((preState: any) => {
      return {
        ...preState,
        [name]: true,
      };
    });
  };

  `;

  const cssCode = `
    .login-wrapper {
    width: auto;
    height: auto;
    background: none;
    overflow: hidden;

    .login-form-wrapper {
      background: white;
      padding: 8% 10%;
      width: 35vw;
      .login-logo {
        img {
          width: 80%;
        }
      }
      .signup-btn,
      .forgot-password {
        font-size: 0.875rem;
        color: $main;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      .input-group {
        ::ng-deep {
          input {
            border-radius: 2px !important;
            padding-left: 40px !important;
          }
        }
      }

      .input-group-prepend {
        display: flex;
        position: absolute;
        z-index: 100;
        top: 50%;
        left: 10px;
        transform: translatey(-50%);
      }

      .login-user-icon,
      .login-password-icon {
        background: url('/assets/user_icn.png');
        width: 17px;
        height: 23px;
        display: block;
        background-size: 100% !important;
        background-position: center center !important;
        background-repeat: no-repeat !important;
      }

      .login-password-icon {
        background: url('/assets/password_icn.png');
      }
    }
  }

  .login-logo{
    width : 70%;
    height: 80px;
    margin-left: 12%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    .login-wrapper {
      .login-form-wrapper {
        width: 80vw;
        .login-logo {
          img {
            width: 70%;
          }
        }
      }
    }
  }
  @media (min-width: 361px) and (max-width: 768px) {
    .login-wrapper {
      .login-form-wrapper {
        width: 90vw;
      }
    }
  }
  @media (max-width: 360px) {
    .login-wrapper {
      .login-form-wrapper {
        width: 95vw;
      }
    }
  }`;

  const htmlCode = `
    <div className="login-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="form-group">
            {user.isAlert && <PtgUiAlert message={'error message'} />}
          </div>
          <div className="form-group">
            <div className="login-logo text-center mb-3">
              <img
                className="login-logo"
                src="assets/images/YashLogo.png"
                alt={'image logo'}
              />
            </div>
          </div>
          <form className="form-login">
            <div className="login-form">
              <div className="form-group mb-4 required">
                <label
                  htmlFor="inputEmail"
                  aria-labelledby="inputEmail"
                  tabIndex={0}
                >
                  {'Email'}
                </label>
                <div className="userid input-group flex-nowrap">
                  <div className="input-group-prepend">
                    <i className="login-user-icon"></i>
                  </div>
                  <PtgUiInput
                    type="email"
                    id="inputEmail"
                    value={user.email}
                    onChange={handleChange}
                    className={
                      formErr.email === true ? 'w-100 form-control bg_0 border-danger' : 'w-100 form-control bg_0'
                    }
                    name="email"
                    placeholder={'Enter Your Email'}
                    onBlur={user.email === '' ? handleBlur : null}
                  />
                </div>
              </div>
              <div className="form-group mb-4 required">
                <label
                  htmlFor="inputPassword"
                  aria-labelledby="inputPassword"
                  tabIndex={0}
                >
                  {'Password'}
                </label>
                <div className="forgot-password float-end" tabIndex={0}>
                  <ForgotPassword />
                </div>
                <div className="userid input-group flex-nowrap">
                  <div className="input-group-prepend">
                    <i className="login-password-icon"></i>
                  </div>
                  <PtgUiInput
                    type="password"
                    id="inputPassword"
                    onChange={handleChange}
                    value={user.password}
                    className={
                      formErr.password === true ? 'w-100 form-control bg_0 border-danger' : 'w-100 form-control bg_0'
                    }
                    name="password"
                    placeholder={'Enter Your Password'}
                    onBlur={user.password === '' ? handleBlur : null}
                  />
                </div>
              </div>
            </div>
            <div className="new_label text-center mb-3">
              <label tabIndex={0}>
                {'If you don't have an account click on '}
                <Link to="/register" className="signup-btn">
                  {'SIGN UP.'}
                </Link>
                .
              </label>
            </div>
            <PtgUiButton
              className="w-100"
              tabIndex={0}
              disabled={user.disable}
              data-testid="login"
            >
              {'LOG IN'}
            </PtgUiButton>
            <p className="text-center mx-3 mb-0">{'OR'}</p>
            <PtgUiButton
              className="w-100"
              tabIndex={0}
            >
              {'Msal'}
            </PtgUiButton>
          </form>
        </div>
      </div>
    </div>

    //Forgot password Modal
    <div>
      <a
        className="forgot-password float-end"
        onClick={handleShow}
        data-testid="linkForgotPassword"
      >
        Forgot Password?
      </a>
      <Modal show={values.show}>
        {values.showMessage.show && (
          <PtgUiAlert
            type={values?.showMessage?.type}
            message={values?.showMessage?.message}
          />
        )}
        <div className="forgot-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
          <div className="forgot-container">
            <div className="forgot-form-wrapper">
              <div className="form-group">
                <div className="text-center mb-3">
                  <h3>{t('FORGOT_PASSWORD')}</h3>
                </div>
              </div>
              <div className="forgot-form">
                <div className="form-group required mb-4">
                  <label htmlFor="inputEmail">{t('LABEL_EMAIL')}</label>
                  <PtgUiInput
                    type="email"
                    className={
                      formErr.email === true ? 'w-100 form-control bg_0 border-danger' : 'w-100 form-control bg_0'
                    }
                    name="email"
                    data-testid="email"
                    placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                    onChange={handleChange}
                    value={values.email}
                    onBlur={values.email === '' ? handleBlur : null}
                  />
                </div>
                <div className="row">
                  <div className="col-9 col-lg-8 col-md-8 col-sm-9 col-xs-9">
                    <PtgUiButton
                      type="submit"
                      variant="primary"
                      data-testid="handleSubmit"
                      // data-testid="forgotButton"
                      disabled={values.btnDisable}
                    >
                      {t('FORGOT_PASSWORD')}
                    </PtgUiButton>
                  </div>
                  <div className="col-3 col-lg-4 col-md-4 col-sm-3 col-xs-3 text-md-end">
                    <PtgUiButton
                      type="submit"
                      variant="secondary"
                      data-testid="handleClose"
                      onClick={handleClose}
                    >
                      {t('CANCEL')}
                    </PtgUiButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  `;

  return (
    <>
      {user.isLoading && <PtgUiLoading />}
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Login</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
            cssCode={cssCode}
          />
        )}
        <div className="login-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
          <div className="login-container">
            <div className="login-form-wrapper">
              <div className="form-group">
                {user.isAlert && <PtgUiAlert message={t('ERROR_MSG')} />}
              </div>
              <div className="form-group">
                <div className="login-logo text-center mb-3">
                  <img
                    className="login-logo"
                    src="assets/images/YashLogo.png"
                    alt={t('IMG_WebsiteLOGO')}
                  />
                </div>
              </div>
              <form className="form-login">
                <div className="login-form">
                  <div className="form-group mb-4 required">
                    <label
                      htmlFor="inputEmail"
                      aria-labelledby="inputEmail"
                      tabIndex={0}
                    >
                      {t('LABEL_EMAIL')}
                    </label>
                    <div className="userid input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <i className="login-user-icon"></i>
                      </div>
                      <PtgUiInput
                        type="email"
                        id="inputEmail"
                        value={user.email}
                        onChange={handleChange}
                        className={`"w-100 form-control bg_0 ${
                          formErr.email === true ? 'border-danger' : ''
                        }`}
                        name="email"
                        placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                        onBlur={user.email === '' ? handleBlur : null}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4 required">
                    <label
                      htmlFor="inputPassword"
                      aria-labelledby="inputPassword"
                      tabIndex={0}
                    >
                      {t('LABEL_PASSWORD')}
                    </label>
                    <div className="forgot-password float-end" tabIndex={0}>
                      <ForgotPassword />
                    </div>
                    <div className="userid input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <i className="login-password-icon"></i>
                      </div>
                      <PtgUiInput
                        type="password"
                        id="inputPassword"
                        onChange={handleChange}
                        value={user.password}
                        className={`"w-100 form-control bg_0 ${
                          formErr.password === true ? 'border-danger' : ''
                        }`}
                        name="password"
                        placeholder={t('INPUT_PLACEHOLDER_PASSWORD')}
                        onBlur={user.password === '' ? handleBlur : null}
                      />
                    </div>
                  </div>
                </div>
                <div className="new_label text-center mb-3">
                  <label tabIndex={0}>
                    {t('LABEL_INFO_MSG')}{' '}
                    <Link to="/register" className="signup-btn">
                      {t('SIGN_UP')}
                    </Link>
                    .
                  </label>
                </div>
                <PtgUiButton
                  className="w-100"
                  tabIndex={0}
                  disabled={user.disable}
                  data-testid="login"
                >
                  {t('LOG_IN')}
                </PtgUiButton>
                <p className="text-center mx-3 mb-0">{t('OR')}</p>
                <PtgUiButton className="w-100" tabIndex={0}>
                  {t('Msal')}
                </PtgUiButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PtgUiLogin;
