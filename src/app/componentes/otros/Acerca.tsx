import { NavLink } from "react-router-dom";
import registra from "../../../assets/img/registra.png"
import administra from "../../../assets/img/administra.png"
import escuchar from "../../../assets/img/escuchar.png"
export const Acerca = () => {
  return (
    <>
      <main>
        <div className="px-4 py-5 my-5 text-center">
          <i className="fa-solid fa-users fa-3x"></i>
          <h1 className="display-5 fw-bold text-body-emphasis">
            Acerca de Nosotros
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              beatae animi reiciendis maxime ea? Quis, inventore rerum
              consequuntur mollitia accusantium quaerat tempore culpa explicabo
              harum quisquam non, maxime libero asperiores!
            </p>
            <i className="fa-solid fa-circle-down fa-2x"></i>
          </div>
        </div>

        <div className="pt-5 d-flex justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  src={registra}
                  role="img"
                  aria-label="Placeholder"
                  alt="xMidYMid slice"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
                <h2 className="fw-normal">REGISTRA</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, iure beatae nam in explicabo nobis! Magnam facere quod
                  accusamus minus quo!
                </p>
                <p>
                  <NavLink className="btn btn-primary" to="/cancre">
                    Ver
                  </NavLink>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  src={administra}
                  role="img"
                  aria-label="Placeholder"
                  alt="xMidYMid slice"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
                <h2 className="fw-normal">ADMINISTRA</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, iure beatae nam in explicabo nobis! Magnam facere quod
                  accusamus minus quo!
                </p>
                <p>
                  <NavLink className="btn btn-primary" to="/canadmin">
                    Ver
                  </NavLink>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  src={escuchar}
                  role="img"
                  aria-label="Placeholder"
                  alt="xMidYMid slice"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
                <h2 className="fw-normal">DISFRUTA</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, iure beatae nam in explicabo nobis! Magnam facere quod
                  accusamus minus quo!
                </p>
                <p>
                  <NavLink className="btn btn-primary" to="/canlis">
                    Ver
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="container">
          <p className="float-end">
            <NavLink to="/">
              <i className="fa-solid fa-house fa-2x"></i>
            </NavLink>
          </p>
          <p>Developer Fabian Tirado G - © 2024 Company, Inc.</p>
        </footer>
      </main>
    </>
  );
};
