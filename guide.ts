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