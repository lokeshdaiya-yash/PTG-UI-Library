import React, { useState } from 'react';
import { PtgAccordion } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';

export default function Accordian() {
  const [showCode, setShowCode] = useState(false);
  const label = 'Bacon Ipsum';
  //const description = 'Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  const width ='100%';
  const color ='pink';

  const componentCode = `
  import { PtgAccordion } from '@ptg-ui/ptg-ui-web-components-react';
  const label = 'Bacon Ipsum';
  const description = 'Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  const width ='100%';
  const color ='pink';
 `;
  const htmlCode = `
  <PtgAccordion label={label} description={description} width={width} color={color}>
    <div slot="body-block">
    <h2>React Slot for Body</h2>
  </div>
  </PtgAccordion>
 `;
  return (
    <div className="row mt-3">
      <div className="col-md-10">
        <h3 className="font-weight-bold">Accordian</h3>
      </div>
      <div className="col-2">
        <CodeIcon
          onClick={() => setShowCode((prev) => !prev)}
          fontSize="medium"
          className="show-code-icon"
        ></CodeIcon>
      </div>
      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="col-md-12">
      <PtgAccordion label={label}  width={width} color={color}>
        <div slot="body-block">
          <h2>React Slot for Body</h2>
        </div>
      </PtgAccordion>
      </div>
    </div>
  );
}
