import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icon">
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <FaInstagramSquare />
          </a>
          <a href="">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
