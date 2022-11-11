import "./headingText.scss";
import { firstWordStyle } from "../../../utils/text.js";

function HeadingText({ text, wordHights = 1 }) {
  const data = firstWordStyle(text, wordHights);
  return <h2 className="heading">{data}</h2>;
}

export default HeadingText;
