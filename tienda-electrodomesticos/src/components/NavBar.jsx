// src/components/NavBar.jsx
function NavBar({ totalCarrito, abrirCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-warning" href="#inicio">
          🏠 ElectroHogar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarPrincipal"
          aria-controls="navbarPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarPrincipal">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>

            {/* Navigation Dropdown de Productos */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#productos"
                id="dropdownProductos"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownProductos">
                <li>
                  <a className="dropdown-item" href="#lavadoras">
                    Lavadoras
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#refrigeradores">
                    Refrigeradores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#estufas">
                    Estufas
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <button
                type="button"
                className="btn btn-warning position-relative"
                onClick={abrirCarrito}
              >
                🛒 Carrito
                {totalCarrito > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalCarrito}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
