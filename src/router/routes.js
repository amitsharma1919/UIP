import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/App.react';
import Home from '../components/Home.react';
import PageNotFound from '../components/PageNotFound.react';

const routes = (
    <Route path='/' mapMenuTitle="Home" component={App}>
        <IndexRoute component={Home} />
        <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
    </Route>
);

export default routes;