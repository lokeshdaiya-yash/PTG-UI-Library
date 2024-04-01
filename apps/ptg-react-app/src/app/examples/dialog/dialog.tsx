/**
 * @since December 2023
 * @author Nimish Jain
 * @uses Example using dialog/modal as reusable component.
 *
*/

import { useState } from 'react';
import { PtgButton, PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const DialogExample = () => {
  const [showCode, setShowCode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const modalClosed = (event) => {
    setIsOpen(false);
  }

  const confirmClicked = (event) => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const componentCode = `
  import PtgModal from '@ptg-ui/ptg-ui-web-components-react';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  const [isOpen, setIsOpen] = useState(false);

  const modalClosed = (event) => {
    setIsOpen(false);
  }

  const confirmClicked = (event) => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }

  export default DialogExample;
  `

  const cssCode = `
  import '@ptg-ui-web-components/src/global/global.css'`;

  const htmlCode = `
      <PtgButton text="Open Modal" data-testid="openButton" appearance="primary" onClick={openModal}
        btnIconAlignment='left' >
        <div slot="btnIcon">
          <AddCircleIcon />
        </div>
      </PtgButton>

      <PtgModal isOpen={isOpen} onConfirmClose={confirmClicked}
        modal-size='lg' modal-header-name="Header Name Here"
        confirm-button-name="Okay" onModalClose={modalClosed}>
        <div slot="body-block">
          <h2>React Slot for Body</h2>
        </div>
      </PtgModal>`
  return (
    <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
    <div className='row'>
      <div className="col-10 mt-1">
        <h5 className="font-weight-bold example-heading">Dialog/Modal</h5>
      </div>
      <div className='col-2 mr-5 mb-2'>
        <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
      </div>
      <hr className='horizontal-line'/>

      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} cssCode={cssCode} />
      )}
      <div className='ms-2'>
      <PtgButton  text="" data-testid="openButton" appearance="primary" onClick={openModal}
       >
        <div slot="btnIcon">
          <AddCircleIcon />
        </div>
      </PtgButton>
      </div>

      <PtgModal isOpen={isOpen}  onConfirmClose={confirmClicked}
        modal-size='lg' modal-header-name="Header Name Here"
        confirm-button-name="Okay" onModalClose={modalClosed}>
        <div slot="body-block">
          <h2>React Slot for Body</h2>
        </div>
      </PtgModal>
    </div>
    </section>
  );
};

export default DialogExample;
