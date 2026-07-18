import React, { useEffect } from 'react';
import { destacados } from '../data/productos';

function Home({ addToCart }) {
  
  useEffect(() => {
    const initCarousel = () => {
      const carouselElement = document.getElementById('mainCarousel');
      if (carouselElement && window.bootstrap) {
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: 'carousel',
          pause: 'hover'
        });
        return () => carousel.dispose();
      }
    };
    initCarousel();
  }, []);

  return (
    <section id="inicio" className="pt-5">
      <div className="container">
        
        <div id="mainCarousel" className="carousel slide shadow rounded-3 mb-5 overflow-hidden" data-bs-ride="carousel" style={{ height: '400px', backgroundColor: '#fdfdfd' }}>
          
          {/* Indicadores personalizados (Círculos limpios en lugar de barras) */}
          <div className="carousel-indicators mb-0 pb-3" style={{ bottom: '15px' }}>
            {destacados.map((_, idx) => (
              <button 
                key={idx} 
                type="button" 
                data-bs-target="#mainCarousel" 
                data-bs-slide-to={idx} 
                className={`rounded-circle mx-1 ${idx === 0 ? "active" : ""}`} 
                style={{ width: '12px', height: '12px', border: '2px solid #fff' }} 
                aria-current={idx === 0 ? "true" : "false"} 
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner h-100">
            {destacados.map((product, idx) => (
              <div className={`carousel-item h-100 ${idx === 0 ? 'active' : ''}`} key={product.id}>

                <div className="d-flex flex-column flex-md-row h-100 align-items-center">
                  
                  <div className="carousel-img-container col-12 col-md-7 h-100 p-3 p-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
                    <img 
                      src={product.imagen} 
                      className="d-block img-fluid h-100" 
                      alt={product.nombre} 
                      style={{ objectFit: 'contain', transition: 'transform 0.5s ease-in-out' }} 
                    />
                  </div>

                  <div className="carousel-text-content col-12 col-md-5 h-100 p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
                    <div className="text-content-inner text-center text-md-start">
                      <span className="badge bg-primary rounded-pill mb-2 px-3 py-2 text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Producto Destacado</span>
                      
                      <h2 className="card-title h3 mb-1 text-dark fw-bold" style={{ lineHeight: '1.2' }}>{product.nombre}</h2>
                      
                      <p className="card-text text-muted mb-4 fs-6 fw-light">{product.marca} — <span className="fw-normal">{product.modelo}</span></p>
                      
                      <div className="d-grid d-md-block">
                        <button 
                          className="btn btn-warning btn-lg px-5 py-3 text-dark fw-bold shadow-sm" 
                          onClick={() => addToCart(product)}
                          style={{ transition: 'all 0.3s ease', borderRadius: '50px' }}
                        >
                          Agregar al Carrito
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon p-4 bg-dark rounded-circle" aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem' }}></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon p-4 bg-dark rounded-circle" aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem' }}></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
        <img 
            src="https://i.postimg.cc/15ZYy40X/logo-(3).png" 
            alt="ElectroHogar" 
            style={{ maxHeight: '100%',width: '100%', objectFit: 'contain' }} 
          />
        <div className="row g-4 mb-5 text-center">
          
          {/* Historia */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 p-3">
              <div className="card-body">
                <h5 className="card-title text-primary">📖 Nuestra Historia</h5>
                <p className="card-text">Nacimos en 2020 con la idea de llevar los mejores electrodomésticos a tu hogar. Más de 1000 productos entregados.</p>
              </div>
            </div>
          </div>

          {/* Misión */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 p-3">
              <div className="card-body">
                <h5 className="card-title text-success">🎯 Misión</h5>
                <p className="card-text">Ofrecer la mejor calidad en electrodomésticos a precios accesibles, brindando un servicio al cliente excepcional.</p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 p-3">
              <div className="card-body">
                <h5 className="card-title text-danger">👁️ Visión</h5>
                <p className="card-text">Ser la cadena de electrodomésticos número uno a nivel nacional, innovando constantemente en tecnología y atención.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 p-3 bg-light">
              <div className="card-body">
                <h5 className="card-title text-warning">📞 Contáctanos</h5>
                <p className="card-text mb-1"><strong>Dirección:</strong> Zona 10, Cd. de Guatemala</p>
                <p className="card-text mb-1"><strong>Teléfono:</strong> (+502) 2500-9999</p>
                <p className="card-text"><strong>Email:</strong> contacto@electrohogar.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;