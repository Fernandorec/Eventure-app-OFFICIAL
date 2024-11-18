import React, { useState } from "react";
import "./Hotel-Mediterraneo.css";

function HotelMediterraneo() {
  const [totalBudget, setTotalBudget] = useState(0);
  const [people, setPeople] = useState("");

  const manejarCalcularPresupuesto = (valor) => {
    const numPersonas = Math.min(Math.max(parseInt(valor, 10) || 0, 0), 300);
    setPeople(numPersonas > 0 ? numPersonas : "");
    setTotalBudget(numPersonas * 16);
  };

  return (
    <div>
      <br />
      <h4 id="seccion">
        <a href="http://localhost:3000/">Inicio</a> {">"}{" "}
        <a href="http://localhost:3000/lalibertad">Lugares La Libertad</a> {">"}{" "}
        Hotel Mediterraneo
      </h4>
      <br />
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./Hotel-Mediterraneo/Hotel-Mediterraneo1.jpeg"
              className="d-block w-100"
              alt="Hotel Mediterraneo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Hotel-Mediterraneo/Hotel-Mediterraneo2.jpeg"
              className="d-block w-100"
              alt="Hotel Mediterraneo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Hotel-Mediterraneo/Hotel-Mediterraneo3.jpeg"
              className="d-block w-100"
              alt="Hotel Mediterraneo"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <div className="Datos">
        <div className="Titulo">
          <h1>Hotel Mediterraneo</h1>
        </div>
        <div>
          <h6>Santa Tecla || La Libertad</h6>
        </div>
        <div>
          <h3>Descripción</h3>
        </div>
        <div>
          <p>
            Hotel Mediterráneo Plaza ofrece alojamiento en 24 habitaciones
            equipadas, 4 salones para seminarios y capacitaciones, áreas verdes
            y piscina para eventos de hasta 400 personas, con capacidad de 15 a
            350 personas en diferentes espacios. Contamos con banquete y
            catering tanto en el hotel como a domicilio, cubriendo montajes y
            servicio profesional.
          </p>
        </div>
        <div>
          <h3>Aditamentos</h3>
        </div>
        <div className="Additamentos-Div">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              className="Input-Precio"
              type="number"
              id="numero"
              name="numero"
              min={0}
              max={300}
              step={1}
              required
              value={people}
              onChange={(e) => manejarCalcularPresupuesto(e.target.value)}
            />
            <h5 style={{ marginLeft: "10px" }}>Personas a asistir</h5>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input className="Input-Precio" type="number" />
            <h5 style={{ marginLeft: "10px" }}>Mesas circulares</h5>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input className="Input-Precio" type="number" />
            <h5 style={{ marginLeft: "10px" }}>Sillas</h5>
          </div>
          <>
            <div className="checkbox-wrapper">
              <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
              <label className="terms-label" htmlFor="terms-checkbox-37">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 200 200"
                  className="checkbox-svg"
                >
                  <mask fill="white" id="path-1-inside-1_476_5-37">
                    <rect height={200} width={200} />
                  </mask>
                  <rect
                    mask="url(#path-1-inside-1_476_5-37)"
                    strokeWidth={40}
                    className="checkbox-box"
                    height={200}
                    width={200}
                  />
                  <path
                    strokeWidth={15}
                    d="M52 111.018L76.9867 136L149 64"
                    className="checkbox-tick"
                  />
                </svg>
                <h5 style={{ marginLeft: "10px" }}>Comida</h5>
                </label>
            </div>
          </>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input className="Input-Precio" type="number" />
            <h5 style={{ marginLeft: "10px" }}>Comida</h5>
          </div>
        </div>
      </div>

      <div className="Summit-and-budget">
        <div className="Budget" style={{ padding: "10px" }}>
          <p id="Texto-Budget">Total Presupuesto: ${totalBudget}</p>
        </div>
        <div className="Boton">
          <button className="Subir-Boton">
            <span className="circle1" />
            <span className="circle2" />
            <span className="circle3" />
            <span className="circle4" />
            <span className="circle5" />
            <span className="text">Reservar</span>
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default HotelMediterraneo;
