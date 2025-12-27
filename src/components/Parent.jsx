import { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child onClick={handleClick} />
    </>
  );
}
