import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hotel-Mediterraneo.css";

function HotelMediterraneo() {
  const [people, setPeople] = useState("");
  const [tables, setTables] = useState("");
  const [sillas, setSillas] = useState("");
  const [decoracion, setDecoracion] = useState(false);
  const [comida, setComida] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);
  const [userId, setUserId] = useState(""); // Estado para almacenar el ID
  const [rowIndex, setRowIndex] = useState(null); // Estado para almacenar el índice de la fila

  useEffect(() => {
    // Recuperar el ID del localStorage
    const storedId = localStorage.getItem("id");
    console.log("ID recuperado del localStorage:", storedId);
    setUserId(storedId);

    // Buscar la fila en la hoja usando el ID
    if (storedId) {
      buscarFilaConId(storedId);
    }
  }, []);

  // Función para buscar la fila con el id en la hoja
  const buscarFilaConId = async (id) => {
    try {
      const response = await axios.get(
        "https://api.sheetbest.com/sheets/2c7ca1f5-8079-4cd7-beca-6ac336a853d4"
      );
      const rows = response.data; // Todas las filas de la hoja

      let encontrado = false; // Variable para saber si encontramos el ID

      // Buscar la fila que coincide con el id en todas las filas
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === id) {
          setRowIndex(i); // Guardar el índice de la fila
          console.log("Fila encontrada en el índice:", i);
          encontrado = true;
          break;
        }
      }

      if (!encontrado) {
        console.log("ID no encontrado en las filas.");
      }
    } catch (error) {
      console.error("Error al buscar la fila:", error);
    }
  };

  const actualizarPresupuesto = (
    nuevasPersonas,
    nuevasMesas,
    nuevasSillas,
    nuevaDecoracion,
    nuevaComida
  ) => {
    const costoPersonas = nuevasPersonas * 16;
    const costoMesas = nuevasMesas * 5;
    const costoSillas = nuevasSillas * 2;
    const costoDecoracion = nuevaDecoracion ? 50 : 0;
    const costoComida = nuevaComida * 10; // Ejemplo: $10 por plato
    setTotalBudget(
      costoPersonas + costoMesas + costoSillas + costoDecoracion + costoComida
    );
  };

  const manejarPersonas = (valor) => {
    const numPersonas = Math.min(Math.max(parseInt(valor, 10) || 0, 0), 300);
    setPeople(numPersonas > 0 ? numPersonas : "");
    actualizarPresupuesto(
      numPersonas,
      tables || 0,
      sillas || 0,
      decoracion,
      comida || 0
    );
  };

  const manejarMesas = (valor) => {
    const numMesas = Math.min(Math.max(parseInt(valor, 10) || 0, 0), 150);
    setTables(numMesas > 0 ? numMesas : "");
    actualizarPresupuesto(
      people || 0,
      numMesas,
      sillas || 0,
      decoracion,
      comida || 0
    );
  };

  const manejarSillas = (valor) => {
    const numSillas = Math.min(Math.max(parseInt(valor, 10) || 0, 0), 300);
    setSillas(numSillas > 0 ? numSillas : "");
    actualizarPresupuesto(
      people || 0,
      tables || 0,
      numSillas,
      decoracion,
      comida || 0
    );
  };

  const manejarDecoracion = () => {
    const nuevaDecoracion = !decoracion;
    setDecoracion(nuevaDecoracion);
    actualizarPresupuesto(
      people || 0,
      tables || 0,
      sillas || 0,
      nuevaDecoracion,
      comida || 0
    );
  };

  const manejarComida = (valor) => {
    const numComida = Math.min(Math.max(parseInt(valor, 10) || 0, 0), 300);
    setComida(numComida > 0 ? numComida : "");
    actualizarPresupuesto(
      people || 0,
      tables || 0,
      sillas || 0,
      decoracion,
      numComida
    );
  };

  // Función de reserva que actualiza los datos en la hoja
  const reservar = async () => {
    if (!userId) {
      alert("Inicia sesion o registrate para realizar esta accion.");
      return;
    }

    const reservaData = {
      lugar_reservacion: "Hotel Mediterraneo",
      personas_asistir: people || 0,
      mesas_rentadas: tables || 0,
      sillas_rentadas: sillas || 0,
      decoracion: decoracion ? "Sí" : "No",
      comida: comida || 0,
      total_pagar: totalBudget || 0,
      id: userId, // El ID del usuario
    };

    try {
      // Si ya existe la fila (es decir, rowIndex no es null), se actualiza
      if (rowIndex !== null) {
        const updateResponse = await axios.patch(
          `https://api.sheetbest.com/sheets/2c7ca1f5-8079-4cd7-beca-6ac336a853d4/${rowIndex}`,
          reservaData,
          {
            headers: {
              "X-Api-Key":
                "Dj@lW8qyJrHxCtxRzZVCAFPa!GrOMoOfm9KKNkm#JvdYOHqINsmyFk7Xn!Id9tE1", // API Key
            },
          }
        );
        console.log("Reserva actualizada:", updateResponse.data);
        alert("Reserva actualizada exitosamente!");
      } else {
        // Si el ID no se encuentra, entonces se agrega un nuevo registro
        const createResponse = await axios.post(
          "https://api.sheetbest.com/sheets/2c7ca1f5-8079-4cd7-beca-6ac336a853d4",
          reservaData,
          {
            headers: {
              "X-Api-Key":
                "Dj@lW8qyJrHxCtxRzZVCAFPa!GrOMoOfm9KKNkm#JvdYOHqINsmyFk7Xn!Id9tE1", // API Key
            },
          }
        );
        console.log("Reserva creada:", createResponse.data);
        alert("Reserva creada exitosamente!");
      }
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
      alert("Hubo un problema al realizar la reserva.");
    }
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="Input-Precio"
              type="number"
              min={0}
              max={300}
              value={people}
              onChange={(e) => manejarPersonas(e.target.value)}
            />
            <h5 style={{ marginLeft: "10px" }}>Personas a asistir</h5>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="Input-Precio"
              type="number"
              min={0}
              max={150}
              value={tables}
              onChange={(e) => manejarMesas(e.target.value)}
            />
            <h5 style={{ marginLeft: "10px" }}>Mesas Rentadas</h5>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="Input-Precio"
              type="number"
              min={0}
              max={300}
              value={sillas}
              onChange={(e) => manejarSillas(e.target.value)}
            />
            <h5 style={{ marginLeft: "10px" }}>Sillas Rentadas</h5>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="Input-Precio"
                type="checkbox"
                checked={decoracion}
                onChange={manejarDecoracion}
              />
              <h5 style={{ marginLeft: "10px" }}>Decoración</h5>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="Input-Precio"
                type="number"
                min={0}
                max={300}
                value={comida}
                onChange={(e) => manejarComida(e.target.value)}
              />
              <h5 style={{ marginLeft: "10px" }}>Comida</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="Summit-and-budget">
        <div className="Budget" style={{ padding: "10px" }}>
          <h3 className="Texto-Budget">Total a pagar: ${totalBudget}</h3>
        </div>
        <div>
          <div className="Botonn">
            <button className="Subir-Boton" onClick={reservar}>
              <span className="circle1" />
              <span className="circle2" />
              <span className="circle3" />
              <span className="circle4" />
              <span className="circle5" />
              <span className="text">Reservar</span>
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default HotelMediterraneo;
