import React from "react";
import "./receta.css";

const Receta = ({ datosReceta }) => {
  return (
    <div className="receta-container">
      <h1>{datosReceta.nombre}</h1>
      <p>Tiempo de preparación: {datosReceta.tiempoPreparacion} minutos</p>

      <h2>Ingredientes:</h2>
      <ul>
        {datosReceta.ingredientes.map((ingrediente, index) => (
          <li key={index}>
            {ingrediente.cantidad} de {ingrediente.nombre}
          </li>
        ))}
      </ul>

      <h2>Pasos:</h2>
      <ol>
        {datosReceta.pasos.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ol>
    </div>
  );
};

export default Receta;
