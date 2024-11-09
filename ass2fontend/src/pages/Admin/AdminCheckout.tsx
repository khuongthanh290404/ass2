import React, { useEffect, useState } from "react";

const AdminCheckout = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const handleOrderComplete = (index) => {
    const updatedOrders = orders.filter((_, idx) => idx !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Order marked as completed!");
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Admin - Checkout Orders</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Order Details</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">
                No orders found.
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderDate}</td>
                <td>{order.userInfo.name}</td>
                <td>{order.userInfo.email}</td>
                <td>{order.userInfo.phone}</td>
                <td>{order.userInfo.address}</td>
                <td>
                  {order.cartItems.map((item, idx) => (
                    <div key={idx}>
                      <p>
                        {item.title} - Quantity: {item.quantity}
                      </p>
                    </div>
                  ))}
                </td>
                <td>
                  {order.cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}{" "}
                  đ
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleOrderComplete(index)}
                  >
                    Mark as Completed
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCheckout;
