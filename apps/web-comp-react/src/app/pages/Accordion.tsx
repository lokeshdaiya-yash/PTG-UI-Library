import React from 'react';
import { PtgAccordion } from '@ptg-ui/web-components-react';
const Accordion = () => {
  return (
    <div className="container">
      <PtgAccordion label="accordion1" description="Hiiii"></PtgAccordion>
      <PtgAccordion label="accordion" description="Hiiii"></PtgAccordion>
    </div>
  );
};

export default Accordion;
