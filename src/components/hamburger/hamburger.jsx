import "./hamburger.scss";

function Hamburger({ setClicked, clicked }) {
  return (
    <div className="hamburger">
      <input type="checkbox" id="menu_checkbox" />
      <label htmlFor="menu_checkbox" onClick={() => setClicked(!clicked)}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
}

export default Hamburger;
