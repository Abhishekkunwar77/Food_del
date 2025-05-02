import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Check if admin is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to access the dashboard", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="home-welcome">
        <h3>Welcome, Admin</h3>
        <p>Manage your Foodie platform with ease.</p>
      </div>
    </div>
  );
};

export default Home;
