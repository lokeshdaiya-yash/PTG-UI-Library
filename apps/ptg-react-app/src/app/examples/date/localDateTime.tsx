import { useState, useEffect } from 'react';
import { PtgUiCalendar } from '@ptg-ui/react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiMultiSelectbox, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
export interface ExampleOneProps {
  showCodeLocalDate: boolean;
}
export const timeZoneList = [
  { value: 'America/New_York', label: 'New York', name: 'America/New_York' },
  { value: 'Europe/London', label: 'London', name: 'Europe/London' },
];
const LocalDatetime = (props: ExampleOneProps) => {
  const { showCodeLocalDate } = props;
  const [selectedDate, setSlectedDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');
  const [dateTimeUSA, setDateTimeToOtherLocale] = useState<
    Date | null | undefined
  >(new Date());
  const { t } = useTranslation();
  //handle convert tine
  const convertDateTime = (myDate: Date) => {
    const date = new Date(myDate);
    const options = { timeZone: timeZone };
    const locale = 'en-US';
    const newDate = new Date(date.toLocaleString(locale, options));
    return newDate;
  };
  const onSelect: any = (event: any) => {
    setTimeZone(event[0].value);
  };
  const handleTime = (e: any) => {
    setDateTimeToOtherLocale(convertDateTime(new Date(e.toISOString())));
  };
  const startDateProp = {
    selected: selectedDate,
    className: 'form-control w-100',
    onChange: (d: any) => {
      setSlectedDate(d);
    },
    disabled: false,
    showTimeSelect: true,
    dateFormat: 'MMMM d, yyyy h:mm aa',
  };
  const startDatePropLocal = {
    selected: dateTimeUSA,
    className: 'form-control w-100',
    disabled: false,
    showTimeSelect: true,
    dateFormat: 'MMMM d, yyyy h:mm aa',
  };
  useEffect(() => {
    if(timeZone){
    handleTime(selectedDate);
    }
  }, [timeZone, selectedDate]);
  const componentCode = `
  import { useState } from 'react';
import { PtgUiCalendar } from '@ptg-ui/react';
export interface ExampleOneProps {
  showCodeLocalDate : boolean
}
export const timeZoneList = [
  { value: 'America/New_York', label: 'New York', name: 'America/New_York' },
  { value: 'Europe/London', label: 'London', name: 'Europe/London'},
];
const LocalDatetime = () => {
  const [selectedDate, setSlectedDate] = useState(new Date());
  const [datetime24h, setDateTime24h] = useState<Date | null | undefined>( new Date()
  );
  const [dateTimeUSA, setDateTimeToOtherLocale] = useState<
    Date | null | undefined
  >(new Date());
  const [time, setTime] = useState<Date | null | undefined>(new Date());

  //handle convert tine
  const convertDateTime = (myDate: Date) => {
    const date = new Date(myDate);
    const locale = 'en-US';
    const newDate = new Date(date.toLocaleString(locale, options));
    return newDate;
  };
  const handleTime = (e: any) => {
    setDateTime24h(e);
    setDateTimeToOtherLocale(convertDateTime(new Date(e.toISOString())));
  };
  const startDateProp = {
    selected: selectedDate,
    onChange: (d: any) => {
      handleTime(d);
    },
    disabled: false,
    showTimeSelect: true,
    dateFormat: 'MMMM d, yyyy h:mm aa',
  };
  const startDatePropLocal = {
    selected: dateTimeUSA,
    disabled: false,
    showTimeSelect: true,
    dateFormat: 'MMMM d, yyyy h:mm aa',
  };`;

  const htmlCode = `
  <PtgUiCalendar {...startDateProp} />
  <PtgUiMultiSelectbox
    name="time"
    list={timeZoneList}
    onSelect={onSelect}
    singleSelect={true}
    placeholder={t('SELECT_PLACEHOLDER')}
   />
  <PtgUiCalendar {...startDatePropLocal} />
  `;

  return (
    <>
      {!showCodeLocalDate ? (
        <div className="container-fuild">
          <div className="row ms-1 me-1">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>en-US time zone</label>
              <PtgUiCalendar {...startDateProp} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>Timezone</label>
              <PtgUiMultiSelectbox
                name="time"
                list={timeZoneList}
                onSelect={onSelect}
                singleSelect={true}
                className='single-select-field'
                placeholder={t('SELECT_PLACEHOLDER')}
              />
            </div>
          </div>
          <div className="row mt-2 ms-1 me-1">
            <div className="col-md-6 col-lg-6">
            <label>Converted timezone</label>
              <PtgUiCalendar {...startDatePropLocal} />
            </div>
          </div>
        </div>
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </>
  );
};

export default LocalDatetime;
