import { PtgCircularDynamicProgressBar, PtgUiCircularProgressBar, PtgUiConditionalCircularProgressBar, PtgUiConditionalProgressBar, 
  PtgUiProgressBar } from "@ptg-ui/libs/ptg-ui-web-components-react/src";
import { PtgUiProgressBarFive } from "@ptg-ui/libs/ptg-ui-web-components-react/src";
import { PtgUiProgressGradientBar } from "@ptg-ui/libs/ptg-ui-web-components-react/src";
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from "react";
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from "../../common/showCode/showCodeComponent";


const ProgressBarExample = () => {

    const [showCode, setShowCode] = useState(false);
    const [gradientProgressCode, setGradientProgressCode] = useState(false);
    const [conditionalProgressCode, setConditionalProgressCode] = useState(false);
    const [dynamicProgressCode, setDynamicProgressCode] = useState(false);

    const [circularProgressCode, setCircularProgressCode] = useState(false);
    const [conditionalCircularCode, setConditionalCircularCode] = useState(false);
    const [dynamicCircularCode, setDynamicCircularCode] = useState(false);

    const ShowExampleCode = () => {
      setShowCode(!showCode);
    };

    const ShowGradientProgressCode = () => {
      setGradientProgressCode(!gradientProgressCode)
    };

    const ShowConditionalProgressCode = () => {
      setConditionalProgressCode(!conditionalProgressCode)
    };

    const ShowDynamicProgressCode = () => {
      setDynamicProgressCode(!dynamicProgressCode)
    };

    const ShowCircularProgressCode = () => {
      setCircularProgressCode(!circularProgressCode)
    };

    const ShowConditionalCirCode = () => {
      setConditionalCircularCode(!conditionalCircularCode)
    };

    const ShowDynamicCirCode = () => {
      setDynamicCircularCode(!dynamicCircularCode)
    };

    const componentCode = `
      import { PtgUiProgressBar } from "@ptg-ui/libs/ptg-ui-web-components-react/src";
  
      const ProgressBarExample = () => {}
  
      export default ProgressBarExample; `

    const htmlCode = `
      <PtgUiProgressBar 
      value={70} 
      color="green" 
      width={500}>
      </PtgUiProgressBar>
    `

    const gradientComponentCode = `
    import { PtgUiProgressGradientBar } from "@ptg-ui/libs/ptg-ui-web-components
    -react/src";

    const ProgressBarExample = () => {}

    export default ProgressBarExample; `

    const gradientHtmlCode = `
      <PtgUiProgressGradientBar 
      value={70} 
      width={500}>
      </PtgUiProgressGradientBar>
    `

    const conditionlComponentCode = `
    import { PtgUiConditionalProgressBar } from "@ptg-ui/libs/ptg-ui-web-
    components-react/src";

    const ProgressBarExample = () => {}

    export default ProgressBarExample; `

    const conditionalHtmlCode = `
    <PtgUiConditionalProgressBar value={33} width={500}></PtgUiConditionalProgressBar>
 
    <PtgUiConditionalProgressBar value={13} width={500}></PtgUiConditionalProgressBar>
   
    <PtgUiConditionalProgressBar value={100} width={500}></PtgUiConditionalProgressBar>
    `

    const dynamicComponentCode = `
    import { PtgUiProgressBarFive } from "@ptg-ui/libs/ptg-ui-web-components
    -react/src";
    const ProgressBarExample = () => {}

    export default ProgressBarExample; `

    const dynamicHtmlCode = `
    <PtgUiProgressBarFive width={500} progress-value={70}></PtgUiProgressBarFive>
    `

    const circularComponentCode = `
    import { PtgUiCircularProgressBar } from "@ptg-ui/libs/ptg-ui-web-components
    -react/src";

    const ProgressBarExample = () => {}

    export default ProgressBarExample; `

    const circularHtmlCode = `
    <PtgUiCircularProgressBar 
      size={100} 
      progress-amount={75}>
    </PtgUiCircularProgressBar>
    `

    const conditionalCirComponentCode = `
    import { PtgUiConditionalCircularProgressBar } from "@ptg-ui/libs/ptg-ui-web
    -components-react/src";

    const ProgressBarExample = () => {}

    export default ProgressBarExample; `

    const conditionalCirHtmlCode = `
    <PtgUiConditionalCircularProgressBar 
    progress-amount={22}
    size={100}>
    </PtgUiConditionalCircularProgressBar>
    
    <PtgUiConditionalCircularProgressBar 
    progress-amount={65} 
    size={100}>
    </PtgUiConditionalCircularProgressBar>
    
    <PtgUiConditionalCircularProgressBar 
    progress-amount={100} 
    size={100}>
    </PtgUiConditionalCircularProgressBar>
    `

    const dynamicCirComponentCode = `
    import { PtgCircularDynamicProgressBar } from "@ptg-ui/libs/ptg-ui-web-components-
    react/src";

    const ProgressBarExample = () => {}

    export default ProgressBarExample; `

    const dynamicCirHtmlCode = `
    <PtgCircularDynamicProgressBar 
    size={100} 
    progress-amount={90}>
    </PtgCircularDynamicProgressBar>
    `

    return (
      <>
      <div className="w-78">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="Linear Progress Bar">
          <div className='row'>
          <div className="col-11 mb-1">
          <h6 className="m-3">Basic Progress Bar</h6>
          </div>

          <div className='col-1 mr-3 mt-3'>
          <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>

          </div>
            <div className="m-3">
            {showCode && (
              <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
            )}
              <PtgUiProgressBar value={70} color="green" width={500}></PtgUiProgressBar>
            </div>

          <div className='row'>
          <div className="col-11 mb-1">
          <h6 className="m-3">Gradient Progress Bar</h6>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowGradientProgressCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>
          </div>

          <div className="m-3">
            {gradientProgressCode && (
              <ShowCodeComponent componentCode={gradientComponentCode} htmlCode={gradientHtmlCode} />
            )}
              <PtgUiProgressGradientBar value={70} width={500}></PtgUiProgressGradientBar>
            </div>

          <div className='row'>
          <div className="col-11 mb-1">
          <h6 className="m-3">Conditional Progress Bar</h6>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowConditionalProgressCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>
          </div>

          <div className="col-12 m-3">
            {conditionalProgressCode && (
              <ShowCodeComponent componentCode={conditionlComponentCode} htmlCode={conditionalHtmlCode} />
            )}
              <PtgUiConditionalProgressBar value={33} width={500}></PtgUiConditionalProgressBar>
              <br/>
              <PtgUiConditionalProgressBar value={13} width={500}></PtgUiConditionalProgressBar>
              <br/>
              <PtgUiConditionalProgressBar value={100} width={500}></PtgUiConditionalProgressBar>
            </div>

          <div className='row'>
          <div className="col-11 mb-1">
          <h6 className="m-3">Dynamic Progress Bar</h6>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowDynamicProgressCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>
          </div>

          <div className="col-12 m-3">
            {dynamicProgressCode && (
              <ShowCodeComponent componentCode={dynamicComponentCode} htmlCode={dynamicHtmlCode} />
            )}
              <PtgUiProgressBarFive width={500} progress-value={70}></PtgUiProgressBarFive>
            </div>
         
          </Tab>

        <Tab eventKey="3d" title="Circular Progress Bar">
          <div className='row'>
          <div className="col-11 mb-3">
          <h6 className="m-3">Basic Progress Bar</h6>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowCircularProgressCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>
          </div>
          
            <div className="col-12 m-3">
            {circularProgressCode && (
              <ShowCodeComponent componentCode={circularComponentCode} htmlCode={circularHtmlCode} />
            )}
              <PtgUiCircularProgressBar size={100} progress-amount={75}></PtgUiCircularProgressBar>
            </div>
          
          <div className='row'>
          <div className="col-11 mb-3">
          <h6 className="m-3">Conditional Progress Bar</h6>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowConditionalCirCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>
          </div>

          <div className="m-3">
            {conditionalCircularCode && (
              <ShowCodeComponent componentCode={conditionalCirComponentCode} htmlCode={conditionalCirHtmlCode} />
            )}
            <PtgUiConditionalCircularProgressBar progress-amount={22} size={100}></PtgUiConditionalCircularProgressBar>
            <br/>
            <PtgUiConditionalCircularProgressBar progress-amount={65} size={100}></PtgUiConditionalCircularProgressBar>
            <br/>
            <PtgUiConditionalCircularProgressBar progress-amount={100} size={100}></PtgUiConditionalCircularProgressBar>
            <br/>
            </div>
        
          <div className='row'>
          <div className="col-11 mb-3">
          <h6 className="m-3">Dynamic Progress Bar</h6>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowDynamicCirCode} fontSize="medium" className='show-code-icon'></CodeIcon> 
          </div>
          </div>

          <div className="m-3">
            {dynamicCircularCode && (
              <ShowCodeComponent componentCode={dynamicCirComponentCode} htmlCode={dynamicCirHtmlCode} />
            )}
              <PtgCircularDynamicProgressBar size={100} progress-amount={90}></PtgCircularDynamicProgressBar>
            </div>
          
          </Tab>
      </Tabs>
    </div> 
    </>
  )
};

export default ProgressBarExample;
