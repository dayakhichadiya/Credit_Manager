import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Card from "./pages/CardList";
import Payment from "./pages/Payment";
import AddCard from "./pages/AddCard";
import CardList from "./pages/CardList";
import RegisterPage from "./pages/Register";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Transaction from "./component/Transaction";

function App () {
  return(
    <Router>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addcard" element={<AddCard />} />
            <Route path="/cards" element={<Card />} />
            <Route path="/cardList" element={<CardList />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/transaction" element={<Transaction />} />

          </Routes>
        </Router>

  )
};

export default App;


