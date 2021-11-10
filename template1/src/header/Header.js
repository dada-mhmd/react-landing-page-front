import "./header.css";
// import { faAd, faAngry, faDragon } from "@fortawesome/free-solid-svg-icons/";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaDrupal } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <FaDrupal />
        </div>
        <div className="links">
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
