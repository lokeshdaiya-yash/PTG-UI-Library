/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 * 
*/

import { useState } from 'react';
import './date.scss';
import {PtgUiCalendar} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';

export interface ExampleThreeProps { }

export function ExampleThree(props: ExampleThreeProps) {
  const { t } = useTranslation();
    const today = new Date();
    const [date, setStartDate] = useState({
        startDate: null,
        endDate: null,
    });

    /*-----Set date state-----*/
    const setDateState: any = (date: any, field: string) => {
        setStartDate((preState: any) => {
            if (field === 'startDate')
                preState.endDate = null
            return {
                ...preState,
                [field]: date
            }
        });
    }
    /*-----props for start datepicker-----*/
    const startDateProp = {
        selected: date.startDate,
        className: `form-control w-100`,
        onChange: (d: any) => setDateState(d, 'startDate'),
        startDate: today,
        endDate: null,
        disabled: false,
    }

    /*-----props for end datepicker-----*/
    const endDateProp = {
        selected: date.endDate,
        className: `form-control w-100`,
        onChange: (d: any) => setDateState(d, 'endDate'),
        startDate: date.startDate || today,
        endDate: null,
        disabled: date.startDate === null,
    }


    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="form-group mb-2" id="start-date">
            <label htmlFor="inputDOB">{t('START_DATE_TEXT')}</label>
            {/*-----Usable component datepicker-----*/}
            <PtgUiCalendar {...startDateProp} />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-sm-0 offset-xs-0">
          <div className="form-group mb-2" id="end-date">
            <label htmlFor="inputDOB">{t('END_DATE_TEXT')}</label>
            {/*-----Usable component datepicker-----*/}
            <PtgUiCalendar {...endDateProp} />
          </div>
        </div>
      </div>
    );
}

export default ExampleThree;
