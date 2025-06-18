const menu = [
  { nombre: "Café Americano", descripcion: "Café negro clásico", precio: 1.5 },
  { nombre: "Latte", descripcion: "Café con leche cremoso", precio: 2.5 },
  { nombre: "Cappuccino", descripcion: "Café con leche y espuma", precio: 3.0 },
];

async function cargarMenu() {
  mostrarMenu(menu);
}

function mostrarMenu(menu) {
  const menuDiv = document.getElementById("menu");
  menu.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const nombre = document.createElement("h3");
    nombre.textContent = item.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = item.descripcion;

    const precio = document.createElement("span");
    precio.textContent = `$${item.precio.toFixed(2)}`;

    menuItem.appendChild(nombre);
    menuItem.appendChild(descripcion);
    menuItem.appendChild(precio);

    menuDiv.appendChild(menuItem);
  });
}

document.addEventListener("DOMContentLoaded", cargarMenu);
