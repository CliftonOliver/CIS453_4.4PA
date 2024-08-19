import React, { useState } from "react";

const Counter = () => {
  const [clicks, setClicks] = useState(0);

  const handleIncrement = () => {
    setClicks(clicks + 1);
  };

  const handleDecrement = () => {
    if (clicks > 0) {
      setClicks(clicks - 1);
    }
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Number of Clicks: {clicks}</p>
    </div>
  );
};

export default Counter;
