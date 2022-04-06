import React from "react";
const Socials = () => {
  return (
    <div className="socials">
      {/* <div className="socials-icon">
        <a className="social-link" href="https://www.youtube.com">
          <h3>Youtube</h3>
          <i className="fas fa fa-youtube"></i>
        </a>
      </div> */}
      <div className="socials-icon">
        <a
          className="social-link"
          target="_blank"
          href="https://www.facebook.com/fizjotopic"
        >
          <h3>Facebook</h3>
          <i
            className="fas fa fa-facebook"
            style={{ marginRight: " 15px" }}
          ></i>
        </a>
      </div>
      <div className="socials-icon">
        <a
          className="social-link"
          target="_blank"
          href="https://www.instagram.com/fizjotopic/"
        >
          <h3>Instagram</h3>
          <i
            className="fas fa fa-instagram"
            style={{ marginRight: " 8px" }}
          ></i>
        </a>
      </div>

      <div className="zakladka"></div>
    </div>
  );
};

export default Socials;
