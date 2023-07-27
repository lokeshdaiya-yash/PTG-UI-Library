import React from 'react';
import { PtgCalender } from '@ptg-ui/ptg-ui-web-components-react';

function Calender() {
  const [date, setDate] = React.useState(new Date('10/07/2021'));
  const getCalendarValue = (val: any) => {
    console.log('val', val);
  };
  return (
    <div className="calender container">
      <h3 className="title-align">Calender</h3>
      <div className="row">
        <PtgCalender startDate={date} callback={getCalendarValue}></PtgCalender>
      </div>
    </div>
  );
}

export default Calender;
