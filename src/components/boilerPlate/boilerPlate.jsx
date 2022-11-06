import "./boilerPlate.scss";
import SideBar from "../sideBar/sideBar";
import { Outlet, useLocation } from "react-router-dom";
import Carousel from "../common/carousel/carousel";
import HeadingText from "../common/headingText/headingText";

const slides = [
  {
    posterUrl: "https://picsum.photos/1170/325",
  },

  {
    posterUrl: "https://picsum.photos/1170/325",
  },

  {
    posterUrl: "https://picsum.photos/1170/325",
  },

  {
    posterUrl: "https://picsum.photos/1170/325",
  },
];

export default function BoilerPlate() {
  const allPath = ["", "about", "community", "events"];
  const location = useLocation();
  const path = location.pathname.slice(1, location.pathname.length);
  const isRightPath = allPath.includes(path);

  return (
    <div className={"boilerPlate"}>
      <SideBar />
      <div className="content">
        {isRightPath ? (
          <>
            <HeadingText text="Upcomming events" />
            <Carousel slides={slides} />
          </>
        ) : (
          <div />
        )}
        <Outlet />
      </div>
    </div>
  );
}
