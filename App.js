const productos = [
  { nombre: "Laptop", precio: 1200, cantidad: 5 },
  { nombre: "Mouse", precio: 25, cantidad: 20 },
  { nombre: "Teclado", precio: 45, cantidad: 15 },
  { nombre: "Monitor", precio: 300, cantidad: 7 },
  { nombre: "USB", precio: 10, cantidad: 50 }
];

const res = document.getElementById("resultado");

function mostrar(titulo, datos) {
  res.innerHTML += `<h3>${titulo}</h3><div style="border: 1px solid black; padding: 10px; margin: 10px 0;"><pre>${JSON.stringify(datos, null, 2)}</pre></div>`;
}

res.innerHTML += `<h2>EJERCICIO 1</h2>`;

const nombresMayuscula = productos.map(p => p.nombre.toUpperCase());
mostrar("1. Nombres en mayúscula", nombresMayuscula);

const productosBaratos = productos.filter(p => p.precio < 50);
mostrar("2. Productos con precio < 50", productosBaratos);

const monitor = productos.find(p => p.nombre === "Monitor");
mostrar("3. Producto Monitor", monitor);

const productoInexistente = productos.find(p => p.nombre === "Tablet");
mostrar("4. ¿Si no existe? (ej. Tablet)", productoInexistente);


res.innerHTML += `<h2>EJERCICIO 2</h2>`;

const bajoStockValores = productos
  .filter(p => p.cantidad < 10)
  .map(p => ({
    nombre: p.nombre,
    valorTotal: p.precio * p.cantidad
  }));
mostrar("1 & 2. Productos bajo stock y su valor total", bajoStockValores);

const valorTotalBajoStock = bajoStockValores.reduce((total, p) => total + p.valorTotal, 0);
mostrar("3. Valor total del bajo stock", valorTotalBajoStock);


res.innerHTML += `<h2>EJERCICIO 3</h2>`;

const valorTotalInventario = productos.reduce((total, p) => total + (p.precio * p.cantidad), 0);
mostrar("1. Valor total de todo el inventario", valorTotalInventario);

const mayorStock = productos.reduce((max, p) => p.cantidad > max.cantidad ? p : max, productos[0]);
mostrar("2. Producto con mayor cantidad en stock", mayorStock);

const clasificacion = productos.reduce((acc, p) => {
  if (p.precio > 100) {
    acc.caros.push(p);
  } else {
    acc.baratos.push(p);
  }
  return acc;
}, { caros: [], baratos: [] });
mostrar("3. Clasificación (caros > 100, baratos <= 100)", clasificacion);


res.innerHTML += `<h2>RETO EXTRA</h2>`;

const nombresMasDe10Red = productos.reduce((acc, p) => {
  if (p.cantidad > 10) {
    acc.push(p.nombre);
  }
  return acc;
}, []);
mostrar("Nombres con cantidad > 10 (solo reduce)", nombresMasDe10Red);
