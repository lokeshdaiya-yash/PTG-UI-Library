/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for input field
 *
 */
import './input.scss';


  interface PtgUiInputProps {
  type: string;
  value?: string ;
  onChange?: any;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  inputsize?: string;
  name?: string;
  // onBlur?: any;
  // ref?: any;
  // accessKey?: string;
  // maxlength?: any;
  // onKeyUp?: any;
  id?: string;
}

const defaultProps: PtgUiInputProps = {
  type: 'text',
  value: '',
  placeholder: '',
  disabled: false,
  required: false,
  inputsize: 'lg',
  // accessKey: '',
  id: 'inputId',
  name : 'inputName'
};

export function PtgUiInput({
  type,
  inputsize = '',
  required,
  id,
 ...rest
}: PtgUiInputProps) {
  const inputreq = required ? 'input-required' : 'Button-primary';
  return (
    <input
      type="text"
      className={['input', `${inputsize}`, `${inputreq}`].join(' ')}
      {...rest}
      data-testid={rest.name}
      id={id}
      name={ rest.name }
      value={rest.value}
      />
  );
}
PtgUiInput.defaultProps = defaultProps;
export default PtgUiInput;
