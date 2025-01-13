

// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import Destinations from "./pages/Destinations/Destinations";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile/Profile"; // Import the Profile page
import BusBooking from "./components/BusBooking/BusBooking";
import TrainBooking from "./components/TrainBooking/TrainBooking";
import FlightBooking from "./components/FlightBooking/FlightBooking";
import HotelBooking from "./components/HotelBooking/HotelBooking";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tour-details" element={<TourDetails />} />
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="gallery" element={<PhotoGallery />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} /> // Add the Profile page to the routing
        <Route path="bus-booking" element={<BusBooking />} />
        <Route path="train-booking" element={<TrainBooking />} />
        <Route path="flight-booking" element={<FlightBooking />} />
        <Route path="hotel-booking" element={<HotelBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;