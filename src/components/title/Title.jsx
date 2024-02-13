import "./title.scss"

const Title = ({ text }) => {
  return <h1 className="title" dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Title;
