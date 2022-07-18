import React, { useState } from 'react';
import { signIn } from '../api';
import Home from './Home';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [isSignError, setIsSignError] = useState(false);

  const signInUser = async (e) => {
    e.preventDefault();
    const body = await signIn(email, password);
    console.log(body);
    if (body.isAuthenticated) {
      setIsSigned(true);
    } else {
      setIsSignError(true);
    }
  };

  return (
    <>
      {!isSigned ? (
        <>
          <h2>Accede al Campus Virtual</h2>
          <div className="mainContainer">
            <form className="formContainer">
              <input className="form-field" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="form-field" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={signInUser} className="button">
                Ingresar
              </button>
              {isSignError && (<div className='formResponse'>Usuario No Existe</div>)}
            </form>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Form;

/*import React from "react";

const Login = () => {
  return (
    <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h1 class="card-title">Sign In</h1>
          <p>Do you have an account?</p>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            
          </div>
          <div className="sign-in-button-container ">
            <button type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Submit</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


export const Login = ({setIsAuth}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/user/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
        }),
        })
          .then(response => response.json())
          .then((data) => {
          if (data.isAuthenticated) {
            setIsAuth(data.isAuthenticated);
          }
          localStorage.setItem('token',data.jwtToken);
        })
          .catch((error) => console.log(error));
    };
  return (
    <form action="" onSubmit={handleSubmit}>
        <input
          value={email} 
          type="text" 
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          value={password}
          type="password" 
          placeholder="password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
    </form>
  );
};
*/