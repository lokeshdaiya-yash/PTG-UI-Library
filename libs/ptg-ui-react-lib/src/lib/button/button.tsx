/* eslint-disable jsx-a11y/no-access-key */
import './Button.scss';
import { Button, ButtonProps } from 'react-bootstrap';
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
  accessKey?: string;
  // onClick?: () => void;
}

const defaultProps: PtgUiButtonProps = {
  variant: 'primary',
  disabled: false,
  active: false,
  className: 'btn btn-primary btn-block',
  type: 'button',
};

export function PtgUiButton({ children, onClick, ...rest }: PtgUiButtonProps) {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

PtgUiButton.defaultProps = defaultProps;
export default PtgUiButton;
