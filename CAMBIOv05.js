// Creamos un array con todas las posibles monedas y billetes
let currency = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

// pedimos que ponga el precio y hacemos un parse float para convertir en nuemero el resultado
let precio = parseFloat(prompt("¿Cual es el precio del articulo?"));

// Solicitamos al usuario el pago y usamos otra vez parsefloat por lo mismo
let pago = parseFloat(prompt("Pago:"));

// Calculamos el cambio
let cambioTotal = pago - precio;
if (pago < precio){
    alert ("dinero insuficiente")
}
// Función para calcular las monedas y billetes a devolver
function calcularDevolucion(cambio) {
    let cambioRestante = cambio;
    let devolucion = {};

    for (let i = 0; i < currency.length; i++) {
        const denominacion = currency[i];
        const cantidad = Math.floor(cambioRestante / denominacion); // math floor redondea hacia abajo

        if (cantidad > 0) {
            devolucion[denominacion] = cantidad;
            cambioRestante %= denominacion;//el  % es para obtener el cambio restante después de devolver la cantidad calculada.
        } 
    }

    return devolucion;
}

// Calculamos la devolucion
let devolucion = calcularDevolucion(cambioTotal);

//mensaje de la devolucion
let mensajeDevolucion = "Devolucion:\n";
//usamos el array de denominacion
for (const denominacion in devolucion) {
    //añadido del texto/ si la denominacion es mas grande que 5 o igual usara billetes si no monedas
    mensajeDevolucion += `${devolucion[denominacion]} ${denominacion >= 5 ? 'billete(s)' : 'moneda(s)'} de ${denominacion}€\n`;
}

alert(mensajeDevolucion);
