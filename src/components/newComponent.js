import React, { useState } from "react";

const RandomQuote = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The best way to predict the future is to create it.",
    "Your time is limited, don't waste it living someone else's life.",
    "The purpose of our lives is to be happy.",
    "THIS IS A NEW QUOTE THAT SHOULD MAKE YOU FEEL INSPIRED",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <p>{quote}</p>
      <button onClick={handleClick}>Get Random Quote</button>
    </div>
  );
};

export default RandomQuote;
