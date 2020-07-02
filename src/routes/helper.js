import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { localStorageConstant} from '../constants';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

export const RenderRoutes = ({routes}) =>(
  <Switch>
    {routes.map((route)=>(
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={()=> <h1>Page not found ! 404 Error</h1>} />
  </Switch>
);

export const isServer = typeof window === 'undefined';

export const isLoggedIn = () => {
  const token = localStorage.getItem(localStorageConstant.ACCESS_TOKEN);
  return !isServer ? !!token : false;
};


