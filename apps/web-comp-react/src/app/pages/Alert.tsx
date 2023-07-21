import { PtgAlert } from '@ptg-ui/web-components-react';
import React from 'react';

function Alert() {
  return (
    <div className="container">
      <h1 className="title-align">Alert</h1>
      <PtgAlert
        texed="This is a Success alert—check it out!"
        appreanced="success"
      ></PtgAlert>
      <br />
      <PtgAlert
        texed="This is a Primary alert—check it out!"
        appreanced="primary"
      ></PtgAlert>
    </div>
  );
}

export default Alert;
