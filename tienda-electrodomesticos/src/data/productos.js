// src/data/productos.js
// Arreglos de objetos con la información de cada categoría de producto.
// Cada objeto cumple con los campos mínimos solicitados en el ejercicio:
// id, nombre, marca, modelo, descripcion, precio, imagen.

export const lavadoras = [
  {
    id: "lav-01",
    nombre: "Lavadora Carga Superior 18kg",
    marca: "Whirlpool",
    modelo: "WTW1855",
    descripcion: "Lavadora de carga superior con 8 ciclos de lavado y tina de acero inoxidable.",
    precio: 549.99,
    imagen: "https://placehold.co/400x300/0d6efd/ffffff?text=Lavadora+Whirlpool",
  },
  {
    id: "lav-02",
    nombre: "Lavadora Carga Frontal 20kg",
    marca: "LG",
    modelo: "LGF20WD",
    descripcion: "Tecnología de vapor e inverter direct drive para mayor eficiencia energética.",
    precio: 699.5,
    imagen: "https://placehold.co/400x300/0d6efd/ffffff?text=Lavadora+LG",
  },
  {
    id: "lav-03",
    nombre: "Lavadora Automática 16kg",
    marca: "Samsung",
    modelo: "SAM16AT",
    descripcion: "Sistema Eco Bubble que disuelve el detergente antes del lavado para mayor limpieza.",
    precio: 629.0,
    imagen: "https://placehold.co/400x300/0d6efd/ffffff?text=Lavadora+Samsung",
  },
  {
    id: "lav-04",
    nombre: "Lavadora Digital 14kg",
    marca: "Mabe",
    modelo: "MAB14DG",
    descripcion: "Panel digital, 10 programas de lavado y función de agua caliente.",
    precio: 469.99,
    imagen: "https://placehold.co/400x300/0d6efd/ffffff?text=Lavadora+Mabe",
  },
  {
    id: "lav-05",
    nombre: "Lavadora Carga Superior 22kg",
    marca: "Electrolux",
    modelo: "ELX22CS",
    descripcion: "Gran capacidad, ideal para familias numerosas, con tecnología anti-vibración.",
    precio: 589.0,
    imagen: "https://placehold.co/400x300/0d6efd/ffffff?text=Lavadora+Electrolux",
  },
];

export const refrigeradores = [
  {
    id: "ref-01",
    nombre: "Refrigerador French Door 25 pies",
    marca: "Samsung",
    modelo: "RF25FD",
    descripcion: "Dispensador de agua y hielo, tecnología Twin Cooling Plus.",
    precio: 1299.0,
    imagen: "https://placehold.co/400x300/198754/ffffff?text=Refrigerador+Samsung",
  },
  {
    id: "ref-02",
    nombre: "Refrigerador Top Mount 18 pies",
    marca: "Whirlpool",
    modelo: "WTM18TM",
    descripcion: "Diseño clásico, eficiente en consumo energético y con anaqueles ajustables.",
    precio: 799.99,
    imagen: "https://placehold.co/400x300/198754/ffffff?text=Refrigerador+Whirlpool",
  },
  {
    id: "ref-03",
    nombre: "Refrigerador Side by Side 26 pies",
    marca: "LG",
    modelo: "LGSS26",
    descripcion: "Pantalla digital externa, filtro de agua y congelador de gran capacidad.",
    precio: 1499.0,
    imagen: "https://placehold.co/400x300/198754/ffffff?text=Refrigerador+LG",
  },
  {
    id: "ref-04",
    nombre: "Refrigerador Bottom Freezer 20 pies",
    marca: "Mabe",
    modelo: "MABBF20",
    descripcion: "Congelador inferior, luz LED interior y control de temperatura digital.",
    precio: 899.5,
    imagen: "https://placehold.co/400x300/198754/ffffff?text=Refrigerador+Mabe",
  },
  {
    id: "ref-05",
    nombre: "Refrigerador Compacto 10 pies",
    marca: "Electrolux",
    modelo: "ELXC10",
    descripcion: "Ideal para espacios reducidos, bajo consumo eléctrico y diseño moderno.",
    precio: 549.0,
    imagen: "https://placehold.co/400x300/198754/ffffff?text=Refrigerador+Electrolux",
  },
];

export const estufas = [
  {
    id: "est-01",
    nombre: "Estufa de 4 Quemadores",
    marca: "Mabe",
    modelo: "MAB4Q",
    descripcion: "Quemadores de alta y baja potencia, horno con encendido automático.",
    precio: 399.0,
    imagen: "https://placehold.co/400x300/dc3545/ffffff?text=Estufa+Mabe",
  },
  {
    id: "est-02",
    nombre: "Estufa de Inducción 30\"",
    marca: "Samsung",
    modelo: "SAMIND30",
    descripcion: "Cocción por inducción, panel táctil y bloqueo de seguridad para niños.",
    precio: 899.99,
    imagen: "https://placehold.co/400x300/dc3545/ffffff?text=Estufa+Samsung",
  },
  {
    id: "est-03",
    nombre: "Estufa a Gas 5 Quemadores",
    marca: "Whirlpool",
    modelo: "WTF5Q",
    descripcion: "Parrillas de hierro fundido y horno de convección para cocción uniforme.",
    precio: 649.5,
    imagen: "https://placehold.co/400x300/dc3545/ffffff?text=Estufa+Whirlpool",
  },
  {
    id: "est-04",
    nombre: "Estufa Empotrable 24\"",
    marca: "LG",
    modelo: "LGEMP24",
    descripcion: "Diseño compacto para cocinas pequeñas, con temporizador digital.",
    precio: 459.0,
    imagen: "https://placehold.co/400x300/dc3545/ffffff?text=Estufa+LG",
  },
  {
    id: "est-05",
    nombre: "Estufa Doble Horno 36\"",
    marca: "Electrolux",
    modelo: "ELXDH36",
    descripcion: "Dos hornos independientes, ideal para cocinar varios platillos a la vez.",
    precio: 1099.0,
    imagen: "https://placehold.co/400x300/dc3545/ffffff?text=Estufa+Electrolux",
  },
];

// Productos destacados para el carrusel de inicio (uno por categoría + un extra)
export const destacados = [
  { ...lavadoras[1], categoria: "lavadoras" },
  { ...refrigeradores[0], categoria: "refrigeradores" },
  { ...estufas[1], categoria: "estufas" },
  { ...lavadoras[4], categoria: "lavadoras" },
  { ...refrigeradores[2], categoria: "refrigeradores" },
];
