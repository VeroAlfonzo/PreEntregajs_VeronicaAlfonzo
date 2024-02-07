alert("Bienvenido a Libreria ARCOIRIS");

// Seleccion de productos para comprar.
let producto = prompt("ingresa el producto que buscas \n 1-Hojas cuadriculadas \n 2-Hojas rayadas \n 3- Lapicera negra \n 4-Lapicera azul \n 5-Lapiz negro \n 6-Set x5 resaltadores \n 7-Tijera \n 8-Plasticola \n 9-Agenda 2024 \n 10- Set x10 lapices de colores");

switch (producto) {
    case "1":
        alert("Seleccionaste Hojas cuadriculadas");
        break;
    case "2":
        alert("Seleccionaste Hojas rayadas");
        break;
    case "3":
        alert("Seleccionaste Lapicera negra");
        break;
    case "4":
        alert("Seleccionaste Lapicera azul");
        break;
    case "5":
        alert("Seleccionaste Lapiz negro");
        break;
    case "6":
        alert("Seleccionaste Set x5 resaltadores");
        break;
    case "7":
        alert("Seleccionaste Tijera");
        break;
    case "8":
        alert("Seleccionaste Plasticola");
        break;
    case "9":
        alert("Seleccionaste Agenda 2024");
        break;
    case "10":
        alert("Seleccionaste Set x10 lapices de colores");
        break;

    default:
        alert("Opción no valida");
        break;
}

//while (producto != "ESC") {
//    console.log("Producto ingresado: " + producto);

//    producto = prompt ("Ingresa otro producto, para salir escribe ESC");
//}

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
    let catcha = "9";
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
}

