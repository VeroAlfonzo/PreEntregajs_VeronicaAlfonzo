// Seleccion de productos para comprar.

/*const carrito = []

class Compra { 
  constructor(carritoDeCompras) {
      this.carrito = carritoDeCompras
  }
  obtenerSubtotal() {
      if (this.carrito.length > 0) { //función de orden superior REDUCE()
          return this.carrito.reduce((acumulador, productos)=> acumulador + productos.precio, 0)
      }
  }
}

const productos = [
    { id: 1, nombre: "Hojas cuadriculadas", precio: 18190, img: "" },
    { id: 2, nombre: "Hojas rayadas", precio: 18190, img: "" } ,
    { id: 3, nombre: "Lapicera negra", precio: 420, img: "" },
    { id: 4, nombre: "Lapicera azul", precio: 420, img: "" },
    { id: 5, nombre: "Lapices de colores,set x12U", precio: 4560, img: "" } ,
    { id: 6, nombre: "Lapiz negro", precio: 899, img: "" } ,
    { id: 7, nombre: "Resaltadores, set x5U", precio: 9900, img: "" } ,
    { id: 8, nombre: "Tijera", precio: 1790, img: "" },
    { id: 9, nombre: "Plasticola", precio: 905, img: "" },
    { id: 10, nombre: "Cuaderno hoja rayada", precio: 5499, img: "" },
    { id: 11, nombre: "Cuaderno hoja cuadriculada", precio: 5499, img: "" },
];


function buscarProducto(nombre) {
    let productoSeleccionado = productos.find((productos)=> productos.nombre === nombre );
    return productoSeleccionado
}


function comprar() {
  let nombre = prompt("Ingresa el nombre del producto.");
  let productoElegido = buscarProducto(nombre);

  if (productoElegido !== undefined) {
      
      carrito.push(productoElegido)     
      alert(productoElegido.nombre + " se agrego al carrito.");
      let respuesta = confirm("¿Deseas elegir otro producto?");
      if (respuesta === true) {
          comprar();                   
          const shop = new Compra(carrito)
          let subtotal = shop.obtenerSubtotal();
          alert("🛒 El costo de tu compra es: $" + subtotal, "\nMuchas gracias por elegirnos.");
      }

  } else {
      alert("⛔️ Error en el código de producto ingresado.\nRefresca para comenzar de nuevo.");
  }
}

comprar()


//Inicio de sesion y creacion de usuario.

let userRegistrado = "Veronica";
let passwordRegistrado = "123456";
let ingreso = userRegistrado;
let password = passwordRegistrado;
let usuarioRegistrado = ingreso == userRegistrado && password == passwordRegistrado;

alert("Para poder continuar con la compra debe registrarse y iniciar sesion");
let user = prompt("¿Tiene un usuario registrado? si o no");
function bienvenido(userRegistro) {
    alert("¡Hola " + userRegistro + "!. Bienvenido/a a Libreria ARCOIRIS");
}

if (user == "no") {
    let userRegistro = prompt("Ingrese su nombre");
    let passwordRegistro = prompt("Ingrese su contraseña");
    const catcha = "9";
    let checkRegistro = prompt("Cuanto es 10 - 1?");
    bienvenido(userRegistro);
} else {
    let ingreso = prompt("Ingrese su usuario");
    let password = prompt("ingresa tu contraseña");
    if (ingreso == userRegistrado && password == passwordRegistrado) {
        alert("¡Hola " + userRegistrado + "!. Bienvenido/a a Libreria ARCOIRIS");
    } else {
        alert("Tu usuario y/o contraseña son incorrectos");
    }
}*/




        const carrito = [];

        class Compra {
            constructor(carritoDeCompras) {
                this.carrito = carritoDeCompras;
            }
            obtenerSubtotal() {
                if (this.carrito.length > 0) {
                    return this.carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
                } else {
                    return 0;
                }
            }
        }

        const productos = [
            { id: 1, nombre: "Hojas cuadriculadas", precio: 18190, img: "" },
            { id: 2, nombre: "Hojas rayadas", precio: 18190, img: "" },
            { id: 3, nombre: "Lapicera negra", precio: 420, img: "" },
            { id: 4, nombre: "Lapicera azul", precio: 420, img: "" },
            { id: 5, nombre: "Lapices de colores,set x12U", precio: 4560, img: "" },
            { id: 6, nombre: "Lapiz negro", precio: 899, img: "" },
            { id: 7, nombre: "Resaltadores, set x5U", precio: 9900, img: "" },
            { id: 8, nombre: "Tijera", precio: 1790, img: "" },
            { id: 9, nombre: "Plasticola", precio: 905, img: "" },
            { id: 10, nombre: "Cuaderno hoja rayada", precio: 5499, img: "" },
            { id: 11, nombre: "Cuaderno hoja cuadriculada", precio: 5499, img: "" },
        ];

        function mostrarProductos() {
            const listaProductos = document.getElementById('listaProductos');
            listaProductos.innerHTML = ''; // Limpiamos la lista

            productos.forEach(producto => {
                const li = document.createElement('li');
                li.textContent = `${producto.nombre} - $${producto.precio}`;
                listaProductos.appendChild(li);
            });

            document.getElementById('btn-iniciar-compra').style.display = 'block'; // Mostrar botón de iniciar compra
        }

        function iniciarCompra() {
            comprar();
        }

        function comprar() {
            const shop = new Compra(carrito);
            let subtotal = shop.obtenerSubtotal();
            alert("🛒 El costo de tu compra es: $" + subtotal + "\nMuchas gracias por elegirnos.");
        }

        function iniciarSesion(usuario, contrasena) {
            if (usuario === "Veronica" && contrasena === "123456") {
                alert("¡Hola " + usuario + "!. Bienvenido/a a Libreria ARCOIRIS");
                mostrarProductos();
            } else {
                alert("Tu usuario y/o contraseña son incorrectos");
            }
        }

        function registrarse(nuevoUsuario, nuevaContrasena) {
            // Aquí podrías agregar lógica para registrar al nuevo usuario

            alert("Registro exitoso. Por favor inicia sesión.");
            document.getElementById('registro').style.display = 'none';
            document.getElementById('login').style.display = 'block';
        }
  