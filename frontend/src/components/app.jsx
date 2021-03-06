import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar/NavbarContainer";
import Splash from "./splash/SplashContainer";
import About from "./about/about";
import AdminContainer from "./admin/admin_container";
import Protection from "./protection/ProtectionContainer";
import Volunteers from "./volunteers/VolunteerContainer";
import VolunteerForm from "./forms/volunteer_form";
import Feedback from "./feedback/FeedbackContainer";
import Footer from "./footer/FooterContainer";
import Login from "./session/LoginContainer";
import Contact from "./contact/ContactContainer";
import Sponsors from "./sponsors/sponsors";
import Donate from "./donate/donate";

const App = () => {
  const currentLanguage = useSelector((state) => state.ui.language);

  return (
    <div id="outer-div">
      <div id="app-div">
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route
            exact
            path="/about"
            render={(props) => (
              <About {...props} currentLanguage={currentLanguage} />
            )}
          />
          <Route exact path="/protection" component={Protection} />
          <Route exact path="/volunteers" component={Volunteers} />
          <Route exact path="/volunteers/signup" component={VolunteerForm} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/donate" component={Donate} />
          <AuthRoute exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={AdminContainer} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
