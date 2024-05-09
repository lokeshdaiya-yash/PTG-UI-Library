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
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

export interface ExampleTwoProps {
  showCodeTwo : boolean
 }

export function ExampleTwo(props: ExampleTwoProps) {
   const { t } = useTranslation();
    const today = new Date();
    const [date, setStartDate] = useState({
        startDate: null,
        endDate: null,
        dateRange:null,
        errorMsg:false,
    });

    /*-----Set date state-----*/
    const setDateState: any = (d: any, field: string) => {
        setStartDate((preState: any) => {
         if (field === 'dateRange' && date && date.startDate && date.endDate && ((d < date.startDate) || (d > date.endDate))) {
                date.errorMsg = true
          } else {
                date.errorMsg = false
          }
          return {
              ...preState,
              [field]: d
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

     /*-----props for date range picker-----*/
     const dateRangeProp = {
        selected: date.dateRange,
        className: `form-control w-100`,
        onChange: (d: any) => setDateState(d, 'dateRange'),
        // startDate: date.startDate,
        // endDate: date.endDate,
    }

    const componentCode = `
    import DatePicker from 'react-datepicker';

    export function ExampleTwo(props: ExampleTwoProps) {

       const today = new Date();
       const [date, setStartDate] = useState({
           startDate: null,
           endDate: null,
           dateRange:null,
           errorMsg:false,
       });
   
       const setDateState: any = (d: any, field: string) => {
           setStartDate((preState: any) => {
            if (field === 'dateRange' && date && date.startDate && date.endDate && ((d < date.startDate) || (d > date.endDate))) {
                   date.errorMsg = true
             } else {
                   date.errorMsg = false
             }
             return {
                 ...preState,
                 [field]: d
             }
           });
       }
     
       const startDateProp = {
           selected: date.startDate,
           className: "form-control w-100",
           onChange: (d: any) => setDateState(d, 'startDate'),
           startDate: today,
           endDate: null,
           disabled: false,
       }
   
     
       const endDateProp = {
           selected: date.endDate,
           className: "form-control w-100",
           onChange: (d: any) => setDateState(d, 'endDate'),
           startDate: date.startDate || today,
           endDate: null,
           disabled: date.startDate === null,
       }
   
        const dateRangeProp = {
           selected: date.dateRange,
           className: "form-control w-100",
           onChange: (d: any) => setDateState(d, 'dateRange'),
           // startDate: date.startDate,
           // endDate: date.endDate,
       }
   
     
   }
   
   export default ExampleTwo;
   `

   const htmlCode = `
          <DatePicker
            disabled={disabled}
            selected={selected}
            className={className}
            dateFormat="MM-dd-yyyy"
            placeholderText="MM-DD-YYYY"
            onChange={onChange}
            minDate={startDate === null ? startDate : new Date(startDate)}
            maxDate={endDate === null ? endDate : new Date(endDate)}
            onKeyDown={onKeyDown}
            isClearable
          />
          
          {date.errorMsg && (
            <p>DATE_VALIDATOR_TEXT</p>
          )}
        </div>
   `

    return (
      <section>
        <div className="container-fluid">
        {!props.showCodeTwo ? (
           <div className="row mb-5">
           <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12">
             <div className="row mb-3">
               <div className="col-12">
                 <label>{t('MIN_DATE')}</label>
               </div>
               <div className="col-12" id="start-date">
                 <PtgUiCalendar {...startDateProp} />
               </div>
             </div>
             <div className="row">
               <div className="col-12">
                 <label>{t('MAX_DATE')}</label>
               </div>
               <div className="col-12" id="end-date">
                 <PtgUiCalendar {...endDateProp} />
               </div>
             </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-1 offset-sm-0 offset-xs-0 margin-top-15">
             <label>{t('DATE_VALIDATOR_TEXT')}</label>
             <div className="row mb-3">
               <div
                 className="calender-component col-lg-10 col-md-12 col-sm-12 col-xs-12"
                 id="date-range-two"
               >
                 <PtgUiCalendar {...dateRangeProp} />
                 {date.errorMsg && (
                   <p className="text-danger">
                     {t('DATE_VALIDATOR_TEXT')}
                   </p>
                 )}
               </div>
             </div>
           </div>
         </div>
        ) : (
          <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
        )}
        </div>
      </section>
    );
}

export default ExampleTwo;
