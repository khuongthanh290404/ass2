import React, { useState } from "react";
import { Cart } from "../interface/Cart";

const CheckoutPage = () => {
  const cart: Cart[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [customerInfo, setCustomerInfo] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (
      !customerInfo.name ||
      !customerInfo.phone ||
      !customerInfo.address ||
      !customerInfo.email
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const checkoutData = {
      orderDate: new Date().toLocaleString(),
      cartItems: cart,
      userInfo: customerInfo,
    };

    // Retrieve existing orders and add the new order
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(checkoutData);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear the cart
    localStorage.setItem("cart", "[]");
    alert("Checkout successful! Your order has been placed.");
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Checkout</h2>

      {/* Customer Information Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h4>Customer Information</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <h4>Order Summary</h4>
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
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}{" "}
              đ
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="text-end">
              <button className="btn btn-primary" onClick={handleCheckout}>
                Confirm and Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutPage;
