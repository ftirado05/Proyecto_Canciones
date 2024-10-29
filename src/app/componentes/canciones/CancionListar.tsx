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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe Arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mi ex tenia razón</td>
                <td>Karol G</td>
                <td>4.5</td>
                <td>Reggaeton</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sin medir distancia</td>
                <td>Diomedes Diaz</td>
                <td>4.5</td>
                <td>Vallenato</td>
              </tr>
              <tr>
                <td>4</td>
                <td>My Inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal Soft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
