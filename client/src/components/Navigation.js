import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

import AuthUserContext from "./AuthUserContext";
import SignOutButton from "./SignOut";
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<ul className="allNav">
  <li className="navLink"><Link to={routes.HOME}>Home</Link></li>
  <li className="navLink"><Link to={routes.ACCOUNT}>Account</Link></li>
  <li className="navLink"><SignOutButton /></li>
</ul>

const NavigationNonAuth = () =>
  <ul>
  </ul>

export default Navigation;