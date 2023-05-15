import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { type, name, className, placeholder, value, disabled, onChange } =
    props;
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
