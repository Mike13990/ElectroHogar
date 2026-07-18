import React from 'react';

function Navbar({ toggleCart, onNavigate, activeSection, cartItems }) { // Recibimos cartItems aquí
  return (
    <>

      <nav className="navbar navbar-dark bg-dark shadow rounded-0 sticky-top py-2">
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* LOGO + NOMBRE + ESLOGAN */}
          <button 
            className="navbar-brand btn btn-link p-0 border-0 d-flex align-items-center" 
            onClick={() => onNavigate('inicio')}
          >
            <img 
              src="https://i.postimg.cc/15ZYy40X/logo-(3).png" 
              alt="Logo" 
              style={{ height: '40px', width: 'auto', borderRadius: '4px' }} 
            />
            <div className="ms-2 d-flex flex-column">
              <span className="text-white fw-bold fs-5 lh-1">ElectroHogar</span>
              <span className="text-warning small lh-1" style={{ fontSize: '0.7rem' }}>Tecnología que facilita tu vida</span>
            </div>
          </button>

          <div className="d-none d-lg-flex ms-auto align-items-center gap-3">
            <button 
              className={`btn btn-link text-white text-decoration-none ${activeSection === 'inicio' ? 'fw-bold text-warning' : ''}`} 
              onClick={() => onNavigate('inicio')}
            >
              Inicio
            </button>
            <button 
              className={`btn btn-link text-white text-decoration-none ${activeSection === 'lavadoras' ? 'fw-bold text-warning' : ''}`} 
              onClick={() => onNavigate('lavadoras')}
            >
              Lavadoras
            </button>
            <button 
              className={`btn btn-link text-white text-decoration-none ${activeSection === 'refrigeradores' ? 'fw-bold text-warning' : ''}`} 
              onClick={() => onNavigate('refrigeradores')}
            >
              Refrigeradores
            </button>
            <button 
              className={`btn btn-link text-white text-decoration-none ${activeSection === 'estufas' ? 'fw-bold text-warning' : ''}`} 
              onClick={() => onNavigate('estufas')}
            >
              Estufas
            </button>

            <button 
              className="btn btn-outline-warning rounded-pill px-3 ms-2 position-relative" 
              onClick={toggleCart}
            >
              🛒 Carrito
              {cartItems.length > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" 
                  style={{ fontSize: '0.7rem', transform: 'translate(-50%, -50%)' }}
                >
                  {cartItems.length}
                  <span className="visually-hidden">productos en el carrito</span>
                </span>
              )}
            </button>
          </div>

          <button 
            className="navbar-toggler d-lg-none border-0 position-relative" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#menuLateral"
          >
            <span className="navbar-toggler-icon"></span>
            {cartItems.length > 0 && (
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" 
                style={{ fontSize: '0.6rem', transform: 'translate(-130%, -50%)' }}
              >
                {cartItems.length}
              </span>
            )}
          </button>

        </div>
      </nav>

      <div 
        className="offcanvas offcanvas-start text-white bg-dark" 
        tabIndex="-1" 
        id="menuLateral" 
      >
        <div className="offcanvas-header border-bottom border-secondary border-opacity-25 pb-3">
          <h5 className="offcanvas-title">
             <img 
              src="https://i.postimg.cc/15ZYy40X/logo-(3).png" 
              alt="ElectroHogar" 
              style={{ height: '35px', width: 'auto', borderRadius: '4px', backgroundColor: 'white' }} 
            />
          </h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>

        <div className="offcanvas-body pt-4">
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li>
              <button 
                className={`btn btn-link text-white text-decoration-none w-100 text-start p-3 rounded-3 ${activeSection === 'inicio' ? 'bg-secondary bg-opacity-25 fw-bold' : ''}`} 
                onClick={() => { onNavigate('inicio'); cerrarMenu(); }}
              >
                🏠 Inicio
              </button>
            </li>
            <li>
              <button 
                className={`btn btn-link text-white text-decoration-none w-100 text-start p-3 rounded-3 ${activeSection === 'lavadoras' ? 'bg-secondary bg-opacity-25 fw-bold' : ''}`} 
                onClick={() => { onNavigate('lavadoras'); cerrarMenu(); }}
              >
                👗 Lavadoras
              </button>
            </li>
            <li>
              <button 
                className={`btn btn-link text-white text-decoration-none w-100 text-start p-3 rounded-3 ${activeSection === 'refrigeradores' ? 'bg-secondary bg-opacity-25 fw-bold' : ''}`} 
                onClick={() => { onNavigate('refrigeradores'); cerrarMenu(); }}
              >
                🧊 Refrigeradores
              </button>
            </li>
            <li>
              <button 
                className={`btn btn-link text-white text-decoration-none w-100 text-start p-3 rounded-3 ${activeSection === 'estufas' ? 'bg-secondary bg-opacity-25 fw-bold' : ''}`} 
                onClick={() => { onNavigate('estufas'); cerrarMenu(); }}
              >
                🔥 Estufas
              </button>
            </li>
            
            <li className="mt-4 border-top border-secondary border-opacity-25 pt-4 text-center">
              <button 
                className="btn btn-outline-warning py-2 px-4 rounded-pill fw-bold position-relative" 
                style={{ borderWidth: '1px' }}
                onClick={() => { toggleCart(); cerrarMenu(); }}
              >
                🛒 Ver Carrito
                {/* Contador en el botón del menú lateral */}
                {cartItems.length > 0 && (
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" 
                    style={{ fontSize: '0.7rem', transform: 'translate(-50%, -50%)' }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

/* Función auxiliar para cerrar el menú */
function cerrarMenu() {
  const offcanvas = document.getElementById('menuLateral');
  if (offcanvas) {
    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
    if (bsOffcanvas) bsOffcanvas.hide();
  }
}

export default Navbar;