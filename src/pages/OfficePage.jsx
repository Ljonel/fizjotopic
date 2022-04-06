import React from "react";
import "../styles/OfficePage.scss";
import Fade from "react-reveal/Fade";

const OfficePage = () => {
  return (
    <>
      <div className="office-baner">
        <div className="baner-bg">
          <h1>Oferta</h1>
          <img
            src={process.env.PUBLIC_URL + "/img/office-baner.jpg"}
            alt="baner"
          />
        </div>
      </div>
      <section id="office-price">
        <Fade left>
          <div className="price-element">
            <p> Doskwiera Ci może jakiś ból i nie daje Ci spokoju? </p>
          </div>
        </Fade>
        <Fade right>
          <div className="price-element">
            <p> Stało się coś nagle lub boli Cię cały czas? </p>
          </div>
        </Fade>
        <Fade left>
          <div className="price-element">
            <p> Nie wiesz co może być tego przyczyną i szukasz pomocy? </p>
          </div>
        </Fade>
      </section>
      <section id="office-offerts">
        <Fade left delay="1000">
          <div className="offerts-img">
            <img
              src={process.env.PUBLIC_URL + "/img/portrait-office.jpg"}
              alt="portrait-office"
            />
          </div>
        </Fade>
        <Fade right delay="1000">
          <div className="offerts-text">
            <div className="text-wrapper">
              <h3> Dobrze trafiłeś, chętnie pomogę! Mogę zaoferować:</h3>
              <ul>
                <li>masaż klasyczny</li>
                <li>masaż relaksacyjny</li>
                <li>masaż bańką chińską</li>
              </ul>
              {/* <h3>Gwarantuje Ci, że wyjdziesz jak nowy!</h3> */}
              <h3 className="margin">
                Zapraszam do zapoznania się z cennikiem
              </h3>
              <div className="prices-left">
                <h4> 60 minut – 50 zł</h4>
                <p>Pełnię również podane wyżej usługi z dojazdem do domu!</p>
                <ul>
                  <li>~3km - 5zł</li>
                  <li> 3-7km – 10 zł</li>
                  <li>7-15km - 15zł</li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <Fade up>
        <section id="prices">
          <Fade left delay="1500"></Fade>
          <Fade right delay="1500">
            <div className="prices-right">
              <h4> Zapraszam do kontaktu!</h4>
              <p> Napisz do mnie sms – 608417253 </p>
              <p>Lub skontaktuj się ze mną poprzez moje social media</p>

              <div className="prices-icons">
                <a target="_blank" href="https://www.facebook.com/fizjotopic">
                  <i className="fas fa fa-facebook"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/fizjotopic">
                  <i className="fas fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </Fade>
        </section>
      </Fade>
    </>
  );
};

export default OfficePage;
