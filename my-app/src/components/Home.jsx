import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div class="card">
      <div class="card-body">
        <div className="container-title-card">
          <h1 class="card-title">¡TE GUSTA LA AGRICULTURA ECOLOGICA!</h1>
          <h3>TENEMOS ESTE CURSO PARA TI</h3>
          <h3>APRENDERAS</h3>
          <h3>Concepto de agricultura ecológica y regulación legal.</h3>
          <h3>El suelo en la agricultura ecológica.</h3>
          <h3>Técnicas de cultivo ecológico.</h3>
          <h3>Prevención y tratamiento de enfermedades y plagas.</h3>
        </div>
      
        <div className="buttons-card">
          <button type="button" class="btn btn-primary btn-sm button-link, btn btn-primary btn-lg">
            <Link to="/Login" class="card-link text-light">
              Identificate
            </Link>
          </button>

          <button type="button" class="btn btn-primary btn-sm button-link, btn btn-secondary btn-lg ">
            <Link to="/Registro" class="card-link text-light">
              Registrate
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;