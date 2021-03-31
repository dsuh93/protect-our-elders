import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';

const App = () => (
    <div id="app-div">
        
            <Route path="/" component={Navbar} />
        <Switch>
            <Route exact path="/" component={Splash} />
         </Switch>
    </div>
);

export default App;