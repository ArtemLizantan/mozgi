import Title from "../../../../components/title/Title";
import "./hero.scss";
import bg from "../../../../img/bg.svg";
import Circle from "../../../../components/circle/Circle";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__body">
        <img className="hero__bg" src={bg} alt="" />
        <div className="hero__title">
          <Title text="FULL-CYCLE <br/> EVENT AGENCY" />
        </div>
        <div className="hero__circle">
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default Hero;
