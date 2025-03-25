import React from "react";

const CardList = ({ cards }) => {
  return (
    <div className="mt-6 w-96">
      <h3 className="text-xl font-bold mb-4">Saved Cards</h3>
      <ul className="space-y-3">
        {cards.length === 0 ? (
          <p className="text-gray-500">No cards saved.</p>
        ) : (
          cards.map((card, index) => (
            <li key={index} className="bg-white p-4 shadow rounded-lg">
              <p className="font-semibold">{card.cardHolder}</p>
              <p className="text-gray-600">
                {card.cardNumber.replace(/\d(?=\d{4})/g, "*")}
              </p>
              <p className="text-gray-800">Expiry: {card.expiry}</p>
            </li>
          ))
        )}
      </ul>

      <h1>Saved list</h1>
    </div>
  );
};

export default CardList;
