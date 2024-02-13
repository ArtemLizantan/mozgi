import Title from "../../../../components/title/Title";
import "./hero.scss";
import bg from "../../../../img/bg.svg";
import Circle from "../../../../components/circle/Circle";
import { useEffect, useState } from "react";
import InfoLink from "../../../../components/infoLink/InfoLink";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 1024;

  const translateX = isMobile ? 0 : (position.x - screenWidth / 2) * 0.02;
  const translateY = isMobile ? 0 : (position.y - window.innerHeight / 2) * 0.02;

  return (
    <div className="hero">
      <div className="hero__body">
        <img className="hero__bg" src={bg} alt="" />
        <div
          style={{
            position: "relative",
            transform: `translate(${translateX}px, ${translateY}px)`,
          }}
          className="hero__title"
        >
          <Title text="FULL-CYCLE <br/> EVENT AGENCY" />
        </div>
        <div className="hero__circle">
          <Circle />
        </div>
      </div>
      <div className="hero__links">
        <div className="hero__link">
          <InfoLink path={"/test-page"} text={"Where?"} />
        </div>
        <div className="hero__link">
          <InfoLink path={"/test-page"} text={"what?"} />
        </div>
        <div className="hero__link">
          <InfoLink path={"/test-page"} text={"who?"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
