import "./card.scss";
import Button from "../button/button";
import Competition from "../../../assets/card/competition.svg";
import WShop from "../../../assets/card/wshop.svg";
import info from "../../../assets/card/info.svg";

function Card({ date, detail, price, img, name, eventType, month }) {
  const logo = eventType.toLowerCase() === "competition" ? Competition : WShop;

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
        <img src={img} alt="" />
      </div>
      <div className="card__details">
        <div className="card__details__time">
          <div className="card__details__time__month">{month}</div>
          <div className="card__details__time__date">{date}</div>
        </div>
        <div className="card__details__content">
          <div className="card__details__content__price">₹ {price} 🎖️</div>
          <p className="card__details__content__para">{detail}</p>
        </div>
      </div>
      <div className="card__reg">
        <Button text="Register Now" />
        <div className="card__reg__details">
          <div className="card__reg__details__total">30 Registered</div>
          <div className="card__reg__details__timeleft">7 days left</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
