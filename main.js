const hamburguesas = [
  { nombre: "Pipa Tasty", precio: 1350 },
  { nombre: "Big Pipa", precio: 1300 },
  { nombre: "Pipo Burger", precio: 1400 },
  { nombre: "Cuarto de Pipa", precio: 1250 },
];

let carrito = [];

let seleccion = prompt("Bienvenido a de la Pipa, ¿Ya decidió qué va a pedir?");
while (seleccion !== "si" && seleccion !== "no") {
  alert("Por favor ingrese si o no");
  seleccion = prompt("Vamos de nuevo, ¿Ya decidiste qué vas a comer hoy?");
}

if (seleccion === "si") {
  alert("Por favor diga cuál de estas opciones le convence más");
  let mostrarHamburguesas = hamburguesas.map(
    (hamburguesa) => `${hamburguesa.nombre} ${hamburguesa.precio}$`
  );
  alert(mostrarHamburguesas.join(" - "));
} else if (seleccion === "no") {
  alert("Gracias por visitarnos, ¡te esperamos la próxima vez!");
}

while (seleccion !== "no") {
  let producto = prompt("Agregue el producto deseado al carrito");
  let precio = 0;

  if (
    producto === "Pipa Tasty" ||
    producto === "Big Pipa" ||
    producto === "Pipo Burger" ||
    producto === "Cuarto de Pipa"
  ) {
    switch (producto) {
      case "Pipa Tasty":
        precio = 1350;
        break;
      case "Big Pipa":
        precio = 1300;
        break;
      case "Pipo Burger":
        precio = 1400;
        break;
      case "Cuarto de Pipa":
        precio = 1250;
        break;
      default:
        break;
    }

    let unidades = parseInt(prompt("¿Cuántas unidades desea del mismo producto?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("El dato ingresado no es correcto");
  }

  seleccion = prompt("¿Desea agregar algo más?");
  while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor ingrese si o no");
    seleccion = prompt("¿Desea agregar algo más?");
  }
}

alert("Gracias por su compra!");

carrito.forEach((carritoFinal) => {
  console.log(
    `Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades},
    Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`
  );
});

const total = carrito.reduce(
  (acumulador, elemento) => acumulador + elemento.precio * elemento.unidades,
  0
);
alert(`El total a pagar es de: ${total}`);
