import React from 'react';
import "../style.css";

import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>

  <AuthUserContext.Consumer>
    {authUser =>
      <div>
          <div className="jumbotron">
            <h1 className="jumboText">Back Alley Stash</h1> 
            <p className="jumboSmall">The Importance of Paying Yourself</p>
        </div>
        <div className="accountInfo">
        <h1 className="signInTitle">Account: {authUser.email}</h1>
        <div className="pwChange">
        Change Your Password
        <PasswordChangeForm />
        </div>
        </div>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

