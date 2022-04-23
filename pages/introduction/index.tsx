const Introduction = () => {
  const element = <div className="text-5xl font-bold">World Hello</div>;

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-3xl font-bold">Hello world</div>
      {element}
    </div>
  );
};

export default Introduction;
