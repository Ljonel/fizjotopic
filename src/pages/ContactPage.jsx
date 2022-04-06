import React from "react";
import "../styles/Contact.scss";
const ContactPage = () => {
  return (
    <>
      <div className="contact-wrapper">
        <h1>Kontakt</h1>
        <ul>
          <li>
            <p>E-mail: fizjotopic@gmail.com</p>
          </li>
          <li>
            <p className="contact-options">
              wiadomości na
              <a target="_blank" href="https://www.facebook.com/fizjotopic">
                Facebook
              </a>
              lub
              <a target="_blank" href="https://www.instagram.com/fizjotopic">
                Instagram
              </a>
            </p>
          </li>
          <li>
            <p>
              SMS na numer <strong>608 417 253</strong>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactPage;
