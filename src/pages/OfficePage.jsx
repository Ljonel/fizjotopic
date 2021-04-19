import React from "react";
import "../styles/OfficePage.scss";
import Fade from "react-reveal/Fade";

const OfficePage = () => {
  return (
    <>
      <div className="office-baner">
        <div className="baner-bg">
          <h1>Cennik</h1>
          <img src="img/office_baner.jpg" alt="baner" />
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
            <img src="./img/portrait2.png" alt="" />
          </div>
        </Fade>
        <Fade right delay="1000">
          <div className="offerts-text">
            <div className="text-wrapper">
              <h3> Dobrze trafiłeś, chętnie pomogę! Mogę zaoferować:</h3>
              <ul>
                <li>masaż klasyczny</li>
                <li>masaż powięziowy</li>
                <li>masaż bańką chińską</li>
              </ul>
              <h3>Gwarantuje Ci, że wyjdziesz jak nowy!</h3>
              <p>
                Jeśli nic Ci nie dolega, ale potrzebujesz wyciszenia i relaksu
                mogę zaproponować <strong>masaż relaksacyjny</strong>
              </p>
            </div>
          </div>
        </Fade>
      </section>

      <h1 className="margin">Zapraszam do zapoznania się z cennikiem</h1>
      <Fade up>
        <section id="prices">
          <Fade left delay="1500">
            <div className="prices-left">
              <h4> 60 minut – 50 zł</h4>
              <p>Pełnię również podane wyżej usługi z dojazdem do domu!</p>
              <ul>
                <li>~3km - 5zł</li>
                <li> 3-7km – 10 zł</li>
                <li>7-15km - 15zł</li>
              </ul>
            </div>
          </Fade>
          <Fade right delay="1500">
            <div className="prices-right">
              <h4> Zapraszam do kontaktu!</h4>
              <p> Napisz do mnie sms – 608417253 </p>
              <p>Lub skontaktuj się ze mną poprzez moje social media</p>

              <div className="prices-icons">
                <a href="">
                  <i className="fas fa fa-facebook"></i>
                </a>
                <a>
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
