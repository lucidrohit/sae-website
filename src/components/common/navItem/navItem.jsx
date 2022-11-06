import "./navItem.scss";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, text, path }) => {
  return (
    <NavLink className="navItem" to={path}>
      <img className="navItem__icon" alt={path} src={icon} />
      <span className="navItem__text">{text}</span>
    </NavLink>
  );
};

export default NavItem;
