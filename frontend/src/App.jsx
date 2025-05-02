import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import About from "./pages/About/About";
import ExpansionStory from "./pages/About/ExpansionStory/ExpansionStory";
import FoodieJourney from "./pages/About/FoodieJourney/FoodieJourney";
import GrowthStrategy from "./pages/About/GrowthStrategy/GrowthStrategy";
import TitleUpdater from "./utils/TitleUpdater";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/foodie-journey" element={<FoodieJourney />} />
          <Route path="/blog/growth-strategy" element={<GrowthStrategy />} />
          <Route path="/blog/expansion-story" element={<ExpansionStory />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
