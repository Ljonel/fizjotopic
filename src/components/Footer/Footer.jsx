import React from "react";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <i className="fas fa fa-envelope"></i>
        <p>
          Kontakt
          <br />
          fizjotopic@gmail.com
        </p>
      </div>
      <div className="copyright">
        <i className="fas fa fa-copyright"></i>
        <p>
          2021
          <br />
          Damian Cygan
        </p>
      </div>
    </div>
  );
};

export default Footer;
