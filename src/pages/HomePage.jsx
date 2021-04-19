import React from "react";
import "../styles/HomePage.scss";
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
  // {
  //   id: 6,
  //   name: "Premium Sport Academy",
  //   text: "Sports anatomy",
  // },
  {
    id: 7,
    name: "Fit-academy",
    text: "Trener personalny",
  },
];

const certificate = certificates.map((cert) => (
  <div
    key={cert.id}
    srl_gallery_image="true"
    className="card"
    data-lightbox="roadtrip"
  >
    <div className="card-photo">
      <img
        src={`https://Ljonel.github.io/fizjotopic/img/${cert.id}.jpg`}
        alt=""
      />
    </div>
    {/* <div className="card-text">
      <h3>{cert.name}</h3>
      <p>{cert.text}</p>
    </div> */}
  </div>
));

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-img">
          <img
            src="https://Ljonel.github.io/fizjotopic/img/unnamed.jpg"
            alt=""
          />
        </div>
        <div className="home-hello">
          <div className="home-hello-wrapper">
            <p>Witaj na stronie</p>
            <h3>FizjoTopic!</h3>
          </div>
          <div className="home-hello-circles">
            <div className="circle">Umiejętności</div>
            <div className="circle">Zainteresowania</div>
          </div>
        </div>
      </div>
      <section className="aboutme">
        <p>
          <b>Cześć!</b> <br /> Mam na imię Kacper i jestem studentem III roku
          fizjoterapii na AWF w Katowicach. Już na pierwszym roku studiów
          zainteresowałem się anatomią. Mimo, że na początku nic z niej nie
          rozumiałem, było coś takiego co mnie do niej przyciągało. Dopiero po
          poznaniu innych dziedzin takich jak fizjologia, biomechanika,
          biochemia zdałem sobie sprawę, że przecież to wszystko łączy się w
          całość! Cegiełkę do zrozumienia przeze mnie tego tematu dołożył wykład
          o powięzi, która okazała się łącznikiem wszystkiego w naszym ciele!
          Zaskoczeni? Ja też byłem! Aż tak bardzo się nią zafascynowałem, że
          zacząłem o niej czytać książki aby ją lepiej zrozumieć
        </p>
        <p>
          <b>Dlatego też tu jestem!</b> <br />
          Chciałbym Was zafascynować poznawaniem naszego ciała oraz przybliżyć
          temat szeroko rozumianej fizjoterapii. Dlatego jeśli zachęce Was do
          fizjoterapii to wszyscy na tym skorzystamy! Ciągle uczę się czegoś
          nowego i to również będę zamieszczał na moich profilach. Tutaj od
          czasu do czasu znajdziecie dłuższy wpis na blogu, którego przeczytanie
          jednak zajmie dłuższą chwilkę. Zapraszam więc do wspólnej nauki! Nie
          bez przyczyny nazwa FizjoTopic, ponieważ będą tutaj poruszane tematy
          związane z fizjoterapią. Chciałbym wam również pomóc odnaleźć
          przyczynę waszych problemów oraz metody, które mogą przy nich pomóc.
          Osobiście interesuję się terapią manualną i terapią powięziową. Na
          człowieka natomiast staram się patrzeć holistycznie aby połączyć
          wszystkie układy w jedną całość!
        </p>
        <p>
          Jestem również byłym zawodnikiem karate <b>Kyokushin</b> (posiadam
          brązowy pas ) oraz <b>trenerem personalnym</b>. Od małego byłem
          zafascynowany sportem i próbowałem wielu dyscyplin. Trenowałem nawet
          rugby oraz koszykówkę. Ale to sporty walki i trening funkcjonalny
          skradły moje serce i pozostaje tak do dziś. Na moich profilach
          najdziecie więc również ciekawe informacje odnośnie treningu, zdrowego
          stylu życia oraz przykłady ćwiczeń. Jeśli więc macie jakiś problemy
          związane z treningiem, zapraszam do zadawania pytań.
        </p>
        <p>
          Myślę, że tematyka, którą będę zamieszczał na swoich mediach
          społecznościowych zainteresuje każdego. Od studenta fizjoterapii po
          amatora sportu lub przeciętnego Kowalskiego!
        </p>
      </section>

      <section className="certificates">
        <h1>Certyfikaty i dymplomy</h1>
        <SRLWrapper>
          <div className="cards-container">{certificate}</div>
        </SRLWrapper>
      </section>
    </>
  );
};

export default HomePage;
