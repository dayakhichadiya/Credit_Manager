import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Auth/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchTransactions(currentUser.uid);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchTransactions = async (userId) => {
    try {
      if (!userId) {
        console.error("No user ID found");
        return;
      }

      console.log("Fetching transactions for user:", userId);

      const q = query(collection(db, "transactions"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No transactions found for this user.");
      } else {
        console.log("Transactions fetched:", querySnapshot.docs.map(doc => doc.data()));
      }

      const userTransactions = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactions(userTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-600">No transactions available.</p>
      ) : (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="text-center border-b border-gray-300">
                  <td className="p-3 border">{transaction.date || "N/A"}</td>
                  <td className="p-3 border">{transaction.description || "No description"}</td>
                  <td className="p-3 border">${transaction.amount || "0.00"}</td>
                  <td className={`p-3 border font-bold ${transaction.status === "Completed" ? "text-green-500" : "text-red-500"}`}>
                    {transaction.status || "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transaction;
