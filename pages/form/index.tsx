import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    alert("SUBMITTED " + text);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            className="border-solid border-4 border-sky-500"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mt-5 border-solid border-4 border-sky-500 bg-blue-300"
        >
          <p className="p-5">SUBMIT</p>
        </button>
      </form>
    </div>
  );
};

export default Form;
