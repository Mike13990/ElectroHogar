// src/components/Inicio.jsx
import { destacados } from "../data/productos";

function Inicio() {
  // Al hacer click en un producto del carrusel, navega a la sección de su categoría
  const irACategoria = (categoria) => {
    const seccion = document.getElementById(categoria);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-5">
      {/* Carrusel de productos destacados */}
      <div
        id="carruselProductos"
        className="carousel slide shadow"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {destacados.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carruselProductos"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Producto ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {destacados.map((producto, index) => (
            <div
              key={producto.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => irACategoria(producto.categoria)}
            >
              <img
                src={producto.imagen}
                className="d-block w-100"
                style={{ maxHeight: "480px", objectFit: "cover" }}
                alt={producto.nombre}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h5>{producto.nombre}</h5>
                <p className="mb-0">
                  {producto.marca} - ${producto.precio.toFixed(2)}
                </p>
                <small>Click para ver la sección completa</small>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carruselProductos"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carruselProductos"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Nuestra Historia / Misión / Visión */}
      <div id="nosotros" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestra Esencia</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-secondary bg-opacity-25 text-white border-0 rounded shadow p-3">
                <div className="card-body text-center">
                  <div className="fs-1 mb-2">📖</div>
                  <h5 className="card-title">Nuestra Historia</h5>
                  <p className="card-text small">
                    Nacimos en 2020 con la idea de llevar hogares llenos de comodidad y
                    tecnología. Más de 1,000 pedidos entregados.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-secondary bg-opacity-25 text-white border-0 rounded shadow p-3">
                <div className="card-body text-center">
                  <div className="fs-1 mb-2">🎯</div>
                  <h5 className="card-title">Misión</h5>
                  <p className="card-text small">
                    Ofrecer electrodomésticos de línea blanca con la mejor calidad,
                    precio justo y un servicio excelente.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-secondary bg-opacity-25 text-white border-0 rounded shadow p-3">
                <div className="card-body text-center">
                  <div className="fs-1 mb-2">👁️</div>
                  <h5 className="card-title">Visión</h5>
                  <p className="card-text small">
                    Ser la cadena número uno a nivel nacional, innovando
                    constantemente nuestro catálogo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contacto y Ubicación */}
      <div id="contacto" className="bg-black text-white py-5">
        <div className="container">
          <h2 className="text-center">Contacto y Ubicación</h2>
          <p className="text-center text-warning fw-bold mb-4">Estamos para servirte</p>
          <div className="row text-center g-4">
            <div className="col-12 col-md-4">
              <div className="fs-2">📍</div>
              <h6>Dónos dónde estás</h6>
              <p className="small">Zona 10, Ciudad de Guatemala, Guatemala.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="fs-2">📞</div>
              <h6>Llámanos</h6>
              <p className="small">
                (+502) 2500-8999
                <br />
                Lunes a Domingo de 8:00 am a 11:00 pm
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="fs-2">✉️</div>
              <h6>Escríbenos</h6>
              <p className="small">contacto@electrohogar.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
