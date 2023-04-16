interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { className, disabled, children } = props;
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
