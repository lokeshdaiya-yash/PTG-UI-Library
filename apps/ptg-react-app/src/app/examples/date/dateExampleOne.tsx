/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 *
 */

import { useState } from 'react';
import './date.scss';
import { PtgUiCalendar } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';

export interface ExampleOneProps {}

export function ExampleOne(props: ExampleOneProps) {
    const { t } = useTranslation();
  const today = new Date();
  const [date, setStartDate] = useState({
    startDate: null,
    endDate: null,
    dateRange: null,
  });

  /*-----Set date state-----*/
  const setDateState: any = (date: any, field: string) => {
    setStartDate((preState: any) => {
      if (field === 'startDate') preState.endDate = null;
      return {
        ...preState,
        [field]: date,
      };
    });
  };
  /*-----props for start datepicker-----*/
  const startDateProp = {
    selected: date.startDate,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d, 'startDate'),
    startDate: today,
    endDate: null,
    disabled: false,
  };

  /*-----props for end datepicker-----*/
  const endDateProp = {
    selected: date.endDate,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d, 'endDate'),
    startDate: date.startDate || today,
    endDate: null,
    disabled: date.startDate === null,
  };

  /*-----props for date range picker-----*/
  const dateRangeProp = {
    selected: date.dateRange,
    className: `form-control w-100`,
    onChange: (d: any) => setDateState(d, 'dateRange'),
    startDate: date.startDate,
    endDate: date.endDate,
    disabled: date.startDate === null,
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="row mb-3">
              <div className="col-12">
                <label>{t('MIN_DATE')}</label>
              </div>
              <div className="col-12" id="sdo">
                <PtgUiCalendar {...startDateProp} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>{t('MAX_DATE')}</label>
              </div>
              <div className="col-12" id="edo">
                <PtgUiCalendar {...endDateProp} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-1 offset-sm-0 offset-xs-0 margin-top-15">
            <label className="font-weight-bold">
              <b>{t('DATE_VALIDATOR_TEXT')}</b>
            </label>
            <div className="row mb-3">
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                id="react-datepicker_star-end"
              >
                <PtgUiCalendar {...dateRangeProp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleOne;
