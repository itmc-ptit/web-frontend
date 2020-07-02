import React from 'react'
import {RenderRoutes, isLoggedIn} from './helper';

import Home from '../modules/Home';
import Login from '../modules/Authentication';

const ROUTES = [
  {
    path:'/',
    key:'ROOT',
    exact : true,
    component: ()=>{
      const userLog = isLoggedIn();
      return userLog ? <Home /> : <Login />
    }
  }
]
export { RenderRoutes }
export default ROUTES