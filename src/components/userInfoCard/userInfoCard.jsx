import "./userInfoCard.scss";
import profile from "../../assets/profile.png"

import { useState } from "react";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import gmail from "../../assets/social/gmail.svg";
import contact from "../../assets/social/contact.svg";

function UserInfoCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="userInfoCard" onClick={() => setIsClicked(!isClicked)}>
      {!isClicked ? <UserInfoCardFront {...props} /> : <UserInfoCardBack {...props} />}
    </div>
  );
}

function UserInfoCardFront({ name, about, avatar = profile, designation }) {
  return (
    <>
      <div className="userInfoCard__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <h3 className="userInfoCard__name">{name}</h3>
      <div className="userInfoCard__details">
        <div className="userInfoCard__details__work">{designation}</div>
        <div className="userInfoCard__details__about">{about}</div>
      </div>
    </>
  );
}

function UserInfoCardBack({
  phoneNumber,
  instagramHandle,
  twitterHandle,
  gmailHandle,
}) {
  return (
    <>
      <div className="userInfoCard__social">
        <div className="userInfoCard__social__item">
          <img src={gmail} alt="" />
          <a
            href={`mailto:${gmailHandle}`}
            className="userInfoCard__socail__item__text"
          >
            {gmailHandle}
          </a>
        </div>
        <div className="userInfoCard__social__item">
          <img src={instagram} alt="" />
          <a
            href={`https://instagram.com/${twitterHandle}`}
            className="userInfoCard__socail__item__text"
          >
            @{instagramHandle}
          </a>
        </div>
        <div className="userInfoCard__social__item">
          <img src={twitter} alt="" />
          <a
            href={`https://twitter.com/${twitterHandle}`}
            className="userInfoCard__socail__item__text"
          >
            @{twitterHandle}
          </a>
        </div>
        <div className="userInfoCard__social__item">
          <img src={contact} alt="" />
          <a
            href={`https://wa.me/${phoneNumber}`}
            className="userInfoCard__socail__item__text"
          >
            +91 {phoneNumber}
          </a>
        </div>
      </div>
    </>
  );
}

export default UserInfoCard;
