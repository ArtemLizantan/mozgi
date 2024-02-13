import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__left">
          <div className="header__switch">
            <div className="menu">
              <div className="menu-title">👅</div>
              <ul className="menu-dropdown">
                <li>
                  <button>RU</button>
                </li>
                <li>
                  <button>ENG</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header__center">
          <Link to={"/"} className="header__logo">
            <svg
              width="85"
              height="46"
              viewBox="0 0 85 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.1881 6.12368L37.1967 4.76944V32.3073L29.1881 30.9529V6.12368ZM25.7709 2.70864V34.3682L40.6138 37.0767V0L25.7709 2.70864ZM69.2349 18.1975V21.6108H73.8769V30.9366H65.4666V6.12038H72.6661V11.1968H76.0816V2.7072H62.0511V34.3498H77.2924V18.1975H69.2349ZM11.6071 28.088L11.6259 28.1724C13.5022 19.6456 15.3722 11.1529 17.2328 2.70721H22.3529V34.3496H18.9376V9.63353C18.8876 9.63353 13.2524 34.3656 13.2524 34.3656H9.96191C9.96191 34.3656 4.3267 9.63353 4.27684 9.63353V34.3496H0.861328V2.70721H5.98131C7.8421 11.1529 9.71227 19.6456 11.5885 28.1724C11.5948 28.1442 11.6007 28.1161 11.6071 28.088ZM54.9259 6.12045H44.4379V2.70727H58.6289V6.12045L48.1405 30.9365H58.6289V34.3498H44.4379V30.9365L54.9259 6.12045ZM84.1299 34.35H80.7142V2.7074H84.1299V34.35ZM30.9617 45.9999V45.4751H28.2521V43.8936H30.353V43.3689H28.2521V41.9542H30.8591V41.4293H27.6754V45.9999H30.9617ZM33.6423 41.4292H34.251L35.4999 45.4108H35.8204L37.0694 41.4292H37.6652L36.2045 45.9999H35.1027L33.6423 41.4292ZM43.9078 45.9999V45.4751H41.1982V43.8936H43.2995V43.3689H41.1982V41.9542H43.8055V41.4293H40.6218V45.9999H43.9078ZM50.7845 41.4292V45.9999H49.8749L47.7484 42.1782H47.6071V45.9999H47.0437V41.4292H47.9533L50.0798 45.251H50.2207V41.4292H50.7845ZM55.8168 41.9416H57.3159V41.4292H53.7286V41.9416H55.24V46H55.8168V41.9416Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="header__burger">
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
