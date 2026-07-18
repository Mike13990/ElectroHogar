import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto py-5">
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          <div className="col-md-4">
            <h5 className="text-warning mb-3">📍 Dinos dónde estás</h5>
            <p className="small">Zona 10, Ciudad de Guatemala, Guatemala.<br />Te esperamos en nuestra sala de exhibición.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-warning mb-3">📞 Llámanos</h5>
            <p className="small">Teléfono: (+502) 2500-9999<br />Atención de Lunes a Viernes de 8:00 a 21:00</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-warning mb-3">✉️ Escríbenos</h5>
            <p className="small">contacto@electrohogar.com<br />Respondemos todas tus consultas.</p>
          </div>
        </div>
        <div className="border-top border-secondary pt-3 mt-3 text-center small text-muted">
          &copy; {new Date().getFullYear()} ElectroHogar - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;