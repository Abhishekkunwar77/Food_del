import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [foodIdToDelete, setFoodIdToDelete] = useState(null);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  const handleRemoveClick = (foodId) => {
    setFoodIdToDelete(foodId);
    setShowModal(true); // Show the modal
  };

  const confirmDelete = () => {
    if (foodIdToDelete) {
      removeFood(foodIdToDelete); // Proceed with deletion
    }
    setShowModal(false); // Close the modal
    setFoodIdToDelete(null); // Reset
  };

  const cancelDelete = () => {
    setShowModal(false); // Close the modal
    setFoodIdToDelete(null); // Reset
  };

  useEffect(() => {
    fetchList();
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
              <img src={`${url}/images/` + item.image} alt={item.name} />
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
