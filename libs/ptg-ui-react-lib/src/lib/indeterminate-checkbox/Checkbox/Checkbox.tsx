/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for Indeterminate Checkbox
 */

import "./checkbox.scss";

interface checkboxProps{
  isChecked?: boolean;
  indeterminate?: any;
  onClick?: () => void;
};

function Checkbox({ isChecked = false, onClick,indeterminate= false }:checkboxProps) {
  return (
    <>
    <label><span className="indeterminatespan">{'.'}</span>
    <input 
      className={`checkbox ${indeterminate ? 'isIndeterminate' : ''}`}
      type="checkbox"
      checked={isChecked}
      onClick={onClick}
    />
    </label>
    </>
  );
};

export default Checkbox;
