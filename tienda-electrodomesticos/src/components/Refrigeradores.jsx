const Refrigeradores = ({ onAddToCart }) => (
  <section className="container py-5">
    <h2 className="mb-4 fw-bold border-bottom pb-2">Catálogo de Refrigeradores</h2>
    <div className="row">
      {PRODUCTOS_DATA.refrigeradores.map(prod => (
        <TarjetaProducto key={prod.id} producto={prod} onAddToCart={onAddToCart} />
      ))}
    </div>
  </section>
);