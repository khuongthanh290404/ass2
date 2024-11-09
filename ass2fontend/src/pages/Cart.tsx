import React from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "../interface/Cart";

const CartPage = () => {
  const navigate = useNavigate();
  const cart: Cart[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([])); // Clear the cart in localStorage
    window.location.reload(); // Reload the page to update the cart display
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Shopping Cart</h2>
      {cart.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: Cart) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>
                  <img src={item.thumbnail} alt={item.title} width={100} />
                </td>
                <td>{item.quantity}</td>
                <td>{item.price} đ</td>
                <td>{item.price * item.quantity} đ</td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="text-end">
                <strong>Total: </strong>
              </td>
              <td className="text-danger">
                {cart.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                )}{" "}
                đ
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="text-end">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>
                <button className="btn btn-danger" onClick={clearCart}>
                  Clear Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-center">Your cart is currently empty.</p>
      )}
    </div>
  );
};

export default CartPage;
