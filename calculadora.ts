//Que es una funcion? una funcion es una parte del codigo encapsulada que se encarga de realizar una o pocas tareas en especifico.

// La funcion a continuacion se encarga de sumar 2 numeros que recibe por parametros.

function sumar(x:number, y:number): number {
    let resultado = x + y;
    console.log(`${x} + ${y} = ${resultado}`)
    return resultado;
};

sumar(2,8);
