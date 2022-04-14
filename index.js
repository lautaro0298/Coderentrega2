let res = prompt("Ingrese S/N si quiere calcular un promedio");
if (res == "S" || res == "s") {
  alert("Su promedio es: " + promedio());
}
alert("Fin del programa.");

function promedio() {
  let cantNotas = parseInt(prompt("Ingrese numero cantidad de notas"));
  let suma =0;
  for (let i = 1; i <=cantNotas; i++) {
    let nota = parseInt(prompt("Ingrese Nota numero: " + (i)));
    suma = suma + nota;
  }
  return suma / cantNotas;
}
