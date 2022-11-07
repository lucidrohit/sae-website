import Button from "../../components/common/button/button";
import IconText from "../../components/common/iconText/iconText";
import "./home.scss";
import SaeLogo from "../../assets/sae.webp"

function Home() {
  return (
    <div className="home">
      <div className="home__about__iconText">
        <IconText text="About Us" logo={SaeLogo} />
      </div>
      <div className="home__about__details">
        <div className="home__about__details__heading">
          Lorem ipsum dolor sit amet ?
        </div>
        <div className="home__about__details__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint
          officiis numquam aliquid corrupti illo? Nesciunt aliquam hic
          inventore? Laboriosam, exercitationem nemo tempora aspernatur officia
          enim eaque quibusdam magnam, rem dolorem asperiores quia quasi, cumque
          itaque fugit ea! Error repellat similique voluptate eius est animi
          iusto nisi accusantium aperiam obcaecati!
        </div>
        <Button text={"Read More"} />
      </div>
    </div>
  );
}

export default Home;
