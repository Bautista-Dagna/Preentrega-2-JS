const hamburguesas = [
     { nombre: "Pipa Tasty",
      precio: 1350
    },
     { nombre: "Big Pipa",
     precio: 1300
    },
    { nombre: "Pipo Burger",
      precio: 1400
    },
    { nombre: "Cuarto de Pipa",
      precio: 1250
    },
];;

let carrito = [ ]

let seleccion = prompt ("Bienvenido a de la Pipa, ¿Ya decidió qué va a pedir?")
while (seleccion != "si" && seleccion  != "no") {   
    alert ("por favor ingrese si o no")
    seleccion = prompt("Vamos de nuevo, ¿ Ya decidiste que vas a comer hoy?")
}

if(seleccion == "si"){
alert ("Por favor diga cuál de estas opciones le convece más")
//console.log (hamburguesas)
let mostrarHamburguesas = hamburguesas.map((hamburguesas) => hamburguesas.nombre + " " + hamburguesas.precio + "$")
alert(mostrarHamburguesas.join ( " - " ))
} else if (seleccion == "no") {
    alert("Gracias por visitarnos, te esperamos la proxima!")
}

while (seleccion != "no"){
    let producto = prompt ("agregue el producto deseado al carrito")
let precio = 0


if(producto == "Pipa Tasty" || "Big Pipa" || "Pipo Burguer" || "Cuarto de Pipa"  ) {
    switch(producto) {
        case "Pipa Tasty" :
        precio = 1350
        break;
case "Big Pipa":
precio = 1300
case "Pipo Burguer" :
        precio = 1400
        break;
 case "Cuarto de Pipa" :
        precio = 1250
        break;
default:
    break;
    }
let unidades = parseInt(prompt("¿cuantas unidades desea de la misma?"))

carrito.push ({producto, unidades, precio})
console.log(carrito)

  } else {alert("El dato ingresado no es correcto")}

  seleccion = prompt ("¿Desea agregar algo más?")
  while(seleccion == "no"){
    alert("Gracias por su compra!")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acumulador, elementos) => acumulador + elementos.precio * elementos.unidades, 0)
alert(`El total a pagar es de: ${total}`)

