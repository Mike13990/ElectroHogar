// src/components/Carrito.jsx
import { useState } from "react";

function Carrito({ carrito, eliminarDelCarrito, vaciarCarrito }) {
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [recibo, setRecibo] = useState(null);

  const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);

  const finalizarCompra = () => {
    if (carrito.length === 0) return;

    const numeroOrden = `OC-${Date.now().toString().slice(-6)}`;
    const fecha = new Date().toLocaleString("es-GT");

    setRecibo({
      numeroOrden,
      fecha,
      items: carrito,
      total,
    });
    setCompraFinalizada(true);
  };

  const imprimirRecibo = () => {
    window.print();
  };

  const nuevaCompra = () => {
    setCompraFinalizada(false);
    setRecibo(null);
    vaciarCarrito();
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasCarrito"
      aria-labelledby="offcanvasCarritoLabel"
    >
      <div className="offcanvas-header bg-dark text-white">
        <h5 className="offcanvas-title" id="offcanvasCarritoLabel">
          🛒 Carrito de Compras
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Cerrar"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column">
        {!compraFinalizada && (
          <>
            {carrito.length === 0 ? (
              <div className="alert alert-secondary text-center">
                El carrito está vacío.
              </div>
            ) : (
              <ul className="list-group mb-3">
                {carrito.map((producto, index) => (
                  <li
                    key={`${producto.id}-${index}`}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div className="fw-semibold">{producto.nombre}</div>
                      <small className="text-muted">${producto.precio.toFixed(2)}</small>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => eliminarDelCarrito(index)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto">
              <h5 className="d-flex justify-content-between">
                <span>Total:</span>
                <span className="text-success">${total.toFixed(2)}</span>
              </h5>
              <button
                className="btn btn-warning w-100 mt-2"
                disabled={carrito.length === 0}
                onClick={finalizarCompra}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}

        {/* Recibo de compra */}
        {compraFinalizada && recibo && (
          <div id="areaRecibo">
            <div className="alert alert-success">Compra realizada con éxito.</div>
            <h6>Recibo de Compra</h6>
            <p className="mb-1 small">
              <strong>No. Orden:</strong> {recibo.numeroOrden}
            </p>
            <p className="mb-3 small">
              <strong>Fecha:</strong> {recibo.fecha}
            </p>

            <ul className="list-group mb-3">
              {recibo.items.map((producto, index) => (
                <li
                  key={`${producto.id}-recibo-${index}`}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span>{producto.nombre}</span>
                  <span>${producto.precio.toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <h5 className="d-flex justify-content-between border-top pt-2">
              <span>Total pagado:</span>
              <span className="text-success">${recibo.total.toFixed(2)}</span>
            </h5>

            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-outline-dark" onClick={imprimirRecibo}>
                Imprimir Recibo
              </button>
              <button className="btn btn-secondary" onClick={nuevaCompra}>
                Nueva Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrito;
