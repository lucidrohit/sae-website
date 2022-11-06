import "./cards.scss";
import Card from "../common/card/card";

function Cards({ cardsList }) {
  return (
    <div className="cards">
      {cardsList.map((cardDetails, index) => (
        <Card {...cardDetails} key={index} />
      ))}
    </div>
  );
}

export default Cards;
