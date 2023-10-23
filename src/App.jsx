import React from "react";
// import './App.css';
import Receta from "./Receta";

const datosReceta = {
  nombre: "Pastel de chocolate",
  tiempoPreparacion: 60,
  ingredientes: [
    {
      nombre: "chocolate negro",
      cantidad: "200g",
    },
    {
      nombre: "mantequilla",
      cantidad: "200g",
    },
    {
      nombre: "azúcar",
      cantidad: "200g",
    },
    {
      nombre: "huevos",
      cantidad: "4",
    },
    {
      nombre: "harina",
      cantidad: "150g",
    },
  ],
  pasos: [
    "Precalentar el horno a 180 grados.",
    "Derretir el chocolate y la mantequilla juntos en un recipiente.",
    "Agregar el azúcar y mezclar bien.",
    "Agregar los huevos uno por uno y mezclar bien después de cada adición.",
    "Agregar la harina y mezclar hasta que esté bien combinado.",
    "Engrasar un molde para pastel y verter la mezcla.",
    "Hornear durante 40 minutos.",
    "Dejar enfriar antes de servir.",
  ],
};

function App() {
  return (
    <div className="App">
      <Receta datosReceta={datosReceta} />
    </div>
  );
}

export default App;
