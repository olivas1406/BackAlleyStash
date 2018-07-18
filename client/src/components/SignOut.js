import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <div className="amSpecial">
  <div 
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </div>
  </div>

export default SignOutButton;