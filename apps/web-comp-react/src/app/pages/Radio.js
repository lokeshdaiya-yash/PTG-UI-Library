import React from 'react';
import { PtgRadiobuton } from '@ptg-ui/web-components-react';
function Radio() {
  return (
    <div className="radio container">
      <h3 className="title-align">Radio Buttons</h3>
      <div className="row">
        <PtgRadiobuton
          type="radio"
          id="mybtn"
          name="radios"
          value="A"
          sender="Option 1"
        ></PtgRadiobuton>
        <PtgRadiobuton
          type="radio"
          id="mybtn1"
          name="radios"
          value="B"
          sender="Option 2"
        ></PtgRadiobuton>
      </div>
    </div>
  );
}

export default Radio;
