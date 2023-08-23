import React from 'react';

export const ShellComponent = ({ receivedData }) => {
  return (
    <div>
      <h5 style={{ color: 'darkviolet' }}>
        {' '}
        Data Received from Remote : {receivedData}
      </h5>
    </div>
  );
};
