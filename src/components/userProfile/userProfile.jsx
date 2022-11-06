import "./userProfile.scss";

function UserProfile({ name = "SAE India", logo ,heading="NIT Srinagar"}) {
  return (
    <div className="userProfile sideBar__box">
      <div className="userProfile__logo">
        <img src={logo} alt="user" />
      </div>
      <div className="userProfile__details">
        <h3 className="userProfile__details__heading">{heading}</h3>
        <p className="userProfile__details__name">{name}</p>
      </div>
    </div>
  );
}

export default UserProfile;
