import { FaStar, FaCog } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-item active">
        <FaStar />
        <span>Trending</span>
      </div>
      <div className="nav-item">
        <FaCog />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default NavBar;