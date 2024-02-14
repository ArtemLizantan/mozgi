import { useState } from "react";
import "./switch.scss";

const Switch = () => {
  const [openSwitch, setOpenSwitch] = useState(false);

  const toggleMenu = () => {
    setOpenSwitch((prev) => !prev);
  };

  return (
    <div className={`switch ${openSwitch ? "_active" : ""}`}>
      <div onClick={toggleMenu} className="menu">
        <div className="menu-title">👅</div>
        <ul className={`menu-dropdown ${openSwitch ? "_active" : ""}`}>
          <li>
            <button>RU</button>
          </li>
          <li>
            <button>UA</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Switch;
