import React, { useState } from 'react';
import { signUp } from '../api';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  let body = ''

  const signUpUser = async (e) => {
    e.preventDefault();
    body = await signUp(userName, email, password);
    console.log(body);
    body.isAuthenticated && setIsSignedUp(true);
    body.error && setIsError(true)
  };

  return (
    <div>
      <h2>Bienvenido a Nuestro Campus Virtual</h2>
      <div className="mainContainer">
        <form className="formContainer">
          <input className="form-field" type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input className="form-field" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="form-field" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signUpUser} className="button">
            Ingresar
          </button>
          {isSignedUp ? <div className="formResponse">Registro Exitoso</div> : <div>{body.error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;
/*import React from 'react';

const SignUp = () => {
    return (
      <div className="card-sign-in">
        <div className="card-body">
          <div className="container-title-card">
            <h1 class="card-title">SignUp here</h1>
            <p>
              And start having the best experience!!!
            </p>
          </div>
          <form>
            <div class="row mb-4">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
  
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" />
              </div>
            </div>
            <div class="form-group mb-4">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mb-4">
            <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
              />
              <div>
              <label for="inputAddress2">Your password must be at least 8 characters and include a number or special chatacter.</label>
              </div>
            </div>
  
            <div class="form-group mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  I agree to the  <em>Terms of Use</em> and{" "}
                  <em>Privacy</em>.
                </label>
              </div>
            </div>
  
            <div className="sign-in-button-container">
              <button type="submit" class="btn btn-primary btn-sm sign-in-button">
                <strong>Create Account</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default SignUp;

import React from 'react';

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}
*/

