// src/App.jsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Lavadoras from "./components/Lavadoras";
import Refrigeradores from "./components/Refrigeradores";
import Estufas from "./components/Estufas";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => [...carritoActual, producto]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito((carritoActual) => carritoActual.filter((_, i) => i !== index));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const abrirCarrito = () => {
    const offcanvasEl = document.getElementById("offcanvasCarrito");
    if (offcanvasEl && window.bootstrap) {
      const offcanvas = new window.bootstrap.Offcanvas(offcanvasEl);
      offcanvas.show();
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar totalCarrito={carrito.length} abrirCarrito={abrirCarrito} />

      {/* Espaciado para compensar el navbar fixed-top */}
      <div style={{ paddingTop: "56px" }}>
        <Inicio />
        <Lavadoras agregarAlCarrito={agregarAlCarrito} />
        <Refrigeradores agregarAlCarrito={agregarAlCarrito} />
        <Estufas agregarAlCarrito={agregarAlCarrito} />
      </div>

      <Footer />

      <Carrito
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
        vaciarCarrito={vaciarCarrito}
      />
    </div>
  );
}

export default App;