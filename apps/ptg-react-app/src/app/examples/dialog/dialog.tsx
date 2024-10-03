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
    <div className='row'>
      <div className="col-11">
        <h5 className="font-weight-bold">Dialog/Modal</h5>
      </div>
      <div className='col-1 mr-5 mb-3'>
        <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
      </div>

      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} cssCode={cssCode} />
      )}
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
      </PtgModal>
    </div>
  );
};

export default DialogExample;
