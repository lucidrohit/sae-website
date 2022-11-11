import Button from "../../components/common/button/button";
import IconText from "../../components/common/iconText/iconText";
import "./home.scss";
import SaeLogo from "../../assets/sae.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateToAbout = () => navigate("/about");

  return (
    <div className="home">
      <div className="home__about__iconText">
        <IconText text="About Us" logo={SaeLogo} />
      </div>
      <div className="home__about__details">
        <div className="home__about__details__heading">
          PURPOSE OF AN SAEINDIA COLLEGIATE CLUB ?
        </div>
        <div className="home__about__details__para">
          Successful SAEINDIA Collegiate clubs provide many benefits to their
          members and are assets to the engineering colleges where they are
          located. Collegiate clubs provide students with tangible contact with
          their future profession – engineering – and, in so doing, further the
          objectives of engineering...
        </div>
        <Button text="Read More" onClick={navigateToAbout} />
      </div>
    </div>
  );
}

export default Home;
