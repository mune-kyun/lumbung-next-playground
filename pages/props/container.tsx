interface ContainerProps {
  children: React.ReactNode;
}

const ContainerFromProps: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="border-double border-4 border-sky-500 w-full flex flex-col items-center">
      {children}
    </div>
  );
};

export default ContainerFromProps;
