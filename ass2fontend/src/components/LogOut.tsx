import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import logout icon

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <button
      className="btn btn-outline-danger d-flex align-items-center"
      onClick={handleLogOut}
      style={{
        borderRadius: "30px",
        transition: "background-color 0.3s ease",
      }}
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
      Log Out
    </button>
  );
};

export default LogOut;
