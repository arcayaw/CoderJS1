let acumulador = 0;
let contadorSueldos = 0;
let seguir;

do {
  //pido sueldo
  let sueldo = parseFloat(prompt("ingrese el sueldo"));

  //valido que el sueldo sea mayor a cero.
  if (sueldo <= 0) {
    alert("Error! El valor debe ser mayor a cero");
    sueldo = parseFloat(prompt("ingrese el sueldo"));
  }
  //le sumo el sueldo al acumulador
  acumulador += sueldo;

  //pregunto si quiere continuar
  seguir = prompt("Agregar mas(responrder con 'si' o 'no')?");

  //valido que responda correctamente 'si' or 'no'
  if (seguir != "si" || seguir != "no") {
    seguir = prompt("Error! Para agregar mas solo responrder con 'si' o 'no'");
  }
  //aumento el contador
  contadorSueldos++;

  // evlauo seguir
} while (seguir != "no");

//imprime por consola
console.log(
  `El promedio del sueldo de los empleados de la empresa es ${
    acumulador / contadorSueldos
  }`
);

//imprime en html
document.write(
  `El promedio del sueldo de los empleados de la empresa es ${
    acumulador / contadorSueldos
  }`
);