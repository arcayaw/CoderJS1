let acumulador = 0;
let contadorSueldos = 0;
let seguir;

do {
  //pido sueldo
  let sueldo = parseFloat(prompt("Ingrese el sueldo del/la Emplead@"));

  //valido que el sueldo sea mayor a cero.
  if (sueldo <= 0) {
    alert("Error! El valor debe ser mayor a cero");
    sueldo = parseFloat(prompt("Ingrese el sueldo"));
  }
  //le sumo el sueldo al acumulador
  acumulador += sueldo;

  //pregunto si quiere continuar
  seguir = prompt("Agregar más ('si' o 'no')?");

  //valido que responda correctamente 'si' or 'no'
  if (seguir != "si" || seguir != "no") {
    seguir = prompt("Error! Para agregar más solo responder con 'si' o 'no'");
  }
  //aumento el contador
  contadorSueldos++;

  // evlauo seguir
} while (seguir != "no");

//imprime por consola
console.log(
  `El promedio del sueldo de l@s emplead@s de la empresa es ${
    acumulador / contadorSueldos
  }`
);

//imprime en html
document.write(
  `El promedio del sueldo de l@s emplead@s de la empresa es ${
    acumulador / contadorSueldos
  }`
);
