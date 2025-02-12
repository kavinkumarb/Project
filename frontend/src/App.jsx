import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Accessories from "./pages/Accessories";
import Services from "./pages/Services";
import Customers from "./pages/Customers";
import UpcomingBikes from "./pages/UpcomingBikes";
import BikeDetails from "./pages/BikeDetails";
import PurchasedBikes from "./pages/PurchasedBikes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/bikeshowroom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/upcoming-bikes" element={<UpcomingBikes />} />
        <Route path="/bike-details/:id" element={<BikeDetails />} />
        <Route path="/purchased-bikes" element={<PurchasedBikes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
