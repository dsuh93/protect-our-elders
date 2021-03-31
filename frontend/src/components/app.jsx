import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';

const App = () => (
    <div id="app-div">
        {/* <h1>Protect Our Elders</h1> */}
        {/* <Modal /> */}
        {/* <NavBar /> */}
        <Switch>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={Splash} />
         </Switch>
    </div>
);

export default App;