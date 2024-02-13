import "./header.scss";
import Switch from "../switch/Switch";
import Logo from "../logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 567;

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="header">
      <div className={`header__body ${openMenu && isMobile ? "_active" : ""}`}>
        <div className="header__left">
          <Switch />
        </div>
        <div className="header__center">
          <Logo />
        </div>
        <div
          onClick={() => setOpenMenu((prev) => !prev)}
          className={`header__burger ${openMenu ? "_active" : ""}`}
        >
          <span></span>
        </div>
      </div>
      {isMobile && <MobileMenu closeMenu={closeMenu} isOpen={openMenu} />}
    </header>
  );
};

export default Header;
