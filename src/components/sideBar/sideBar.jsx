import "./sideBar.scss";
import UserProfile from "../userProfile/userProfile";
import NavBar from "../navBar/navBar";
import SaeLogo from "../../assets/sae.webp";

function SideBar({ isActive, setIsActive }) {

  return (
    <div className={"sideBar " + (isActive  ? " active" : "")} onClick={()=>setIsActive(!isActive)}>
      <UserProfile logo={SaeLogo} />
      <NavBar />
    </div>
  );
}

export default SideBar;
