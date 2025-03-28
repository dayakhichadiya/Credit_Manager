
// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { db } from "../../Auth/firebaseConfig";
// import { auth } from "../../Auth/firebaseConfig";
// import { addDoc, collection } from "firebase/firestore";

// const AddCard = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardHolder, setCardHolder] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [bankName, setBankName] = useState("ICICI Bank"); // Default bank
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const formatCardNumber = (value) => {
//     return value.replace(/[^\d]/g, "").replace(/(.{4})/g, "$1 ").trim();
//   };

//   const handleExpiryChange = (e) => {
//     let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//     if (value.length > 2) {
//       value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
//     }
//     setExpiry(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!cardHolder.trim()) {
//       setError("Cardholder name is required");
//       return;
//     }
//     if (!/\d{4} \d{4} \d{4} \d{4}/.test(cardNumber)) {
//       setError("Please enter a valid card number");
//       return;
//     }
//     if (!/\d{2}\/\d{2}/.test(expiry)) {
//       setError("Please enter a valid expiry date in format MM/YY");
//       return;
//     }
//     if (!bankName.trim()) {
//       setError("Bank name is required");
//       return;
//     }
//     if (!/\d{3}/.test(cvv)) {
//       setError("Please enter a valid CVV");
//       return;
//     }

//     setError("");

//     const user = auth.currentUser;
//     if (!user) {
//       console.error("No user logged in");
//       return;
//     }

//     const newCard = {
//       cardNumber,
//       cardHolder,
//       expiry,
//       cvv,
//       bankName,
//       userId: user.uid,
//     };

//     try {
//       await addDoc(collection(db, "cards"), newCard);
//       alert("Card added successfully!");
//       navigate("/cardList");
//     } catch (error) {
//       console.error("Error adding card to Firestore:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative w-full">
//       <button
//         className="absolute top-4 right-6 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all"
//         onClick={() => navigate("/cardList")}
//       >
//         View Saved Cards
//       </button>

//       <h2 className="text-3xl font-bold text-blue-700 mb-6">Add New Card</h2>

//       {/* Card preview */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-96 shadow-lg mb-6">
//         <p className="text-sm mb-2">Card Preview</p>
//         <div className="flex justify-between uppercase text-lg mt-2 font-semibold">
//           <span>{cardHolder || "CARDHOLDER NAME"}</span>
//           <span>{expiry || "MM/YY"}</span>
//           <span>{bankName || "BANK NAME"}</span>
//         </div>
//         <div className="mt-4 text-xl font-bold tracking-widest">
//           {cardNumber || "**** **** **** ****"}
//         </div>
//       </div>

//       {/* Add card form */}
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <div>
//           <label className="block text-gray-700">Cardholder Name</label>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
//             placeholder="First Last"
//             value={cardHolder}
//             onChange={(e) => setCardHolder(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Card Number</label>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
//             placeholder="1234 5678 9012 3456"
//             maxLength="19"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Bank Name</label>
//           <select
//             className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
//             value={bankName}
//             onChange={(e) => setBankName(e.target.value)}
//           >
//             <option value="ICICI Bank">ICICI Bank</option>
//             <option value="SBI Bank">SBI Bank</option>
//             <option value="Dena Bank">Dena Bank</option>
//             <option value="HDFC Bank">HDFC Bank</option>
//           </select>
//         </div>

//         <div className="flex space-x-4">
//           <div className="w-1/2">
//             <label className="block text-gray-700">Expiry Date</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
//               placeholder="MM/YY"
//               maxLength="5"
//               value={expiry}
//               onChange={handleExpiryChange}
//             />
//           </div>

//           <div className="w-1/2">
//             <label className="block text-gray-700">CVV</label>
//             <input
//               type="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
//               placeholder="***"
//               maxLength="3"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//             />
//           </div>
//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition-all">
//           Add Card
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCard;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { db, auth } from "../../Auth/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankName, setBankName] = useState("ICICI Bank"); // Default bank
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(.{4})/g, "$1 ") // Add space every 4 digits
      .trim(); // Remove trailing spaces
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setExpiry(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cardHolder.trim()) {
      setError("Cardholder name is required");
      return;
    }
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      setError("Please enter a valid card number");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError("Please enter a valid expiry date in format MM/YY");
      return;
    }
    if (!bankName.trim()) {
      setError("Bank name is required");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError("Please enter a valid CVV");
      return;
    }

    setError("");

    const user = auth.currentUser;
    if (!user) {
      console.error("No user logged in");
      return;
    }

    const newCard = {
      cardNumber,
      cardHolder,
      expiry,
      cvv,
      bankName,
      userId: user.uid,
    };

    try {
      await addDoc(collection(db, "cards"), newCard);
      alert("Card added successfully!");
      navigate("/cardList");
    } catch (error) {
      console.error("Error adding card to Firestore:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative w-full">
      <button
        className="absolute top-4 right-6 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all"
        onClick={() => navigate("/cardList")}
      >
        View Saved Cards
      </button>

      <h2 className="text-3xl font-bold text-blue-700 mb-6">Add New Card</h2>

      {/* Card preview */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-96 shadow-lg mb-6">
        <p className="text-sm mb-2">Card Preview</p>
        <h3 className="text-md font-semibold">{bankName || "BANK NAME"}</h3>
        <div className="mt-3 text-lg font-bold tracking-widest">
          {cardNumber || "**** **** **** ****"}
        </div>
        <div className="flex justify-between mt-3 text-sm">
          <span>{cardHolder || "CARDHOLDER NAME"}</span>
          <span>{expiry || "MM/YY"}</span>
        </div>
        <p className="text-sm text-gray-300 mt-2">CVV: {cvv ? "***" : "XXX"}</p>
      </div>

      {/* Add card form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label className="block text-gray-700">Cardholder Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
            placeholder="First Last"
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
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-gray-700">Bank Name</label>
          <select
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          >
            <option value="ICICI Bank">ICICI Bank</option>
            <option value="SBI Bank">SBI Bank</option>
            <option value="Dena Bank">Dena Bank</option>
            <option value="HDFC Bank">HDFC Bank</option>
          </select>
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
              onChange={handleExpiryChange}
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

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition-all">
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
