import React from "react";
import "../styles/HomePage.scss";
import Fade from "react-reveal/Fade";

import { SRLWrapper } from "simple-react-lightbox";

const certificates = [
  {
    id: 1,
    name: "Konferencja Medyczno-Naukowa",
    text: "Kształtowanie siły i mocy mięśniowej",
  },
  {
    id: 2,
    name: "Centrum szkoleniowe Rafał Uryzaj",
    text: "Terapia mieśiowo-powięziowych punktów spustowych",
  },
  {
    id: 3,
    name: "AWF",
    text: "Masaż klasyczny",
  },
  {
    id: 4,
    name: "Centrum szkoleniowe Rafał Uryzaj",
    text: "Masaż tkanek głębokich",
  },
  {
    id: 5,
    name: "Rehaintegro",
    text: "Podstawy terapii manualnej",
  },

  {
    id: 7,
    name: "Fit-academy",
    text: "Trener personalny",
  },
  {
    id: 8,
    name: "REHexpo",
    text: "Symbioza fizjoterapii",
  },
  {
    id: 9,
    name: "Projekt masaż",
    text: "Neuro-Bark",
  },
  {
    id: 10,
    name: "Bark",
    text: "dr Biernat",
  },
  {
    id: 11,
    name: "Biodro",
    text: "dr Biernat",
  },
  {
    id: 12,
    name: "Kolano",
    text: "dr Biernat",
  },
  {
    id: 13,
    name: "Obręcz barkowa",
    text: "Sport klinika",
  },
  {
    id: 14,
    name: "Certyfikat",
    text: "PFS",
  },
  {
    id: 15,
    name: "Certyfikat",
    text: "Rehaintegro",
  },
  {
    id: 10,
    name: "dr Biernat",
    text: "Stopa",
  },
];

const certificate = certificates.map((cert) => (
  <div
    key={cert.id}
    srl_gallery_image="true"
    className="card"
    data-lightbox="roadtrip"
  >
    <Fade>
      <div className="card-photo">
        <img
          src={process.env.PUBLIC_URL + `/img/${cert.id}.jpg`} //`https://Ljonel.github.io/fizjotopic/img/${cert.id}.jpg`
          alt=""
        />
      </div>
    </Fade>
  </div>
));

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <Fade left>
          <div className="home-img">
            <img src={process.env.PUBLIC_URL + "/img/portrait.jpg"} alt="" />
          </div>
        </Fade>

        <div className="home-hello">
          <Fade right>
            <div className="home-hello-wrapper">
              <p>Witaj na stronie</p>
              <h3>FizjoTopic!</h3>
            </div>
            <div className="home-hello-circles">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </Fade>
        </div>
      </div>
      <section className="aboutme">
        <Fade left>
          <p>
            <b>Cześć!</b> <br />
            Mam na imię Kacper i jestem studentem IV roku fizjoterapii na AWF w
            Katowicach. Interesuję się anatomią oraz powięzią. Oprócz tego
            bardzo lubię terapię manualną, a to wszystko staram się połączyć z
            treningiem.
          </p>
        </Fade>
        <Fade right>
          <p>
            <b>Dlatego też tu jestem!</b> <br />
            Chciałbym Was zafascynować poznawaniem naszego ciała oraz przybliżyć
            temat szeroko rozumianej fizjoterapii. Na stronie od czasu do czasu
            znajdziecie dłuższy wpis na blogu, którego przeczytanie jednak
            zajmie dłuższą chwilkę. Nie bez przyczyny nazwa FizjoTopic, ponieważ
            będą tutaj poruszane tematy związane z fizjoterapią. Chciałbym Wam
            również pomóc odnaleźć przyczynę waszych problemów oraz metody,
            które mogą przy nich być skuteczne. Od małego byłem zafascynowany
            sportem i próbowałem wielu dyscyplin. Ale to sporty walki i trening
            funkcjonalny skradły moje serce i pozostaje tak do dziś. Jestem
            byłym zawodnikiem karate Kyokushin (posiadam brązowy pas) oraz
            trenerem personalnym.Znajdziecie więc tu czasami również co nieco o
            treningu.
          </p>
        </Fade>

        <Fade left>
          <p>
            <b>Myślę, że tematyka </b> którą będę zamieszczał na swoich mediach
            społecznościowych zainteresuje każdego. Od studenta fizjoterapii po
            amatora sportu lub przeciętnego Kowalskiego! Dlatego serdecznie Was
            zapraszam do śledzenia na bieżąco! Jeśli natomiast coś Ci doskwiera
            to zapraszam do zakładki gabinet! Poniżej natomiast znajdziesz moje
            certyfikaty.
          </p>
        </Fade>
      </section>

      <section className="certificates">
        <h1>Certyfikaty i dyplomy</h1>
        <SRLWrapper>
          <div className="cards-container">{certificate}</div>
        </SRLWrapper>
      </section>
    </>
  );
};

export default HomePage;
