interface propsInterface {
  url: string;
}

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

export async function getStaticProps() {
  const url = "https://api.thecatapi.com/v1/images/search";

  const imgUrl = await fetch(url)
    .then((res) => {
      if (res.status == 200) return res.json();
    })
    .then((res) => {
      return res[0].url;
    });

  return {
    props: {
      url: imgUrl,
    },
    revalidate: 10,
  };
}

export default GettoStaticProps;
