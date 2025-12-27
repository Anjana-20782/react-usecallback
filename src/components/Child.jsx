import React, { memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Child Button</button>;
});

export default Child;
