import "./features.css";
import { FaMagic, FaGem, FaGlobeAsia } from "react-icons/all";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="feat">
          <FaMagic className="magic-icon" size="" />
          <h3>Tell Us Your Idea</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita velit ad fugit corporis enim quia itaque fuga molestias
            nobis quos optio similique, doloremque eius ex dolore qui,
            recusandae odit.
          </p>
        </div>
        <div className="feat">
          <FaGem className="magic-icon" />
          <h3>We Will Do All The Work</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita velit ad fugit corporis enim quia itaque fuga molestias
            nobis quos optio similique, doloremque eius ex dolore qui,
            recusandae odit.
          </p>
        </div>
        <div className="feat">
          <i className="fas fa-globe-asia fa-3x"></i>
          <FaGlobeAsia className="magic-icon" />
          <h3>Your Product Is Worldwide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita velit ad fugit corporis enim quia itaque fuga molestias
            nobis quos optio similique, doloremque eius ex dolore qui,
            recusandae odit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
