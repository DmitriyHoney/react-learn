// import { useState } from "react";

export default function MyButton({ count, handleClick }) {
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => setCount(count + 1);
  const user = {
    name: "Dmitry",
  };
  return (
    <button onClick={handleClick}>
      {user.name} {count}
    </button>
  );
}
