// src/App.js
import "./App.css";
import Footer from "./Footer";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Departamentos from "./Departamentos/Departamentos";
import LaLibertadLugares from "./LaLibertadLugares/LaLibertadLugares";
import HotelMediterraneo from "./Hotel-Mediterraneo/Hotel-Mediterraneo";
import Login from "./Login/Login";
import Portada from "./Portada/Portada";
import Navbar from "./Navbar/Navbar";
import CarrucelInicio from "./CarrucelInicio/CarrucelInicio";
import Reservaciones from "./Reservaciones/Reservaciones"; // Importamos Reservaciones
import InformativePage from "./InformativePage/InformativePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();

  // Estado local que mantiene el valor de registrationStatus
  const [registrationStatus, setRegistrationStatus] = useState(
    localStorage.getItem("registrationStatus") || "0"
  );

  // Este hook se activa cada vez que el estado de registrationStatus cambia
  useEffect(() => {
    localStorage.setItem("registrationStatus", registrationStatus);
  }, [registrationStatus]);

  const handleLogout = () => {
    setRegistrationStatus("0");
    navigate("/"); // Redirige a la página principal (Portada)
  };

  return (
    <div className="App">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
        rel="stylesheet"
      />
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </>

      {/* Navbar con props */}
      <Navbar
        registrationStatus={registrationStatus}
        handleLogout={handleLogout}
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function AllPage() {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Portada />
              <CarrucelInicio />
              <Departamentos />
            </>
          }
        />
        <Route path="/lalibertad" element={<LaLibertadLugares />} />
        <Route path="/Hotel-Mediterraneo" element={<HotelMediterraneo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservaciones" element={<Reservaciones />} />
        <Route path="/informative" element={<InformativePage />} />{" "}
        {/* Nueva ruta */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AllPage;
