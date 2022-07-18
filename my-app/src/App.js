import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Registro from './components/Registro';
import Login from './components/Login';
import Home from './components/Home';


//<Route path="/" element={<Home />} />
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

/*
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login  from "./components/Login";
import getLocalStorageInfo from "./utils/getLocalStorageInfo";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/user/auth", {
      method: "POST",
      headers: {
        authorization: getLocalStorageInfo(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setIsAuth(data.isAuthenticated));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


  return (
  <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SignUp />} />
      </Routes>
    </div>
      
  );
}
*/


