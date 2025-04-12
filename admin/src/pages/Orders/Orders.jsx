import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Orders = ({ url }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const fetchAllOrder = async () => {
    try {
      const token = localStorage.getItem("token"); // Adjust based on your auth setup
      if (!token) {
        toast.error("Please log in to view orders");
        navigate("/login"); // Redirect to login page
        return;
      }
      console.log("Requesting URL:", url + "/api/order/list");
      const response = await axios.get(url + "/api/order/list", {
        headers: {
          token: token, // Send token as 'token' header
        },
      });
      console.log("Response:", response.data);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log("Orders:", response.data.data);
      } else {
        console.error("API error:", response.data.message);
        toast.error(response.data.message); // Show "Not Authorized Login Again"
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching orders");
    }
  };


  const statusHandler = async (event, orderId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to update status");
        navigate("/login");
        return;
      }
      const response = await axios.post(
        url + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        {
          headers: {
            token: token, // Send token as 'token' header
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAllOrder();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Status update error:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || "Error updating status");
    }
  };

  useEffect(() => {
    fetchAllOrder();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item, idx) => {
                    if (idx === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount.toFixed(2)}</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
