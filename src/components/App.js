import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";
import Socials from "./Socials/Socials";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="centerPage"> */}
      <div className="App">
        <Socials />
        <div className="centerPage">
          <header>
            <Header />
          </header>
          <main>
            <MainPage />
          </main>
        </div>
        <Switch>
          <Route
            render={({ location }) =>
              ["/", "fizjotopic", "/gabinet", "/contact"].includes(
                //"/blog"
                location.pathname
              ) ? (
                <Footer />
              ) : null
            }
          />
        </Switch>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
