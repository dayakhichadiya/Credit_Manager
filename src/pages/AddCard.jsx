import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
 

  const navigate = useNavigate()

  const saveList = () => {
    navigate("/cardList");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !cardHolder || !expiry || !cvv) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Card Added Successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
       <div className="w-96 max-w-3xl flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Add New Card</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all"
          onClick={saveList}
        >
          View Saved Cards
        </button>
      </div>

      {/* card preview */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-80 shadow-lg mb-6">
        <p className="text-sm mb-2">Card Preview</p>
        <div className="flex justify-between text-lg font-semibold">
          <span>{cardHolder || "CARDHOLDER NAME"}</span>
          <span>{expiry || "MM/YY"}</span>
        </div>
        <div className="mt-4 text-xl font-bold tracking-widest">
          {cardNumber || "**** **** **** ****"}
        </div>
      </div>


      {/* add card  */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
      >
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label className="block text-gray-700">Cardholder Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
            placeholder="firstName lastName"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
              maxLength="5"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700">CVV</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="***"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition-all"
        >
          Add Card
        </button>
      </form>
      
      
    </div>
  );
};

export default AddCard;
