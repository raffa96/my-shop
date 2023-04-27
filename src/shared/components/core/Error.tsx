interface ErrorProps {
  message: string;
}

export const Error = (props: ErrorProps) => {
  const { message } = props;
  return (
    <div className="p-3 my-6 text-white bg-red-800 rounded-xl">{message}</div>
  );
};
