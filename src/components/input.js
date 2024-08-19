import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter some text"
        value={text}
        onChange={handleInputChange}
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};

export default Input;
