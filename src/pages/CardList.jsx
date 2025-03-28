
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// const CardList = () => {
//   const [cards, setCards] = useState([]); // saved cards
//   const navigate = useNavigate();

//   const loggedInUser = localStorage.getItem("loggedInUser")


//   useEffect(() => {
//     const savedCards = localStorage.getItem("cards");
//     let parsedCards = [];

//     if (savedCards) {
//       try {
//         parsedCards = JSON.parse(savedCards);
//         if (!Array.isArray(parsedCards)) {
//           parsedCards = [];
//         }
//       } catch (error) {
//         console.error("Error parsing saved cards:", error);
//         parsedCards = [];
//       }
//     }

//     setCards(parsedCards);
//   }, []); 

//   // Delete card 
//   const handleDelete = (index) => {
//     const updatedCards = cards.filter((_, i) => i !== index);
//     setCards(updatedCards);
//     localStorage.setItem("cards", JSON.stringify(updatedCards)); // Save updated list
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6">Saved Cards</h2>

//       {/* If no cards saved */}
//       {cards.length === 0 ? (
//         <p className="text-gray-600">No saved cards.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-80 shadow-lg relative"
//             >
//               <p className="text-sm">Card Preview</p>
//               <div className="flex justify-between text-lg font-semibold">
//                 <span>{card.cardHolder || "Unknown Holder"}</span>
//                 <span>{card.expiry || "MM/YY"}</span>
//               </div>
//               <div className="mt-4 text-xl font-bold tracking-widest">
//                 {(card.cardNumber ? card.cardNumber.replace(/\d{12}(\d{4})/, "**** **** **** $1") : "**** **** **** ****")}
//               </div>
//               <button
//                 className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Button to go back to add a new card */}
//       <button
//         className="mt-6 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
//         onClick={() => navigate("/addcard")}
//       >
//         Add New Card
//       </button>
//     </div>
//   );
// };

// export default CardList;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../Auth/firebaseConfig";
import { db } from "../../Auth/firebaseConfig";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";



const CardList = () => {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchCards(currentUser.uid);
      } else {
        navigate("/login"); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);


  const fetchCards = async (userId) => {
    try {
        if (!userId) {
            console.error("No user ID found");
            return;
        }

        console.log("Fetching cards for user:", userId); 

        const q = query(collection(db, "cards"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        console.log("Firestore query executed.");
        
        if (querySnapshot.empty) {
            console.log("No cards found for this user.");
        } else {
            console.log("Cards fetched:", querySnapshot.docs.map(doc => doc.data()));
        }

        const userCards = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCards(userCards);
    } catch (error) {
        console.error("Error fetching cards:", error);
    }
};
 

  // Delete card from Firestore
  const handleDelete = async (cardId) => {
    await deleteDoc(doc(db, "cards", cardId));
    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Saved Cards</h2>

      {cards.length === 0 ? (
        <p className="text-gray-600">No saved cards.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-80 shadow-lg relative"
            >
              <p className="text-sm">{}</p>
              <div className="flex justify-between text-lg font-semibold">
                <span>{card.cardHolder || "Unknown Holder"}</span>
                {/* <span>{card.cvv || "Unknown cvv"}</span> */}
                <span>{card.expiry || "MM/YY"}</span>
              </div>
              <div className="mt-4 text-xl font-bold tracking-widest">
                {card.cardNumber ? card.cardNumber.replace(/\d{12}(\d{4})/, "**** **** **** $1") : "**** **** **** ****"}
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
                onClick={() => handleDelete(card.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        onClick={() => navigate("/addcard")}
      >
        Add New Card
      </button>
    </div>
  );
};

export default CardList;

