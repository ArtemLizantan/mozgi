import { Link } from "react-router-dom";
import "./infoLink.scss";
const InfoLink = ({ text, path, onClick }) => {
  return (
    <Link onClick={onClick} to={path} className="info-link">
      {text}
    </Link>
  );
};

export default InfoLink;
