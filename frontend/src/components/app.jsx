import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div>
        {/* <h1>Hello World</h1> */}
        <Modal />
        <NavBar />
        <Switch>
            {/* <Route exact path="/" component={Splash} /> */}
        </Switch>
    </div>
);