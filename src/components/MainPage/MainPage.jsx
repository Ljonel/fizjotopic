import React from "react";
import "../../styles/MainPage.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import OfficePage from "../../pages/OfficePage";
import ContactPage from "../../pages/ContactPage";
import BlogPage from "../../pages/BlogPage";
import ErrorPage from "../../pages/ErrorPage";
const MainPage = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/fizjotopic" component={HomePage}></Route>
      <Route path="/blog" component={BlogPage} />
      <Route path="/gabinet" component={OfficePage} />
      <Route path="/kontakt" component={ContactPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default MainPage;
