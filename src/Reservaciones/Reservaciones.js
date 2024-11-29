import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reservaciones.css";
import axios from "axios";

function Reservaciones() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [reservaciones, setReservaciones] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar el ID del localStorage
    const storedId = localStorage.getItem("id");
    console.log("ID recuperado del localStorage:", storedId); // Verificar el ID recuperado
    setUserId(storedId);

    // Si se tiene el ID, buscar las reservaciones correspondientes
    if (storedId) {
      fetchReservaciones(storedId);
    }

    const savedRegistrationStatus = localStorage.getItem("registrationStatus");
    setIsRegistered(savedRegistrationStatus === "1");
  }, []);

  // Función para buscar y filtrar las reservaciones por el ID del usuario
  const fetchReservaciones = async (userId) => {
    try {
      const response = await axios.get(
        "https://api.sheetbest.com/sheets/2c7ca1f5-8079-4cd7-beca-6ac336a853d4"
      );
      const rows = response.data;
      console.log("Datos obtenidos de la API:", rows); // Verifica los datos obtenidos

      // Filtrar las reservaciones por el ID del usuario
      const userReservations = rows.filter((reserva) => reserva.id === userId);
      console.log("Reservaciones filtradas para el usuario:", userReservations); // Verificar las reservaciones filtradas

      setReservaciones(userReservations);
    } catch (error) {
      console.error("Error al obtener las reservaciones:", error);
    }
  };

  if (!isRegistered) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br></br>
        
        <div className="Centro1">
          <h2 className="texto1" style={{ color: "#250a58" }}>
            Debes registrarte o iniciar sesión para acceder a esta página
          </h2>
        </div>
        <button
          id="Logueate"
          onClick={() => navigate("/login")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Loguearse
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </div>
    );
  }

  return (
    <div>
      <div className="Centro">
        {reservaciones.length > 0 ? (
          reservaciones.map((reserva, index) => (
            <div className="card" key={index}>
              <div className="card-title">
                <h2 className="Titulo" style={{ color: "#250a58" }}>
                  {reserva.lugar_reservacion}
                </h2>
              </div>
              <div className="card-subtitle">
                <h6>Personas a asistir: {reserva.personas_asistir}</h6>
                <h6>Mesas rentadas: {reserva.mesas_rentadas}</h6>
                <h6>Sillas rentadas: {reserva.sillas_rentadas}</h6>
                <h6>Decoración: {reserva.decoracion}</h6>
                <h6>Comida: {reserva.comida}</h6>
                <h6>Total a pagar: {reserva.total_pagar}</h6>
              </div>
              <hr className="card-divider" />
              <div className="card-footer">
                <button onClick={() => handleCancel(reserva)}>
                  Cancelar Reservación
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 id="NoRegistros" style={{ color: "#250a58" }}>
            No hay reservaciones disponibles
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


          </h3>
          
        )}
        
      </div>
    </div>
  );

  // Función para cancelar la reservación
  function handleCancel(reserva) {
    const reservationId = reserva.id; // Asegúrate de que el id es único
    console.log("ID de la reservación para cancelar:", reservationId); // Verificar el ID de la reservación

    // Realizar un PATCH para vaciar los datos de la reservación
    axios
      .patch(
        `https://api.sheetbest.com/sheets/2c7ca1f5-8079-4cd7-beca-6ac336a853d4/id/${reservationId}`,
        {
          lugar_reservacion: "",
          personas_asistir: "",
          mesas_rentadas: "",
          sillas_rentadas: "",
          decoracion: "",
          comida: "",
          total_pagar: "",
        }
      )
      .then(() => {
        setReservaciones((prev) =>
          prev.filter((reservaItem) => reservaItem.id !== reservationId)
        );
        alert("Reservación cancelada");
      })
      .catch((error) => {
        console.error("Error al cancelar la reservación:", error);
      });
  }
}

export default Reservaciones;
