import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./ticker.scss";

const Ticker = () => {
  const repeatCount = 10;
  const tickerRef = useRef(null);

  useLayoutEffect(() => {
    const tickerSpanOne = document.querySelectorAll(".ticker__span--one");
    const tickerSpanTwo = document.querySelectorAll(".ticker__span--two");

    gsap.set(tickerSpanOne, { xPercent: -100 });
    gsap.set(tickerSpanTwo, { xPercent: -100 });

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: false,
    });

    tl.to(
      tickerSpanOne,
      {
        duration: 10,
        xPercent: 10,
        ease: "linear",
      },
      0
    );
    tl.to(
      tickerSpanTwo,
      {
        duration: 10,
        xPercent: 10,
        ease: "linear",
      },
      0
    );
  }, []);
  return (
    <div className="ticker">
      <div ref={tickerRef} className="ticker__body">
        <div className="ticker__item">
          {Array.from({ length: repeatCount }, (_, index) => (
            <span className="ticker__span ticker__span--one" key={index}>
              FULL-CYCLE EVENT AGENCY{" "}
            </span>
          ))}
        </div>
        <div className="ticker__item">
          {Array.from({ length: repeatCount }, (_, index) => (
            <span className="ticker__span ticker__span--two" key={index}>
              FULL-CYCLE EVENT AGENCY{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
