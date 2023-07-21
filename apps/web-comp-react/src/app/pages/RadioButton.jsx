import { PtgAlert, PtgRadiobtn } from "@ptg-ui/web-components-react";
import React from "react";

function RadioButton() {
    return (
      <div className="container">
          <h1 className='title-align'>Radio Button</h1>
        <PtgRadiobtn type="radio" ids="mybtn1" name="fruits" value ="B" sender ="Apple"></PtgRadiobtn>
        <PtgRadiobtn type="radio" ids="mybtn1" name="fruits" value ="B" sender ="Banana"></PtgRadiobtn>
          </div>
    );
  }
  
  export default RadioButton;