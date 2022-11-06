import "./navBar.scss";
import home from "../../assets/home.svg"
import event from "../../assets/event.svg"
// import community from "../../assets/community.svg"
import team from "../../assets/team.svg"
import about from "../../assets/about.svg"
import NavItem from "../common/navItem/navItem";

const navBar = [
    {
      icon: home,
      text: "Home",
      path: "",
    },
    {
      icon: event,
      text: "Events",
      path: "events",
    },
    {
      icon: about,
      text: "About Us",
      path: "about",
    },
    // {
    //   icon: community,
    //   text: "Community",
    //   path: "community",
    // },
    {
      icon: team,
      text: "Team",
      path: "team",
    },
  ];

  
function NavBar() {
  return <nav className="navBar sideBar__box">
    {navBar.map(({ icon, text, path }, index) => (
          <NavItem
            icon={icon}
            text={text}
            path={path}
            key={index}
          />
        ))}
  </nav>;
}

export default NavBar;
