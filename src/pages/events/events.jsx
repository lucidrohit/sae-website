import "./events.scss";
import Cards from "../../components/cards/cards";
import HeadingText from "../../components/common/headingText/headingText";
import card1 from "../../assets/card/card1.webp"
import card2 from "../../assets/carousel/slide2.webp"

const cardsList = [
  {
    date: "11",
    month: "June",
    price: "5000",
    img: card1,
    name: "Name of Event",
    eventType: "Workshop",
    detail:
      "The First competition organised by SAE india x NIT sri. Two finalists will receive cash prize+ one year membership of SAE worth rs 500...",
  },
  {
    date: "11",
    month: "June",
    price: "5000",
    img: card2,
    name: "Name of Event",
    eventType: "Competition",
    detail:
      "The First competition organised by SAE india x NIT sri. Two finalists will receive cash prize+ one year membership of SAE worth rs 500...",
  },
  {
    date: "11",
    month: "June",
    price: "5000",
    img: card2,
    name: "Name of Event",
    eventType: "Competition",
    detail:
      "The First competition organised by SAE india x NIT sri. Two finalists will receive cash prize+ one year membership of SAE worth rs 500...",
  },

];

function Events() {
  return (
    <div className="events">
      <HeadingText text="Live Events" />
      <Cards cardsList={cardsList} />
      <HeadingText text="Past Events" />
      <Cards cardsList={cardsList} />
    </div>
  );
}

export default Events;
