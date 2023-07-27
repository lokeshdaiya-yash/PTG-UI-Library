import React from 'react';
import { PtgToast } from '@ptg-ui/ptg-ui-web-components-react';

function Toast() {
  return (
    <div class="container">
      <h3 className="title-align">Toast</h3>
      <div class="row">
        <PtgToast
          type="Normal"
          discription="This is the Normal Toast Message"
        ></PtgToast>
      </div>
    </div>
  );
}
export default Toast;
