import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import About from './about/about';
import Footer from './footer/footer'

console.log(process.env.REACT_APP_GOOGLE_API_KEY);


const App = () => (
    <>
        <div id="app-div">
                <Route path="/" component={Navbar} />
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/about" component={About} />
            </Switch>

            
        </div>
        <Footer />
    </>
);

export default App;