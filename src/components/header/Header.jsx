import "./header.scss";
import Switch from "../switch/Switch";
import Logo from "../logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 567;

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".header__body", { y: "-100%", opacity: 0 }); // начальная позиция за пределами экрана

    tl.to(".header__body", {
      duration: 1,
      opacity: 1,
      y: 0, // конечная позиция (0 означает верхнюю часть экрана)
      ease: "power2.out",
      delay: 2,
    });
  }, []);

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
        {isMobile && <MobileMenu closeMenu={closeMenu} isOpen={openMenu} />}
      </div>
    </header>
  );
};

export default Header;
