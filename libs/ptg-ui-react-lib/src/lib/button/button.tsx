/* eslint-disable jsx-a11y/no-access-key */
import './button.scss';
import { Button, ButtonProps } from 'react-bootstrap';
import classNames from 'classnames';
/* eslint-disable-next-line */
/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Button
 *
 */

interface PtgUiButtonProps extends ButtonProps {
  variant?: string;
  value?: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  // accessKey?: string;
  // onClick?: () => void;
}

const defaultProps: PtgUiButtonProps = {
  variant: 'primary',
  disabled: false,
  active: false,
  // className: 'btn btn-primary btn-block',
  type: 'button',
  
};


export function PtgUiButton({ variant='',children, disabled , active , onClick, ...rest }: PtgUiButtonProps) {
  const mode = active ? 'Button-active' : 'Button-primary';
  return (
    <Button className={['button',`${variant}`,`${mode}`].join(' ')} onClick={onClick} {...rest}  disabled={disabled}  >
      {children}
    </Button>
  );
}

PtgUiButton.defaultProps = defaultProps;
export default PtgUiButton;
