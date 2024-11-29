import React from "react";
import WeImage from "./Imagenes/We.png";
import GrupoImage from "./Imagenes/Grupo.jpg";
import "./InformativePage.css";

function InformativePage() {
  return (
    <div>
    <div className="nosotros-page">
      <div className="container">
        <div className="text-section">
          <h1 className="Titulos">Nosotros</h1>
          <p className="Informacionn">
            Eventure aspira a ser la herramienta líder en planificación de eventos,
            destacándose por su innovación continua, facilidad de uso y compromiso
            con la satisfacción del usuario. Diseñada para ofrecer una experiencia
            intuitiva y accesible, permite personalizar eventos a medida, facilitar
            la colaboración en tiempo real y automatizar tareas clave como
            recordatorios y recomendaciones personalizadas. Además, integra una red
            de proveedores locales verificados, fomentando economías locales y
            simplificando contrataciones. Con estas características, Eventure busca
            no solo ahorrar tiempo y reducir el estrés de la organización, sino
            también empoderar a usuarios sin experiencia, garantizando que cada
            evento planificado sea memorable y exitoso.
          </p>
        </div>
        <div className="image-section">
          <img src={WeImage} alt="Nosotros - equipo de Eventure" />
        </div>
      </div>

      <div className="container">
        <div className="text-section">
          <h1 className="Titulos">Misión</h1>
          <p className="Informacion">
            Nuestra misión es empoderar a las personas para que conviertan sus ideas
            en eventos memorables. Lo hacemos proporcionando una plataforma
            intuitiva, práctica y confiable que simplifica el diseño y la búsqueda
            de locales, eliminando las barreras de tiempo y estrés que suelen surgir
            al planear un evento.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-section">
          <h1 className="Titulos">Visión</h1>
          <p className="Informacion">
            Ser la herramienta líder para la planificación de eventos, reconocida
            por nuestra innovación, facilidad de uso y compromiso con la
            satisfacción de nuestros usuarios. En Eventure, aspiramos a convertirnos
            en el primer lugar al que recurran quienes desean que sus eventos sean
            un éxito.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-section">
          <h1 className="Titulos">Integrantes</h1>
          <p>
            Andrea Argueta - Alisson Guevara - Fernando Adiel - Ashly Romero -
            Asly Ramirez
          </p>
        </div>
        <div className="image-section">
          <img src={GrupoImage} alt="Integrantes del equipo de Eventure" />
        </div>
      </div>
    </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default InformativePage;
