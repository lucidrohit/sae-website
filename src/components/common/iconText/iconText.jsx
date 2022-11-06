import "./iconText.scss";

function IconText({ logo, text }) {
  text = text.trim().split(" ");
  return (
    <div className="iconText heading">
      <div src={logo} alt={text} className="iconText__icon" />
      <div className="iconText__text">
        {text[0]} <span className="iconText__text__last">{text[1]}</span>
      </div>
    </div>
  );
}

export default IconText;
