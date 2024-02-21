import { PtgUiButton } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import React from 'react';

export const StepFour = ({ resetForm, details, submitForm, showPrevious }: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="border border-2 border-dark pb-2 p-2">
        <h5 className="text-center my-2">Confirm Details</h5>
        <div className="form-group  text-break">
          <div className="row ms-3 text-wrap">
            <div className=" col-5 form-text">{t('USER_NAME')} </div>
            <div className=" col-6 form-text mb-2">{details.userName}</div>
            <div className=" col-5 form-text">{t('NAME')} </div>
            <div className=" col-6 form-text mb-2">
              {details.Greeting +
                ' ' +
                details.firstName +
                ' ' +
                details.lastName}
            </div>
            <div className=" col-5 form-text">{t('GENDER')} </div>
            <div className=" col-6 form-text mb-2">{details.Gender}</div>
            <div className=" col-5 form-text">{t('LABEL_EMAIL')}</div>
            <div className=" col-6 mb-2 form-text">{details.email}</div>
            <div className=" col-5 form-text">{t('PHONE')}</div>
            <div className=" col-6 form-text mb-2">{details.phone}</div>
            <div className=" col-5 form-text">{t('CARD_TYPE')}</div>
            <div className=" col-6 form-text mb-2">{details.cardType}</div>
            <div className=" col-5 form-text">{t('CARD_NUMBER')} </div>
            <div className=" col-6 form-text mb-2">{details.cardNumber}</div>
            <div className=" col-5 form-text">{t('Adresse')} </div>
            <div className=" col-6 form-text mb-2">{`${details.homeAddress},${details.state},${details.zipCode}\n ${details.country}`}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12  mt-2">
          <PtgUiButton
            className="w-100"
            type="button"
            onClick={showPrevious}
            aria-label="submit"
            data-testid="submit"
          >
            {t('PREVIOUS')}
          </PtgUiButton>
        </div>
        <div className="col-md-4 col-sm-12  mt-2">
          <PtgUiButton
            className="w-100"
            type="button"
            onClick={resetForm}
            aria-label="reset"
            data-testid="reset"
          >
            {t('RESET')}
          </PtgUiButton>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12  mt-2">
          <PtgUiButton
            className="w-100"
            type="button"
            onClick={submitForm}
            aria-label="submit"
            data-testid="submit"
          >
            {t('SUBMIT')}
          </PtgUiButton>
        </div>
      </div>
    </div>
  );
};
