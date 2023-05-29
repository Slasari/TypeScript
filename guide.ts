//funcion para saludar a una persona por su nombre//

function saludar(nombre : string) : string{
    return `Bienvenido ${nombre.toUpperCase()}!`;
  }
  console.log(saludar("Ariel"));

//Tipos de datos primitivos//

//string : cadena de texto, para que un dato sea considerado string debe estar representado entre ''

let cadena_texto : string = "Hello World!"

//number : cualquier variable de numero

let entero : number = 10;
let decimal : number = 10.5;
let hexadecimal : number = 0xcbcbaa
let binario : number = 0b10010010101

//cuando un numero es demasiado largo, podemos usar _ para separarlo y asi entender mejor el codigo

let numero_demasiado_largo : number = 7_823_340_127

//boolean : deja en claro que esta variable puede ser true o false

let falso : boolean = false;
let verdadero : boolean = true;

//Tipos de datos especiales de TypeScript//

// any : se utiliza para indicar que la variable puede ser cualquier tipo de dato (no necesita inicializacion de valor), no recomendado.

let algo : any;

// null : no posee ningun tipo de valor.

let sin_valor : null = null;

// undefined : misma teoria que el tipo de dato null, este se puede utilizar para indicar que una variable puede ser un string o ser undefined, por ejemplo.

let sin_definir : undefined = undefined;

// void : representa la nada, y se utiliza por ejemplo, para indicar que una funcion no retorna ningun valor, es decir, no posee un return.
// console.log no es lo mismo que return, console.log imprime algo en la consola. return siempre  retorna un valor.

function saludo (nombre){
    console.log(`hola ${nombre}`) 
}

//Arrays y tuplas

//Array : Es una lista de valores ordenados por un indice, los valores pueden ser del mismo tipo o no, segun lo indiquemos.

let dias: string[] = ["Lunes","Martes","Miercoles","Jueves","Viernes", "Sabado", "Domingo"] //Array solo de strings.

let cosas_varias: any[] = ["Lunes", 10, true, null] //Array de varios tipos de datos.

//Tupla : Tipo de Array donde importa el orden y el tipo de cada dato que se envia.

let ejemplo_tupla : [nombre: string, apellido: string, edad: number, admin: boolean];

ejemplo_tupla = ["Ariel", "Salcito", 23, true]

//Objetos: Es una estructura de datos independiente que posee sus propiedades y tipos, ejemplo un objeto taza posee una propiedad color y este color puede ser rojo.

//Primero debemos definir la estructura que debe tener nuestro objeto (71 - 77) y luego procedemos a crearlo (78-83)

//Este es el objeto persona y siempre que querramos crear una debemos agregar esas propiedades, nombre, apellido, etc.

let persona : {
    nombre: string,
    apellido: string,
    edad: number,
    pais: string,
    fecha_nacimiento: Date,
    laboral: {
        empresa: string,
        sector: string
    }
} = {
    nombre: "Ariel",
    apellido: "Salcito",
    edad: 23,
    pais: "Argentina",
    fecha_nacimiento: new Date(2000, 2, 4),
    laboral: {
        empresa: "Compra gamer",
        sector: "Desarrollo Front-End"
    }
}

//FUNCIONES

//Que es una funcion? una funcion es una parte del codigo encapsulada que se encarga de realizar una o pocas tareas en especifico.

// La funcion a continuacion se encarga de sumar 2 numeros que recibe por parametros.

function sumar(x:number, y:number): number {
    let resultado = x + y;
    console.log(`${x} + ${y} = ${resultado}`)
    return resultado; 
};

// Function anonima, utiliza "callback"

let restar = function(x:number, y:number) : number {
    let resultado = x - y;
    console.log(`${x} - ${y} = ${resultado}`)
    return resultado;
}

let multiplicar: (x: number, y: number) => number

// Forma larga
multiplicar = function(x, y){
    let resultado = x * y
    console.log(`${x} * ${y} = ${resultado}`)
    return resultado
}
// Forma corta
multiplicar = (x, y) => x * y



sumar(2,8);
restar(9,5);

//CLASES

//Que es una clase? una clase es una estructura que posee 2 partes, por una parte contiene datos, y por otra parte posee operaciones para manipular esos datos. pudiendo acceder a ellos de manera rapida y tambien poder modificar su valor. La manera de representar una clase es muy similar a la manera de representar una funcion, es una plantilla(un esqueleto donde desarrollamos todos sus metodos, propiedades, etc.). Una gran ventaja de utilizar clases es que podemos crear una gran estructura de datos y luego dividirla en estructuras de datos mas especificas, por ejemplo podemos tener la clase Vehiculo, y luego dividirla en terrestres, aereos y acuaticos.

//Como crear una clase en TypeScript

//Cuando creamos una clase, no es necesario declarar variables utilizando "var", "let" o "const" ni declarar las funciones, ya que el lenguaje comprende que dentro de las clases estos van a ser los unicos tipos de datos que se van a manejar.

class Rectangulo {

    ancho: number 
    
    alto: number

    constructor(ancho:number, alto:number){
        console.log("constructor(")
        this.ancho = ancho;
        this.alto = alto;
    }

    area(){
        let resultado = this.ancho * this.alto  //This hace referencia a la instancia en la que se esta invocando al metodo.
        return resultado
    }
    perimetro(){
        let resultado = this.ancho * 2 + this.alto * 2 
        return resultado
    }
}

let r1 = new Rectangulo(10, 15);

let r2 = new Rectangulo(4, 3);

r1.area() 
// En este caso, gracias al This, este llamado traera el area de r1
r2.area()
// y en este otro caso, traera el area de r2, ya que this hace refencia a la instancia en la cual se esta utilizando el metodo.

//los valores de las propiedades de cada instancia se pueden modificar en cualquier momento.
r2.alto = 5;
r2.area()

//mientras que estos datos no sean privados (private) private hace que esa accion no pueda llevarse acabo fuera de la clase. ej: private ancho: number, ahora el ancho no podria modificarse desde fuera de la clase.

