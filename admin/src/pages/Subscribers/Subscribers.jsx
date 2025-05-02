import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaSync, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Subscribers.css";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [subscriberToDelete, setSubscriberToDelete] = useState(null);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:4000/api/subscriber/subscribers"
      );
      // Sort by subscribedAt in descending order (newest first)
      const sortedSubscribers = response.data.sort(
        (a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt)
      );
      setSubscribers(sortedSubscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Failed to fetch subscribers", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/subscriber/${id}`);
      setSubscribers(subscribers.filter((subscriber) => subscriber._id !== id));
      toast.success("Subscriber deleted successfully", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      toast.error(
        error.response?.data?.message || "Failed to delete subscriber",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    }
  };

  const handleShowDeleteModal = (id) => {
    setSubscriberToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (subscriberToDelete) {
      handleDelete(subscriberToDelete);
      setShowModal(false);
      setSubscriberToDelete(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubscriberToDelete(null);
  };

  const handleRefresh = () => {
    fetchSubscribers();
  };

  return (
    <div className="s-container">
      <div className="s-header">
        <h2>Newsletter Subscribers</h2>
        <button
          className="s-refresh-button"
          onClick={handleRefresh}
          disabled={loading}
        >
          <FaSync className={loading ? "s-spinning" : ""} /> Refresh
        </button>
      </div>
      {loading ? (
        <div className="s-loading-spinner">
          <FaSync className="s-spinning" /> Loading...
        </div>
      ) : subscribers.length > 0 ? (
        <table className="s-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber._id}>
                <td>{subscriber.email}</td>
                <td>
                  {new Date(subscriber.subscribedAt).toLocaleDateString()}
                </td>
                <td>
                  <button
                    className="s-delete-button"
                    onClick={() => handleShowDeleteModal(subscriber._id)}
                    title="Delete Subscriber"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No subscribers yet.</p>
      )}

      {showModal && (
        <div className="s-modal-overlay">
          <div className="s-modal">
            <button className="s-modal-close" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this subscriber?</p>
            <div className="s-modal-buttons">
              <button
                className="s-modal-button s-confirm"
                onClick={handleConfirmDelete}
              >
                Confirm
              </button>
              <button
                className="s-modal-button s-cancel"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribers;
