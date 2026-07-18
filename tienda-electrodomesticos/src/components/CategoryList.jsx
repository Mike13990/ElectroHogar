import React, { useState, useEffect } from 'react';
import { lavadoras, refrigeradores, estufas } from '../data/productos';

function CategoryList({ category, title, addToCart }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const categoryMap = {
    lavadoras,
    refrigeradores,
    estufas
  };

  useEffect(() => {
    async function obtenerProductos() {
      const datos = categoryMap[category];
      
      setTimeout(() => {
        setProductos(datos || []);
        setCargando(false);
      }, 500);
    }
    obtenerProductos();
  }, [category]);

  if (cargando) return <div className="text-center p-5 text-muted">Cargando {title}...</div>;

  return (
    <section id={category} className="py-4 bg-white">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">{title}</h2>
        <div className="row g-4">
          {productos.map((producto) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={producto.id}>
              <div className="card h-100 shadow-sm rounded-3 border-0">
                <img src={producto.imagen} className="card-img-top rounded-top" alt={producto.nombre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <h6 className="text-muted small">{producto.marca} • {producto.modelo}</h6>
                  <p className="card-text small text-secondary flex-grow-1">{producto.descripcion}</p>
                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary h5">Q{producto.precio}</span>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => addToCart(producto)}>
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryList;