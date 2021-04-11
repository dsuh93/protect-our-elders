import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import About from './about/about';
import Protection from './protection/protection';
import Volunteers from './volunteers/volunteers';
import Feedback from './feedback/feedback';
import Footer from './footer/footer'

const App = () => (
    <div id="outer-div">
        <div id="app-div">
                <Route path="/" component={Navbar} />
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/about" component={About} />
                <Route exact path="/protection" component={Protection} />
                <Route exact path="/volunteers" component={Volunteers} />
                <Route exact path="/feedback" component={Feedback} />
            </Switch>

            
        </div>
        <Footer />
    </div>
);

export default App;