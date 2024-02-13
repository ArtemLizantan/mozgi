import Ticker from "../../components/ticker/Ticker";
import Hero from "./sections/hero/Hero";
import transition from "../../transition";
const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
    </>
  );
};

export default transition(Home);
