import InfoLink from "../../components/infoLink/InfoLink";
import transition from "../../transition";
import "./testpage.scss"
const TestPage = () => {
  return (
    <>
      <div className="test">
        <div className="test__block">
          This is test page!
          <InfoLink path={"/"} text={"Back to home page"} />
        </div>
      </div>
    </>
  );
};

export default transition(TestPage);
