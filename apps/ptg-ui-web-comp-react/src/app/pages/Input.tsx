import { PtgInput } from '@ptg-ui/ptg-ui-web-components-react';

function Input() {
  return (
    <div className="input container">
      <h3 className="title-align">Input</h3>
      <div className="row">
        <PtgInput
          type="text"
          inputId="name"
          label="Name"
          placeholder="Enter Name"
          name="abc"
          value="abc"
        ></PtgInput>
      </div>
    </div>
  );
}

export default Input;
