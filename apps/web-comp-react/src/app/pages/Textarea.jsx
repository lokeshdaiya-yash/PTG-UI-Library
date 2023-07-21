import React from 'react';
import { PtgTextarea } from '@ptg-ui/web-components-react';

function Textarea() {
  return (
    <div class="container">
      <h3 className="title-align">Textarea</h3>
      <div class="row">
        <PtgTextarea placeholder="Enter Your Comments Here...."></PtgTextarea>
        <PtgTextarea
          placeholder="Enter Your Comments Here...."
          appearance="danger"
        ></PtgTextarea>
      </div>
    </div>
  );
}
export default Textarea;
