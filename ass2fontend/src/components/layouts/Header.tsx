import { Link } from "react-router-dom";
import LogOut from "./../LogOut"; // Import component LogOut
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = () => {
    const getUser = localStorage.getItem("user") || null;
    const user = JSON.parse(getUser!);
    setUser(user);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mobile Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            {!user && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {user && (
              <>
                <li className="nav-item d-flex align-items-center">
                  {user.image && (
                    <img
                      src={user.image}
                      alt="User Avatar"
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px" }} // Customize size as needed
                    />
                  )}
                </li>
                <li className="nav-item">
                  <LogOut />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
