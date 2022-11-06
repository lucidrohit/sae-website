import "./headingText.scss";
import { firstWordStyle } from "../../../utils/text.js";

function HeadingText({ text }) {
  const data = firstWordStyle(text);
  return <h2 className="heading">{data}</h2>;
}

export default HeadingText;
