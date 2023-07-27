import React, { useState, useEffect } from 'react';

import { PtgCheckbox } from '@ptg-ui/ptg-ui-web-components-react';

const Checkbox = () => {
  const [checkbox, setCheckbox] = useState([] as any);
  const [checked, setChecked] = React.useState([]);
  const getCheckboxValue = (event: any) => {
    let newArray = [...checkbox, event?.target?.value];
    if (event?.target?.checked) {
      if (checkbox.includes(event?.target?.value)) {
        newArray = newArray.filter((val) => val !== event.target.value);
      }
      setCheckbox(newArray);
    } else {
      newArray = newArray.filter((val) => val !== event.target.value);
      setCheckbox(newArray);
    }
  };

  console.log('checkbox', checkbox);
  return (
    <div className="checkbox container">
      <h3 className="title-align">Checkbox</h3>
      <div className="row">
        <PtgCheckbox
          color="priamry"
          label="Kivi"
          callback={getCheckboxValue}
          checked={false}
          datavalue="Kivi"
          indeterminate={true}
          dataid="chedckobx-1"
        ></PtgCheckbox>
        <PtgCheckbox
          color="priamry"
          label="Mango"
          callback={getCheckboxValue}
          checked={false}
          datavalue="Mango"
          dataid="chedckobx-2"
        ></PtgCheckbox>
        <PtgCheckbox
          color="priamry"
          label="Apple"
          checked={false}
          datavalue="Apple"
          callback={getCheckboxValue}
          dataid="chedckobx-1"
        ></PtgCheckbox>
      </div>
    </div>
  );
};

export default Checkbox;
