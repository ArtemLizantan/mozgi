import "./ticker.scss";

const Ticker = () => {
  const repeatCount = 10;

  const repeatedText = Array.from({ length: repeatCount }, (_, index) => (
    <span key={index}>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
  ));

  return (
    <div className="ticker">
      <div className="ticker__body">
        <div className="ticker__item">{repeatedText}</div>
        <div className="ticker__item">{repeatedText}</div>
      </div>
    </div>
  );
};

export default Ticker;
