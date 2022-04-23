interface propsInterface {
  url: string;
}

const url = "https://api.thecatapi.com/v1/images/search";

const GettoStaticProps = (props: propsInterface) => {
  const element = <div className="text-5xl font-bold">{props.url}</div>;

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-3xl font-bold">Hello world</div>
      {element}
      <img src={props.url} alt="cat" />
    </div>
  );
};

// TODO: GETSTATICPROPS

export default GettoStaticProps;
