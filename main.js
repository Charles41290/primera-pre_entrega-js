/* Se simula un calculadora de prestamos.
Se pide el ingreso del monto y de las cantidad
de cuotas en las cuales el cliente desea saldar la deuda.
Si la cantidad de cuotas es menor/igual a 6 se aplica un interes
mensual del 8%. 
Si las cuotas son mayores a 6 y menores/iguales a 12 el interes
es del 15% mensual. 
Para cuotas mayores a 12 y menores a 18 se aplica un 20% de
interese mensual
Se consulta al usuario si quiere seguir realizando consultas, en caso negativo
se agradece el uso del programa.
El monto mínimo y máximo del prestámo solicitado tiene que ser de $20.000-$500.000
*/

/* funcion para calcular el interes a bajar con base en la cantidad de cuotas elejida por el cliente */
function calcularInteres(cuotas){
    if(cuotas <= 6){
        return 0.08;
    }else if(cuotas > 6 && cuotas <= 12){
        return 0.15;
    }else{
        return 0.20;
    }
}

/*funcion que calcula el monto a pagar en cada cuota */
function calcularMontoCuota(cantidadCuotas, monto){
    let interes = calcularInteres(cantidadCuotas);
    let montoCuota = (monto/cantidadCuotas)*(1+interes);
    alert(`El monto solicitado es de $${monto} el cual se pagará en ${cantidadCuotas} cuotas\nEl valor de cada cuota es de $${montoCuota}`);
}

/*funcion para validar que la cantidad de cuotas esta entre  1 y 18 */
function validarCuotas(cantidadCuotas, monto){
    if (cantidadCuotas >= 1 && cantidadCuotas <=18){
        calcularMontoCuota(cantidadCuotas, monto);
    }else{
        alert("Cantidad de cuotas inválida. Elija entre 1-18 cuotas");
        cantidadCuotas = prompt("Ingrese número de cuotas");
        validarCuotas(cantidadCuotas,monto);
    }
}

/* funcion para validar que el monto este entre $20.000 y $500.000 */
function validarMonto(monto){
    if( monto >= 20000 && monto <= 500000){
        let cantidadCuotas = prompt("Ingrese la cantidad de cuotas a pagar. (1-18)");
        validarCuotas(cantidadCuotas, monto);

    }else{
        alert("Monto inválido. Ingrese un valor entre $20.000 y $500.000");
        let monto = prompt("Ingrese monto");
        validarMonto(monto);
    }
}

/* programa principal */
while (true) {
    let montoPrestamo = prompt("Ingrese el monto del prestámo");
    validarMonto(montoPrestamo);
    let respuesta = prompt("¿Desea seguir consultando? Ingrese \"si\" o \"no\"");
    if(respuesta.toLocaleLowerCase() === 'no'){
        alert("Gracias por usar el sistema")
        break;
    }
}


