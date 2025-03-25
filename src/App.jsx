import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Card from "./pages/CardList";
import Payment from "./pages/Payment";
import AddCard from "./pages/AddCard";
import CardList from "./pages/CardList";

function App () {
  return(
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addcard" element={<AddCard />} />
            <Route path="/cards" element={<Card />} />
            <Route path="/cardList" element={<CardList />} />
            <Route path="/payments" element={<Payment />} />
          </Routes>
        </Router>
  )
};

export default App;
