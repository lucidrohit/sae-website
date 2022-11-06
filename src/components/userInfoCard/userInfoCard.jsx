import "./userInfoCard.scss";
import logo from "../../assets/sae.webp";

function UserInfoCard({ name, about, avatar = logo, designation }) {

  return (
    <div className="userInfoCard">
      <div className="userInfoCard__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <h3 className="userInfoCard__name">{name}</h3>
      <div className="userInfoCard__details">
        <div className="userInfoCard__details__work">{designation}</div>
        <div className="userInfoCard__details__about">{about}</div>
      </div>
    </div>
  );
}

export default UserInfoCard;
