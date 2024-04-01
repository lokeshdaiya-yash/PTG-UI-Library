import React, { useState } from 'react';
import { PtgButton, PtgSpinner } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import "./breadcrumbs.scss";

export default function Button() {
  const [showCode, setShowCode] = useState(false);

  const { t } = useTranslation();

  const breadCrumbsDataArr: any = [
    { title: `${t('HOME')}`, link: '/home' },
    { title: `${t('ABOUT_US')}`, link: '/about' },
    { title: `${t('CONTACT_US')}`, link: '/contact' },
  ];
  const componentCode = `
  import { PtgButton } from '@ptg-ui/ptg-ui-web-components-react';
  export default function Button() {
  }`;

  const htmlCode = `
    <PtgButton text="Primary" appearance="primary">
    </PtgButton>
    <PtgButton text="Secondary" appearance="secondary">
    </PtgButton>
    <PtgButton text="Warning" appearance="warning">
    </PtgButton>
    <PtgButton text="Success" appearance="success">
    </PtgButton>
    <PtgButton text="Danger" appearance="danger">
    </PtgButton>
    <PtgButton text="Info"  appearance="info">
    </PtgButton>
    <PtgButton text="Light" appearance="light">
    </PtgButton>
    <PtgButton text="Dark" appearance="dark">
    </PtgButton>
 `;

  return (
    <>
   <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
    <div className="row">
      <div className="col-10 mb-2 mt-2">
        <h5 className="font-weight-bold example-heading">Buttons</h5>
      </div>
      <div className="col-2">
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
      <div className="col-lg-12 col-md-12 col-sm-6 col-xs-2 ms-3 mt-2">
        <div className='row'>

        <div className='col mb-2'>
        <PtgButton text="Primary" data-testid="openButton" appearance="primary">
        </PtgButton>
        </div>
        
        <div className='col mb-2'>
        <PtgButton text="Secondary" data-testid="openButton" appearance="secondary">
        </PtgButton>
        </div>
        
        <div className='col mb-2'>
        <PtgButton text="Warning" data-testid="openButton" appearance="warning">
        </PtgButton>
        </div>

        <div className='col mb-2'>
        <PtgButton text="Success" data-testid="openButton" appearance="success">
        </PtgButton>
        </div>

        <div className='col mb-2'>
        <PtgButton text="Danger" data-testid="openButton" appearance="danger">
        </PtgButton>
        </div>

        <div className='col mb-2'>
        <PtgButton text="Info" data-testid="openButton" appearance="info">
        </PtgButton>
        </div>

        <div className='col mb-2'>
        <PtgButton text="Light" data-testid="openButton" appearance="light">
        </PtgButton>
        </div>

        <div className='col mb-2'>
        <PtgButton text="Dark" data-testid="openButton" appearance="dark">
        </PtgButton>
        </div>
        </div>
        </div>
      </div>
      </section>
    
    <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
    <div className="row">
      <div className="col-10 mb-2 mt-2">
        <h5 className="font-weight-bold example-heading">Button with Icon</h5>
      </div>
      <div className="col-2">
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
      <div className="col-lg-12 col-md-12 col-sm-6 col-xs-4 ms-3 mt-2">
        <h6>Icon Alignment Left</h6>
      {/* <div className='row'> */}
        <div className='col-2 mb-2'>
        <PtgButton text="Primary" data-testid="openButton" appearance="primary" btnIconAlignment='left'>
        <div slot="btnIcon">
          <AddCircleIcon />
        </div>
        </PtgButton>
        </div>

        <div className='col-5 mb-2 mt-4'>
        <h6>Icon Alignment Right</h6>
      
        <PtgButton text="Primary" data-testid="openButton" appearance="primary" btnIconAlignment='right'>
        <div slot="btnIcon">
          <AddCircleIcon />
        </div>
        </PtgButton>
        </div>
     
        <div className='col-2 mb-2'>
          <h6>Icon</h6>
        <PtgButton data-testid="openButton" appearance="secondary" btnIconAlignment='left'>
        <div slot="btnIcon">
          <AddCircleIcon />
        </div>
        </PtgButton>
        </div> 
        </div>

      </div>
      {/* </div> */}
      </section>
    
    </>  
   
  );
}



