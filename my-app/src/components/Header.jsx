import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-primary">
        <Link to="/Home" className="logo">Inicio</Link>
        <Link to="/Registro">Registrate</Link>
        <Link to="/Login">Identificate</Link>
</nav>

  );
};
export default Header;



/*<nav className="navbar">
      <Link to="/Home" className="logo">Inicio</Link>
      <Link to="/Registro">Registrate</Link>
      <Link to="/Login">Identificate</Link>
    </nav>*/