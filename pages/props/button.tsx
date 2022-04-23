interface ButtonProps {
  text: String;
  bottomText?: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonFromProps: React.FC<ButtonProps> = ({
  text,
  bottomText,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="mt-5 border-double border-4 border-sky-500 bg-blue-100"
    >
      <p className="p-5 text-3xl font-bold">{text}</p>
      {bottomText && <p className="p-5 text-3xl font-bold">{bottomText}</p>}
    </button>
  );
};

export default ButtonFromProps;
