/**
 * @since Oct 2024
 * @author Manish Patidar
 * @desc Reusable Signup Component
 *
 */
import { useState } from 'react';
import './signup.scss';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../../common/showCode/showCodeComponent';
import { PtgUiSignup } from '@ptg-ui/react';

export interface PtgSignupProps {}

export function PtgSignup(props: PtgSignupProps) {
  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
    import { PtgUiSignup } from '@ptg-ui/react';
  `;

  const htmlCode = `
    <PtgUiSignup />
  `;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Signup</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <PtgUiSignup />
      </div>
    </React.Fragment>
  );
}
export default PtgSignup;
