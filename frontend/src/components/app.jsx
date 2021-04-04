import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import About from './about/about'

const App = () => (
    <div id="app-div">
        
            <Route path="/" component={Navbar} />
        <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Splash} />
         </Switch>
    </div>
);

export default App;