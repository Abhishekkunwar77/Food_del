import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />
      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="navbar-actions">
            <img className="profile" src={assets.profile_image} alt="Profile" />
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
