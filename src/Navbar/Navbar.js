// src/components/Navbar/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ registrationStatus, handleLogout }) {
  const navigate = useNavigate();

  return (
    <header id="AllBanner">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#3d2669" }}>
        <div className="container-fluid">
          <Link id="Name" className="navbar-brand" to="/" style={{ color: "white" }}>
            Eventure
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Eventos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Contactos
                </a>
              </li>
              {registrationStatus === "1" ? (
                <li className="nav-item">
                  <button
                    className="nav-link"
                    style={{ color: "white", backgroundColor: "transparent", border: "none" }}
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" style={{ color: "white" }}>
                      Iniciar sesión
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" style={{ color: "white" }}>
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
