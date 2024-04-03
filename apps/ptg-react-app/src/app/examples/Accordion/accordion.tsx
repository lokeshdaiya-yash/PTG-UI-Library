import React, { useState } from 'react';
import { PtgAccordion } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import "./accordion.scss";

export default function Accordian() {
  const [showCode, setShowCode] = useState(false);
  const label = 'Lorem Ipsum';
  const description = 'Lorem ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  const bgColor = 'white';
  const defaultOpened = false;

  const componentCode = `
  import { PtgAccordion } from '@ptg-ui/ptg-ui-web-components-react';
  const label = 'Lorem Ipsum';
  const description = 'Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  const bgColor ='white';
  const defaultOpened = false;
 `;
  const htmlCode = `
  <PtgAccordion label={label} description={description} bgColor={bgColor} defaultOpened={defaultOpened}>
  <div slot="body-block">
    <h2>React Slot for Body</h2>
  </div>
  </PtgAccordion>
 `;
  return (
    <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
    <div className="row">
      <div className="col-10 mb-2 mt-2">
        <h5 className="font-weight-bold example-heading">Accordion</h5>
      </div>
      <div className="col-2 mb-2 mt-1">
        <CodeIcon
          onClick={() => setShowCode((prev) => !prev)}
          fontSize="large"
          className="show-code-icon"
        ></CodeIcon>
      </div>
      <hr className='horizontal-line'/>
      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="accordion-component col-md-11 col-sm-7   ms-3">
        <PtgAccordion label={label} description={description} bgColor={bgColor} defaultOpened={defaultOpened}>
          <div slot="body-block">
            <h2>React Slot for Body</h2>
          </div>
        </PtgAccordion>
      </div>
    </div>
    </section>
  );
}