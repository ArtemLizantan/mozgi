import Header from "../../components/header/Header";
import Ticker from "../../components/ticker/Ticker";
import Hero from "./sections/hero/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Ticker />
      </main>
    </>
  );
};

export default Home;
