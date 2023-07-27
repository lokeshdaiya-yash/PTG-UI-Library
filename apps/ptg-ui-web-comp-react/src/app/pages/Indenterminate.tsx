import React, { useState, useEffect } from 'react';

import { PtgCheckbox } from '@ptg-ui/ptg-ui-web-components-react';

const IndenterminateCheckbox = () => {
  const [checkbox, setCheckbox] = useState([] as any);
  const [checked, setChecked] = React.useState([true, false]);
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

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  console.log('checkbox', checkbox);
  return (
    <div className="buttons container">
      <h1 className="title-align"> Indenterminate Checkbox</h1>
      <div className="row">
        <ul>
          <li>
            <PtgCheckbox
              color="priamry"
              label="Kivi"
              callback={handleChange1}
              checked={checked[0] && checked[1]}
              datavalue="Kivi"
              indeterminate={checked[0] !== checked[1]}
              dataid="chedckobx-1"
            ></PtgCheckbox>
          </li>
          <li>
            <ul>
              <li>
                <PtgCheckbox
                  color="priamry"
                  label="Mango"
                  callback={handleChange2}
                  checked={checked[0]}
                  datavalue="Mango"
                  dataid="chedckobx-2"
                ></PtgCheckbox>
              </li>
              <li>
                <PtgCheckbox
                  color="priamry"
                  label="Apple"
                  checked={checked[1]}
                  datavalue="Apple"
                  callback={handleChange3}
                  dataid="chedckobx-1"
                ></PtgCheckbox>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndenterminateCheckbox;
