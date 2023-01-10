import { useState } from "react";

const ShowName = () => {
  const [name, setName] = useState("Yoda");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Darth Vader")}>Click</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default ShowName;
