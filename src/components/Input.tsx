import { Input as MaterialUIInput } from '@material-tailwind/react';
import { type ChangeEventHandler, type HTMLInputTypeAttribute } from 'react';

interface Props {
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  pattern?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: string | readonly string[] | number | undefined;
}

const Input = ({ label, type = 'text', value, onChange, required, pattern }: Props) => (
  <MaterialUIInput
    variant="outlined"
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    pattern={pattern}
    required={required}
  />
);

export default Input;
