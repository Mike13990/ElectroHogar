import React from 'react';

function Carrito({ show, handleClose, cartItems, removeFromCart, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    alert("¡Compra finalizada con éxito!");
    clearCart();
    handleClose();
  };

  return (
    <>
      {/* DRAWER usando Offcanvas nativo de Bootstrap */}
      <div className={`offcanvas offcanvas-end ${show ? 'show' : ''}`} tabIndex="-1" style={{ visibility: show ? 'visible' : 'hidden', width: '350px' }}>
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title">🛒 Carrito de Compras</h5>
          <button type="button" className="btn-close btn-close-white" onClick={handleClose}></button>
        </div>
        <div className="offcanvas-body bg-light">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted mt-5">El carrito está vacío.</p>
          ) : (
            <>
              <ul className="list-group mb-3">
                {cartItems.map((item) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                    <div>
                      <div className="fw-bold">{item.nombre}</div>
                      <small className="text-muted">{item.marca} - {item.modelo}</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold text-primary">{item.precio}</span>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>
                        🗑️
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between border-top pt-3 fs-5 fw-bold">
                <span>Total:</span>
                <span className="text-success">Q{total.toFixed(2)}</span>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-success btn-lg" onClick={handleCheckout}>
                  Finalizar Compra
                </button>
                <button className="btn btn-outline-secondary" onClick={handleClose}>
                  Seguir Comprando
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Fondo oscuro manual (Backdrop) */}
      {show && (
        <div 
          className="position-fixed top-0 start-0 w-100 vh-100 bg-dark" 
          style={{ opacity: 0.5, zIndex: 1040 }} 
          onClick={handleClose}
        ></div>
      )}
    </>
  );
}

export default Carrito;