/**
 * @since Feb 2024
 * @author Pranjal Joshi
 * @uses Example using Tabs as reusable component.
 *
*/

import { useState } from 'react';

import CodeIcon from '@mui/icons-material/Code';
import "./tabs.scss";
import { PtgTabs } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';


const TabExample = () => {

  const [showCode, setShowCode] = useState(false);

  let arrayObject = [
    {
      "label" : "Tab1",
      "content" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful ",
      "checked" : true
    },
    {
      "label" : "Tab2",
      "content" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful ",
      "checked" : false
    },
    {
      "label" : "Tab3",
      "content" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful ",
      "checked" : false
    },
    {
      "label" : "Tab4",
      "content" : "There are many variations of passages of Lorem Ipsum available,",
      "checked" : false
    },
  ]
    const ShowExampleCode = () => {
      if(!showCode) {
        setShowCode(true);
      } else {
        setShowCode(false);
      }
    }

    const componentCode = `

      import { useState } from 'react';
      import "./tabs.scss";
      import { PtgTabs } from '@ptg-ui/libs/ptg-ui-web-components-react/src';

      const TabExample = () => {

        let arrayObject = [
          {
            "label" : "Tab1",
            "content" : "There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use 
            a passage of Lorem Ipsum."
            "checked" : true
          },
          {
            "label" : "Tab2",
            "content" : "There are many variations of passages of Lorem Ipsum available, 
             but the majority have suffered alteration in some form, by injected humour, or
             randomised words which don't look even slightly believable. If you are going to use.",
            "checked" : false
          },
          {
            "label" : "Tab3",
            "content" : "There are many variations of passages of Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected humour, or 
            randomised words which don't look even slightly believable. middle of text.",
            "checked" : false
          },
          {
            "label" : "Tab4",
            "content" : "There are many variations of passages of Lorem Ipsum available,",
            "checked" : false
          },
        ]
    export default TabExample;`

    const htmlCode = `
      <PtgTabs 
        tabLabelArray={arrayObject}
      />
    `

    return (
      <div>
      <div className="row">
        <div className="col-11 mb-3">
          <h3>Tabs</h3>
        </div>
        <div className='col-1 mr-5'>
          <CodeIcon onClick={() =>ShowExampleCode()} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
      </div>
   
      {showCode &&(
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode}/>
      )}
      <div className="tabs-wrapper">
         <PtgTabs 
          tabLabelArray={arrayObject}
        />
      </div>
    
    </div>

 
  );
};

export default TabExample;
