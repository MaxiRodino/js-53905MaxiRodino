function calcularPlazoFijo(valor, plazoDias) {
  const tasaAnual = 110; 
  const valorDelInteres = (valor * tasaAnual * plazoDias) / 36000;
  const valorTotal = valor + valorDelInteres;
  return {valorDelInteres, valorTotal};
}

function calcularPrestamoPersonal(tasaAnual, monto, plazo) {
  const tasaMensual = tasaAnual / 12 / 100;
  const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  return cuota;
}


console.log("Hola, bienvenid@ a tu asistente monetario. ¿En qué podemos ayudarte hoy?");

const opcionPrincipal = prompt("1 - Plazo Fijo\n2 - Préstamos Personales");

if (opcionPrincipal === "1") {
  // Plazo Fijo
  const valorAInvertir = parseFloat(prompt("Ingrese el valor a invertir en el plazo fijo:"));
  const plazoEnDias = parseInt(prompt("Ingrese el plazo en días para el plazo fijo:"));

  const { montoInteres, montoFinal } = calcularPlazoFijo(valorAInvertir, plazoEnDias);

  console.log(`Monto invertido es de: $${valorAInvertir.toFixed(2)}`);
  console.log(`El intereses generados es de: $${montoInteres.toFixed(2)}`);
  console.log(`Monto final al cabo de ${plazoEnDias} días es de: $${montoFinal.toFixed(2)}`);
} else if (opcionPrincipal === "2") {
    //Prestamos personales
  const montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo personal:"));
  const plazoPrestamo = parseInt(prompt("Ingrese el plazo en meses para el préstamo personal:"));

  const opcionPrestamo = prompt("Seleccione la forma de obtención del préstamo:\n1. Homebanking (131% de tasa anual)\n2. Sucursal (141% de tasa anual)");

  let tasaAnual;
  if (opcionPrestamo === "1") {
    tasaAnual = 131;
  } else if (opcionPrestamo === "2") {
    tasaAnual = 141;
  } else {
    console.log("Opción no válida");
  }

  if (tasaAnual) {
    const cuotaMensual = calcularPrestamoPersonal(tasaAnual, montoPrestamo, plazoPrestamo);
    console.log(`La cuota mensual del préstamo personal será: $${cuotaMensual.toFixed(2)}`);
  }
} else {
  console.log("Opción no válida");
}

