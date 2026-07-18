// src/components/Estufas.jsx
import { estufas } from "../data/productos";

function Estufas({ agregarAlCarrito }) {
  return (
    <section id="estufas" className="py-5 bg-light">
      <div className="container-fluid px-4">
        <h2 className="text-center mb-5">Estufas</h2>
        <div className="row g-4 justify-content-center">
          {estufas.map((producto) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={producto.id}>
              <div className="card h-100 shadow rounded">
                <img
                  src={producto.imagen}
                  className="card-img-top rounded-top"
                  alt={producto.nombre}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {producto.marca} — {producto.modelo}
                  </h6>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="fw-bold text-success mt-auto">
                    Q{producto.precio.toFixed(2)}
                  </p>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Estufas;
