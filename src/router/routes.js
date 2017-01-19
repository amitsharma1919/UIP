import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import App from '../components/App.react';
import Home from '../components/Home.react';
import About from '../components/About.react';
import PageNotFound from '../components/PageNotFound.react';

const routes = (
    <Route path='/' mapMenuTitle="Home" component={App}>
        <IndexRedirect to="/UIP/home" />
        <Route path="/UIP/home" mapMenuTitle="Home" component={Home} />
        <Route path="/UIP/about" mapMenuTitle="About" component={About} />
        <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
    </Route>
);

export default routes;