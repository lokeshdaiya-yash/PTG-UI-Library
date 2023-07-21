import { PtgSelect } from '@ptg-ui/web-components-react';
import { Prop } from 'dist/libs/web-components/dist/types/stencil-public-runtime';
import { useEffect, useState } from 'react';

const SelectMultiselect = () => {
  const data = [
    { id: 1, caption: 'John Doe' },
    { id: 2, caption: 'Victor Wayne' },
    { id: 3, caption: 'Jane Doe' },
  ];
  return (
    <div className="SelectMultiselect container">
      <h3 className="title-align">Select/Multiselect</h3>
      <div className="row">
        <PtgSelect selectData={data}></PtgSelect>
        <PtgSelect selectData={data} multiSelect={true}></PtgSelect>
      </div>
    </div>
  );
};

export default SelectMultiselect;
