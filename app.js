
const productos = [
    { id: 1, nombre: "Cuaderno hoja cuadriculada", precio: 4489, imagen: "./productos/1.jfif" },
    { id: 2, nombre: "Cuaderno hoja rayada", precio: 4480, imagen: "./productos/2.jpg" },
    { id: 3, nombre: "Hojas cuadriculadas", precio: 18900, imagen: "./productos/3.jpg" },
    { id: 4, nombre: "Hojas rayadas", precio: 18900, imagen:"./productos/4.jpg" },
    { id: 5, nombre: "Lapicera azul", precio: 505, imagen: "./productos/5.jpg"},
    { id: 6, nombre: "Lapicera negra", precio: 505, imagen: "./productos/6.jpg"},
    { id: 7, nombre: "Lapices de colores x 24 unidades", precio: 15490, imagen:"./productos/7.jpg"},
    { id: 8, nombre: "Lapices de colores x 12 unidades", precio: 4100, imagen: "./productos/8.jpg"},
    { id: 9, nombre: "Lapiz negro", precio: 1595, imagen: "./productos/9.jpeg"},
    { id: 10, nombre: "Resaltadores de colores pack x 5", precio: 2640, imagen: "./productos/10.png"},
    { id: 11, nombre: "Tijeras", precio: 1285, imagen:"./productos/11.jfif"},
    { id: 12, nombre:"Plasticola", precio: 816, imagen:"./productos/12.jfif"},
]

const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarcarritoBtn = document.getElementById("vaciar-carrito");
const comprarcarritoBtn = document.getElementById("comprar-carrito");

cargarEventlisteners();

function cargarEventlisteners() {
    elementos1.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemento);
    vaciarcarritoBtn.addEventListener("click", vaciarCarrito);
    comprarcarritoBtn.addEventListener("click", comprarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    };
    insertarCarrito(infoElemento);
}

function mostrarBotonComprar() {
    comprarcarritoBtn.style.display = "block";
}

function ocultarBotonComprar() {
    comprarcarritoBtn.style.display = "none";
}

function insertarCarrito(elemento) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
       <img src="${elemento.imagen}" width=100 />
     </td>
       <td>
         ${elemento.titulo}
       </td>
       <td>
         ${elemento.precio}
       </td>
       <td>
         <a href="#" class="borrar" data-id="${elemento.id}"> x </a>
       </td>
     `;
    lista.appendChild(row);

    guardarProductoLocalStorage(elemento);
}

function guardarProductoLocalStorage(elemento) {
    let productos;
    if (localStorage.getItem('productos') === null) {
        productos = [];
    } else {
        productos = JSON.parse(localStorage.getItem('productos'));
    }
    productos.push(elemento);
    localStorage.setItem('productos', JSON.stringify(productos));
}


function eliminarElemento(e) {
    e.preventDefault();
    let elemento;
    if (e.target.classList.contains("borrar")) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
    }
}

function vaciarCarrito() {
    while (lista.firstElementChild) {
        lista.removeChild(lista.firstElementChild);
    }
    localStorage.clear();
    ocultarBotonComprar();
}

function comprarCarrito() {
    alert('¡Gracias por tu compra!');
    vaciarCarrito();
}

const contenedorProductos = document.querySelector(".product-content"); 

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("product");

    const imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagen;
    imagenProducto.alt = producto.nombre;

    const divInfoProducto = document.createElement("div");
    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = producto.nombre;

    const precioProducto = document.createElement("p");
    precioProducto.classList.add("precio");
    precioProducto.textContent = producto.precio;

    const botonAgregarCarrito = document.createElement("a");
    botonAgregarCarrito.href = "#";
    botonAgregarCarrito.classList.add("agregar-carrito", "btn-2");
    botonAgregarCarrito.setAttribute("data-id", producto.id);
    botonAgregarCarrito.textContent = "Agregar al carrito";

    divInfoProducto.appendChild(nombreProducto);
    divInfoProducto.appendChild(precioProducto);
    divInfoProducto.appendChild(botonAgregarCarrito);

    divProducto.appendChild(imagenProducto);
    divProducto.appendChild(divInfoProducto);

    contenedorProductos.appendChild(divProducto); 
});

