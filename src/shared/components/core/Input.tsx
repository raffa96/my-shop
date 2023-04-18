interface InputProps {
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { type, className, placeholder, value, disabled, onChange } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
