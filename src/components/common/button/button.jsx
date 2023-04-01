import "./button.scss";

function Button({ text, classes, ...rest }) {
  return (
    <button className={`button ${classes}`} {...rest}>
      {text}
    </button>
  );
}

export default Button;
