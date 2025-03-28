import React, { useState } from "react";
import AddCard from "./AddCard";
import CardList from "./CardList";

const CardManager = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <AddCard setCards={setCards} cards={cards} />
      <CardList cards={cards} />
    </div>
  );
};

export default CardManager;
