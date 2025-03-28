// import React, { useState } from "react";

// const Purchase = () => {
//   const [name, setName] = useState("FULL NAME");
//   const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
//   const [expiry, setExpiry] = useState("MM/YY");
//   const [cvc, setCvc] = useState("CVC");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   const formatCardNumber = (value) => {
//     return value.replace(/[^\d]/g, "").replace(/(.{4})/g, "$1 ").trim();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!name.trim()) {
//       setErrorMsg("Name is required");
//       return;
//     }
//     if (!/\d{4} \d{4} \d{4} \d{4}/.test(cardNumber)) {
//       setErrorMsg("Please enter a valid card number");
//       return;
//     }
//     if (!/\d{2}\/\d{2}/.test(expiry)) {
//       setErrorMsg("Please enter a valid expiry date in format MM/YY");
//       return;
//     }
//     if (!/\d{3}/.test(cvc)) {
//       setErrorMsg("Please enter a valid CVC");
//       return;
//     }
//     setErrorMsg("");
//     setSuccess(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       {!success ? (
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Card Payment</h2>
//           <div className="bg-blue-600 text-white p-4 rounded-lg mb-4">
//             <h3 className="text-lg">{cardNumber}</h3>
//             <h3 className="text-sm uppercase">{name}</h3>
//             <div className="flex justify-between text-sm mt-2">
//               <span>{expiry}</span>
//               <span>{cvc}</span>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Card Holder"
//               className="w-full border p-2 rounded-lg"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="XXXX XXXX XXXX XXXX"
//               className="w-full border p-2 rounded-lg"
//               maxLength="19"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
//             />
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 className="w-1/2 border p-2 rounded-lg"
//                 maxLength="5"
//                 value={expiry}
//                 onChange={(e) => setExpiry(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="CVC"
//                 className="w-1/2 border p-2 rounded-lg"
//                 maxLength="3"
//                 value={cvc}
//                 onChange={(e) => setCvc(e.target.value)}
//               />
//             </div>
//             {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//               Purchase
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
//           <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
//           <p className="text-gray-700 mt-2">Your purchase was successful.</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Purchase;
