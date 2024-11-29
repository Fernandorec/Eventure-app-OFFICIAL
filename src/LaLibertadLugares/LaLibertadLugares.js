import "./LaLibertadLugares.css";
import { Link } from "react-router-dom";

// Importa las imágenes principales
import hotelMediterraneoImg from "./Hotel-Mediterraneo.jpeg";
import hotelAlamoImg from "./Hotel-Alamo.jpeg";
import RanchoCantodeMarImg from "./RanchoCantodeMar.jpeg";
import TresCerditos from "./TresCerditos.jpeg";
import QuintaMontecarlo from "./QuintaMontecarlo.png";
import LaCima from "./LaCima.png";
import JardinelCarmel from "./JardiCarmel.png";
import ElMorrito from "./ElMorrito.png";

function LaLibertadLugares() {
  return (
    <div>
      <br></br>
      {/* Tablas */}
      <h4 id="seccion">
        <a href="http://localhost:3000/">Inicio</a> {">"} Lugares La Libertad
      </h4>
      <br></br>
      <div className="table-container">
        <Link to="/Hotel-Mediterraneo">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    className="imagen"
                    src={hotelMediterraneoImg}
                    alt="Hotel Mediterráneo"
                  />
                  <p className="LibertadLugares">Hotel Mediterráneo</p>
                </td>
              </tr>
            </tbody>
          </table>
        </Link>

        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={hotelAlamoImg}
                  alt="Hotel Alamo Internacional"
                />
                <p className="LibertadLugares">Hotel Alamo Internacional</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={RanchoCantodeMarImg}
                  alt="RanchoCantodeMarImg"
                />
                <p className="LibertadLugares">Rancho Canto de Mar</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={TresCerditos} // Reemplaza "#" con contemporanea4Img cuando lo importes
                  alt="Los Tres Cerditos"
                />
                <p className="LibertadLugares">Los 3 cerditos</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={QuintaMontecarlo} // Reemplaza "#" con contemporanea5Img cuando lo importes
                  alt="Elegant living room style"
                />
                <p className="LibertadLugares">Quinta Montecarlo</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={LaCima} // Reemplaza "#" con contemporanea6Img cuando lo importes
                  alt="Mediterranean rooms"
                />
                <p className="LibertadLugares">La Cima</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={JardinelCarmel} // Reemplaza "#" con contemporanea7Img cuando lo importes
                  alt="Classic rooms"
                />
                <p className="LibertadLugares">Jardín el Carmel</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src={ElMorrito} // Reemplaza "#" con contemporanea8Img cuando lo importes
                  alt="Cottage living room"
                />
                <p className="LibertadLugares">El Morrito</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default LaLibertadLugares;
