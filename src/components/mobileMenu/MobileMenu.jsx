import InfoLink from "../infoLink/InfoLink";
import "./mobilemenu.scss";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <li className="mobile-menu__list">
        <InfoLink
          path={"/test-page"}
          text={"where?"}
          onClick={closeMenu}
        />
      </li>
    </ul>
  );
};

export default MobileMenu;
