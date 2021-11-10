import "./contact.css";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/all";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="special-heading">Contact</h2>
        <p>We are born to create</p>
        <div className="info">
          <p className="label">Feel free to drop us a line</p>
          <a href="mailto:test@gmail.com?subject=Contact" className="link">
            test@gmail.com
          </a>
          <div className="social">
            Find Us On Social Networks
            <FaYoutube className="i" />
            <FaFacebook className="i" />
            <FaTwitter className="i" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
