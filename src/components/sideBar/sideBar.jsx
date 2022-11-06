import "./sideBar.scss";
import UserProfile from "../userProfile/userProfile";
import NavBar from "../navBar/navBar";
import SaeLogo from "../../assets/sae.webp"
function SideBar() {
  return (
    <div className="sideBar">
      <UserProfile logo={SaeLogo} />
      <NavBar/>
    </div>
  );
}

export default SideBar;
