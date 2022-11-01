import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import { StepOne } from './stepOne';
import { StepTwo } from './stepTwo';
import './Example3.scss';

import { PtgUiButton } from '@ptg-ui/react';
import { StepThree } from './stepThree';
import { useTranslation } from 'react-i18next';
import { StepFour } from './stepFour';
const Example3 = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    Greeting: '',
    Gender: '',
    phone: '',
    zipCode: '',
    state: '',
    homeAddress: '',
    country: '',
    cardType: '',
    cardNumber: '',
    cvc: '',
    expiration: '',
    cardHolder: '',
  });
  const [error, setError] = useState<any>({
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
    Greeting: false,
    Gender: false,
    phone: false,
    zipCode: false,
    state: false,
    homeAddress: false,
    country: false,
    cardType: false,
    cardNumber: false,
    cvc: false,
    expiration: false,
    cardHolder: false,
  });

  // reset Form
  const resetForm = () => {
    setStep(0);
    setDetails({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      Greeting: '',
      Gender: '',
      phone: '',
      zipCode: '',
      state: '',
      homeAddress: '',
      country: '',
      cardType: '',
      cardNumber: '',
      cvc: '',
      expiration: '',
      cardHolder: '',
    });
  };

  // submit form
  const submitForm = () => {
    console.log({ details });
    resetForm();
  };

  // on blur method
  const handleBlur = (event: any) => {
    if (!event.target.value) {
      setError({ ...error, [event.target.name]: true });
    }
  };

  // validating different fields
  const validate = (field: any, value: any) => {
    let formError = error;
    if (!value) {
      formError = { ...formError, [field]: 'field is required' };
    } else {
      formError = { ...formError, [field]: false };

      // password validation
      if (
        (field === 'confirmPassword' && details.password !== value) ||
        (field === 'password' &&
          details.confirmPassword !== value &&
          details.confirmPassword)
      ) {
        formError = {
          ...formError,
          password: true,
          confirmPassword: "passwords don't match",
        };
      } else if (
        (field === 'confirmPassword' && details.password === value) ||
        (field === 'password' && details.confirmPassword === value)
      ) {
        formError = { ...formError, password: false, confirmPassword: false };
      }

      // email validation
      else if (field === 'email') {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          if (!regexEmail.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }

      // phone validation
      else if (field === 'phone') {
        const regexPhone = /^\d{10}$/;
        if (value === '' || value ? true : false !== regexPhone.test(value)) {
          if (!regexPhone.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }

      // card validaion
      else if (field === 'cardNumber') {
        const regexCardNumber = /^\d{16}$/;
        if (value === '' || value ? true : false !== regexCardNumber.test(value)) {
          if (!regexCardNumber.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }
      // cvc validation
      else if (field === 'cvc') {
       const regexCvc = /^\d{3}$/;
       if (value === '' || value ? true : false !== regexCvc.test(value)) {
         if (!regexCvc.test(value)) {
           formError = { ...formError, [field]: true };
         }
       }
      }
      // pincode validation
      else if (field === 'zipCode') {
        const regexZipCode = /^\d{6}$/;
        if (value === '' || value ? true : false !== regexZipCode.test(value)) {
          if (!regexZipCode.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }
    }
    setError(formError);
  };

  // handleChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    validate(name, value);
  };

  function showNext() {
    console.log('hereeeee');
    setStep(+step + 1);
  }
  const showPrevious = () => {
    setStep(+step - 1);
  };
  const showStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <StepOne
            showNext={showNext}
            details={details}
            handleChange={handleChange}
            error={error}
          />
        );
      case 1:
        return (
          <StepTwo
            showNext={showNext}
            showPrevious={showPrevious}
            details={details}
            error={error}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 2:
        return (
          <StepThree
            showNext={showNext}
            showPrevious={showPrevious}
            details={details}
            error={error}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <StepFour
            details={details}
            showPrevious={showPrevious}
            resetForm={resetForm}
            submitForm={submitForm}
          />
        );
      default:
        return <StepOne showNext={showNext} />;
    }
  };

  return (
    <>
      <h1 className="text-center">{t('MULTI_STEP_FORM')}</h1>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mr-5">
          <Stepper activeStep={step} orientation="vertical">
            <Step>
              <StepLabel
                error={
                  error.password || error.confirmPassword || error.userName
                }
              >
                {t('ACCOUNT_INFO')}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                error={
                  error.email ||
                  error.firstName ||
                  error.lastName ||
                  error.phone ||
                  error.zipCode ||
                  error.homeAddress ||
                  error.Greeting ||
                  error.Gender ||
                  error.state ||
                  error.country
                }
              >
                {t('PERSONAL_INFO')}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                error={
                  error.cardType ||
                  error.cardNumber ||
                  error.cvc ||
                  error.expiration ||
                  error.cardHolder
                }
              >
                {t('PAYMENT_DETAILS')}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>{t('CONFIRM_DETAILS')}</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          {showStep(step)}
        </div>
      </div>
    </>
  );
};
export default Example3;
