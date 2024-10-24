import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user || user.role !== "admin") {
    return (
      <div className="container mt-5 text-center">
        <h1 className="text-danger">You don't have permission!</h1>
        <Link to="/" className="btn btn-primary mt-3">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            Admin Dashboard
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
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link text-light">Hello, {user.email}</span>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar + Main Content */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark sidebar py-4 "
            style={{ height: "100vh", overflowY: "auto" }} // Thêm style cho sidebar
          >
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/admin/category" className="nav-link text-light">
                    <i className="fas fa-list-alt me-2"></i> Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/products" className="nav-link text-light">
                    <i className="fas fa-boxes me-2"></i> Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/user" className="nav-link text-light">
                    <i className="fas fa-users me-2"></i> Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/dasboard" className="nav-link text-light">
                    <i className="fas fa-chart-line me-2"></i> Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 offset-md-3 offset-lg-2 px-md-4">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
