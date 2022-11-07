import "./boilerPlate.scss";
import SideBar from "../sideBar/sideBar";
import { Outlet, useLocation } from "react-router-dom";
import Carousel from "../common/carousel/carousel";
import HeadingText from "../common/headingText/headingText";
import slide1 from "../../assets/carousel/slide1.webp"
import slide2 from "../../assets/carousel/slide2.webp"
import slide3 from "../../assets/carousel/slide3.webp"

const slides = [
  {
    posterUrl: slide1,
  },

  {
    posterUrl: slide2,
  },

  {
    posterUrl: slide3,
  },
];

export default function BoilerPlate() {
  const allPath = ["", "community", "events"];
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
