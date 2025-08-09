import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [foodIdToDelete, setFoodIdToDelete] = useState(null);

  // Check if admin is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to see items");
      navigate("/login");
    }
  }, [navigate]);

  const fetchList = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/api/food/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      toast.error("Error fetching list");
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  const removeFood = async (foodId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${url}/api/food/remove`,
        { id: foodId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing item");
      }
    } catch (error) {
      toast.error("Error removing item");
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  const handleRemoveClick = (foodId) => {
    setFoodIdToDelete(foodId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (foodIdToDelete) {
      removeFood(foodIdToDelete);
    }
    setShowModal(false);
    setFoodIdToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setFoodIdToDelete(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchList();
    }
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => handleRemoveClick(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this item?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="modal-confirm">
                Yes, Delete
              </button>
              <button onClick={cancelDelete} className="modal-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
