import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Auth/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch current logged-in user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserCards(currentUser.uid);
        fetchUserTransactions(currentUser.uid);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch Cards for Logged-in User
  const fetchUserCards = async (userId) => {
    try {
      const q = query(collection(db, "cards"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const userCards = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCards(userCards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  // Fetch Transactions for Logged-in User
  const fetchUserTransactions = async (userId) => {
    try {
      const q = query(collection(db, "transactions"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const userTransactions = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactions(userTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Dashboard</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all"
          onClick={() => navigate("/addCard")}
        >
          Add New Card
        </button>
      </div>

      {/* Cards Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Total Cards</h3>
          <p className="text-2xl font-bold text-blue-600">{cards.length}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Total Spending</h3>
          <p className="text-2xl font-bold text-green-600">
            ${transactions.reduce((sum, txn) => sum + txn.amount, 0)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Most Recent Expense</h3>
          <p className="text-2xl font-bold text-red-600">
            ${transactions.length > 0 ? transactions[0].amount : 0}
          </p>
        </div>
      </div>

      {/* Card List */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Saved Cards</h3>
        {cards.length === 0 ? (
          <p className="text-gray-500">No saved cards</p>
        ) : (
          <ul className="space-y-2">
            {cards.map((card) => (
              <li key={card.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <span className="font-semibold">{card.cardHolder}</span> - **** **** ****{" "}
                {card.cardNumber.slice(-4)}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Recent Transactions List */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions found</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Description</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 5).map((txn) => (
                <tr key={txn.id} className="border-b">
                  <td className="p-2">{txn.date || "Unknown"}</td>
                  <td className="p-2">{txn.description || "N/A"}</td>
                  <td className="p-2 font-bold text-red-600">${txn.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
  