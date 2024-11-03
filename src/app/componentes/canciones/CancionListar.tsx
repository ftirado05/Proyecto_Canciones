import { NavLink } from "react-router-dom";

export const CancionListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <td>No.</td>
                <th>Título Canción</th>
                <th>Cantante</th>
                <th>Duración</th>
                <th>Género</th>
                <th>Disfruta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe Arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
                <td>
                <NavLink to="https://open.spotify.com/intl-es/track/15DUcGdD7BnGEJW6cZmtbd?si=cb9240521f784fc8" target="_blank">
                <i className="fa-solid fa-play fa-lg" style={{color: "#74C0FC"}}></i>
                </NavLink>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mi ex tenia razón</td>
                <td>Karol G</td>
                <td>4.5</td>
                <td>Reggaeton</td>
                <td>
                <NavLink to="https://open.spotify.com/intl-es/track/54zcJnb3tp9c5OVKREZ1Is?si=baf8288ed0c04f92" target="_blank">
                <i className="fa-solid fa-play fa-lg" style={{color: "#74C0FC"}}></i>
                </NavLink>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sin medir distancia</td>
                <td>Diomedes Diaz</td>
                <td>4.5</td>
                <td>Vallenato</td>
                <td>
                <NavLink to="https://open.spotify.com/intl-es/track/1p3kQIzyl2NKeJ45uDQw4G?si=e995911c5e5a4d8a" target="_blank">
                <i className="fa-solid fa-play fa-lg" style={{color: "#74C0FC"}}></i>
                </NavLink>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>My Inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal Soft</td>
                <td>
                <NavLink to="https://open.spotify.com/intl-es/track/4UzVcXufOhGUwF56HT7b8M?si=e0011ef20270463c" target="_blank">
                <i className="fa-solid fa-play fa-lg" style={{color: "#74C0FC"}}></i>
                </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
