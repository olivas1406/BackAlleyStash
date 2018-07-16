import React from "react";
import { Link } from 'react-router-dom';
import "../style.css";
import AuthUserContext from "../AuthUserContext";
import SignOutButton from "../SignOut";
import * as routes from '../../constants/routes';

  <div className="Navbar">
    <a className="Links" href="/">Home |</a>
    <a className="Links" href="/Logout">&nbsp; Logout</a>
  </div>

const Navbar = () =>
<div className="Navbar">
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
  </div>

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navbar;