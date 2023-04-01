import "./card.scss";
import Button from "../button/button";
import Competition from "../../../assets/card/competition.svg";
import WShop from "../../../assets/card/wshop.svg";
import info from "../../../assets/card/info.svg";
import moment from "moment";

function Card({ dateTime, detail, price, img, name, eventType, link }) {
  const logo = eventType.toLowerCase() === "competition" ? Competition : WShop;
  const date = moment(dateTime);
  const dateDiff = date.diff(moment(), "days");

  return (
    <div className="card">
      <div className="card__header">
        <img src={logo} alt={eventType} className="card__header__logo" />
        <div className="card__header__event">
          <div className="card__header__event__name">{name}</div>
          <div className="card__header__event__type">{eventType}</div>
        </div>
        <img src={info} alt="info" className="card__header__event__info" />
      </div>
      <div className="card__img">
        <img src={img} alt="poster" />
      </div>
      <div className="card__details">
        <div className="card__details__time">
          <div className="card__details__time__month">{date.format("MMM")}</div>
          <div className="card__details__time__date">{date.format("D")}</div>
        </div>
        <div className="card__details__content">
          <div className="card__details__content__price">₹ {price} 🎖️</div>
          <p className="card__details__content__para">{detail}</p>
        </div>
      </div>
      <div className="card__reg">
        <Button
          text={dateDiff >= 0 ? "Register Now" : "Closed"}
          classes={dateDiff >= 0 ? null : "closed"}
          onClick={() => (dateDiff >= 0 ? (window.location.href = link) : null)}
        />
        <div className="card__reg__details">
          <div className="card__reg__details__total">{dateDiff >= 0 ? "Registerations Open" : "Registerations Closed"}</div>
          <div className="card__reg__details__timeleft">
            {dateDiff >= 0 ? `${dateDiff+1} days left` : `Event ended`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
