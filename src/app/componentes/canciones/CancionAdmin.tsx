export const CancionAdmin = () => {
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
                <th>Opciones</th>
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
                  <a href="/canact/1">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1d66f7" }}
                    ></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "red" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mi ex tenia razón</td>
                <td>Karol G</td>
                <td>4.5</td>
                <td>Reggaeton</td>
                <td>
                  <a href="/canact/2">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1d66f7" }}
                    ></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "red" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sin medir distancia</td>
                <td>Diomedes Diaz</td>
                <td>4.5</td>
                <td>Vallenato</td>
                <td>
                  <a href="/canact/3">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1d66f7" }}
                    ></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "red" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>My Inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal Soft</td>
                <td>
                  <a href="/canact/4">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1d66f7" }}
                    ></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "red" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
