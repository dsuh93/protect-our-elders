import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import About from './about/about';
import Footer from './footer/FooterContainer';
import Login from './session/LoginContainer';

const App = () => (
    <div id="outer-div">
        <div id="app-div">
                <Route path="/" component={Navbar} />
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/about" component={About} />
                <AuthRoute exact path="/login" component={Login} />
            </Switch>

            
        </div>
        <Footer />
    </div>
);

export default App;