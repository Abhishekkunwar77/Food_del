import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import emptyCartImage from "../../assets/EmptyCart.png"; // Adjusted to match your image name

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  // Check if cart is empty
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="cart-empty">
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="cart-empty-image"
          />
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items yet!</p>
          <button onClick={() => navigate("/")}>Explore Menu</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id}>
                    <div className="cart-items-title cart-items-item">
                      <img src={url + "/images/" + item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount().toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>
                    ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                  </b>
                </div>
              </div>
              <button onClick={() => navigate("/order")}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cart-promocode">
              <p>If you have a promo code, Enter it here </p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
