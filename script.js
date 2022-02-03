let sumaPrecios = 0;
let acumumladorProductos = 0;
let seguir = "si";
let iva = 0.21;
let precioEnvio = 600;

do {
  let precioProducto = parseInt(prompt("Ingrese el precio del producto"));

  if (precioProducto <= 0 || precioProducto == isNaN) {
    precioProducto = parseInt(
      prompt("Error! Ingrese un monto correcto (Mayor que cero)")
    );
  } else {
    sumaPrecios += precioProducto;
  }

  seguir = prompt("desea seguir agregando productos");

  acumumladorProductos++;
} while (seguir != "no");

document.write(
  `La suma total de los productos es ${sumaPrecios}, el monto fintal con impuestos y envio incluidos es ${
    sumaPrecios + sumaPrecios * iva + precioEnvio
  }`
);
