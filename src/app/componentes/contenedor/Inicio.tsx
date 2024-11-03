import { NavLink } from "react-router-dom";
import imagenInicio from "../../../assets/img/imagen_inicio.png"
export const Inicio = () => {
  return (
    <>
   
<main>
 

  <div className="b-example-divider"></div>

  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={imagenInicio} className="d-block mx-lg-auto img-fluid" alt="Imagen_inicio" width="666" height="375" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Bienvenido</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga hic molestias esse aspernatur natus praesentium quia labore voluptatibus! Beatae, molestias odit illo recusandae nesciunt vel consequatur laborum perspiciatis amet!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <NavLink to="/canlis">
          <button type="button" className="btn btn-outline-primary btn-lg px-4">Canciones</button>
          </NavLink>
        </div>
      </div>
    </div>
  </div>

  <div className="b-example-divider"></div>


 
</main>

    </>
  );
};
