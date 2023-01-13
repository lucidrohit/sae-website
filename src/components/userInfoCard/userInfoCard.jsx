import "./userInfoCard.scss";
import profile from "../../assets/profile.png";

import { useState } from "react";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import gmail from "../../assets/social/gmail.svg";
// import contact from "../../assets/social/contact.svg";
import linkedin from "../../assets/social/linkedin.svg";

function UserInfoCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={"userInfoCard " + (isClicked ? " active__card" : "")}
      onClick={() => setIsClicked(!isClicked)}
    >
      {!isClicked ? (
        <UserInfoCardFront {...props} />
      ) : (
        <UserInfoCardBack {...props} />
      )}
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
  name,
  instagramHandle,
  twitterHandle,
  gmailHandle,
  linkedinHandle,
}) {
  return (
    <div className="userInfoCard__back">
      <div className="userInfoCard__social">
        <div className="userInfoCard__social__item">
          <img src={gmail} alt="" />
          <a
            href={`mailto:${gmailHandle}`}
            className="userInfoCard__social__item__text"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </div>
        <div className="userInfoCard__social__item">
          <img src={instagram} alt="" />
          <a
            href={`https://instagram.com/${instagramHandle}`}
            className="userInfoCard__social__item__text"
            target="_blank"
            rel="noreferrer"
          >
            @{name}
          </a>
        </div>
        <div className="userInfoCard__social__item">
          <img src={twitter} alt="" />
          <a
            href={`https://twitter.com/${twitterHandle}`}
            className="userInfoCard__social__item__text"
            target="_blank"
            rel="noreferrer"
          >
            @{name}
          </a>
        </div>
        <div className="userInfoCard__social__item">
          <img src={linkedin} alt="" />
          <a
            href={`https://linkedin.com/in/${linkedinHandle}`}
            className="userInfoCard__social__item__text"
            target="_blank"
            rel="noreferrer"
          >
            @{name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
