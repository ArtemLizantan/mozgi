import InfoLink from "../../components/infoLink/InfoLink";
import transition from "../../transition";
const TestPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "45px",
        }}
        className="test"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          This is test page!
          <InfoLink path={"/"} text={"Back to home page"} />
        </div>
      </div>
    </>
  );
};

export default transition(TestPage);
