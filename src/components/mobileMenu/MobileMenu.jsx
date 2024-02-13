import InfoLink from "../infoLink/InfoLink";
import "./mobilemenu.scss";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <li className="mobile-menu__list">
        <InfoLink path={"/mozgi/test-page"} text={"where?"} onClick={closeMenu} />
      </li>
      <li className="mobile-menu__list">
        <InfoLink path={"/mozgi/test-page"} text={"who?"} onClick={closeMenu} />
      </li>
      <li className="mobile-menu__list">
        <InfoLink path={"/mozgi/test-page"} text={"what?"} onClick={closeMenu} />
      </li>
    </ul>
  );
};

export default MobileMenu;
