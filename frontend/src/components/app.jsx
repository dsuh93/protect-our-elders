import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import About from './about/about';
import AdminContainer from './admin/admin_container';
import Protection from './protection/protection';
import Volunteers from './volunteers/volunteers';
import VolunteerForm from './forms/volunteer_form';
import Feedback from './feedback/feedback';
import Footer from './footer/FooterContainer';
import Login from './session/LoginContainer';

const App = () => (
    <div id="outer-div">
        <div id="app-div">
                <Route path="/" component={Navbar} />
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/about" component={About} />
                <Route exact path="/protection" component={Protection} />
                <Route exact path="/volunteers" component={Volunteers} />
                <Route exact path="/volunteers/signup" component={VolunteerForm} />
                <Route exact path="/feedback" component={Feedback} />
                <AuthRoute exact path="/login" component={Login} />
                <ProtectedRoute exact path="/admin" component={AdminContainer} />
            </Switch>

            
        </div>
        <Footer />
    </div>
);

export default App;