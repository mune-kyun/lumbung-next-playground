import { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState<string>("");

  const fetchImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";

    fetch(url)
      .then((res) => {
        if (res.status == 200) return res.json();
      })
      .then((res) => {
        setData(res[0].url);
        console.log(res[0]);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    if (data.includes("jpg")) alert("data fetched");
  }, [data]);

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      {data.length > 0 && (
        <img src={data} alt="Catto" className="w-1/2 h-1/2" />
      )}
      <button
        onClick={fetchImage}
        className="mt-5 border-solid border-4 border-sky-500 bg-blue-300"
      >
        <p className="p-5">FETCH IMAGE</p>
      </button>
    </div>
  );
};

export default Fetch;
