// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-md-start py-4 mt-auto">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-3">
            <h6 className="text-warning">ElectroHogar S.A.</h6>
            <p className="small mb-0">Tu tienda de confianza en línea blanca.</p>
          </div>
          <div className="col-12 col-md-3">
            <h6>Dirección</h6>
            <p className="small mb-0">Zona 10, Ciudad de Guatemala, Guatemala</p>
          </div>
          <div className="col-12 col-md-3">
            <h6>Teléfono</h6>
            <p className="small mb-0">(+502) 2500-8999</p>
          </div>
          <div className="col-12 col-md-3">
            <h6>Correo</h6>
            <p className="small mb-0">contacto@electrohogar.com</p>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="small text-center mb-0">
          &copy; {new Date().getFullYear()} ElectroHogar S.A. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
