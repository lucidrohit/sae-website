import "./hamburger.scss";

function Hamburger({ setClicked, clicked }) {
  return (
    <div className="hamburger">
      <input onChange={()=>null} type="checkbox" id="menu_checkbox" value={clicked} checked={clicked}/>
      <label htmlFor="menu_checkbox" onClick={() => setClicked(!clicked)}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
}

export default Hamburger;
