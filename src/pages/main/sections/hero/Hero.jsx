import { useLayoutEffect } from "react";
import gsap from "gsap";
import Title from "../../../../components/title/Title";
import "./hero.scss";
import bg from "../../../../img/bg.svg";
import Circle from "../../../../components/circle/Circle";
import InfoLink from "../../../../components/infoLink/InfoLink";

const Hero = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".hero__circle", { scale: -1, opacity: -1 });
    gsap.set(".hero__links", { opacity: -1 });
    gsap.set(".hero__title", { opacity: -1, scale: -1 });

    tl.to(".hero__title", {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    });
    tl.to(
      ".hero__circle",
      { duration: 1.2, scale: 1, opacity: 1, ease: "power2.out" },
      ">-0.5"
    );
    tl.to(
      ".hero__links",
      { duration: 1.5, opacity: 1, ease: "power2.out" },
      ">-0.5"
    );
  }, []);

  return (
    <div className="hero">
      <div className="hero__body">
        <img className="hero__bg" src={bg} alt="" />
        <div className="hero__title">
          <Title text="FULL-CYCLE EVENT AGENCY" />
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
