interface TextAreaProps {
  rows: number;
  cols: number;
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = (props: TextAreaProps) => {
  const { rows, cols, className, placeholder, value, disabled, onChange } =
    props;
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
