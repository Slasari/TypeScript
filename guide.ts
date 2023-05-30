//funcion para saludar a una persona por su nombre//

function saludar(nombre: string): string {
  return `Bienvenido ${nombre.toUpperCase()}!`;
}
console.log(saludar("Ariel"));

//Tipos de datos primitivos//

//string : cadena de texto, para que un dato sea considerado string debe estar representado entre ''

let cadena_texto: string = "Hello World!";

//number : cualquier variable de numero

let entero: number = 10;
let decimal: number = 10.5;
let hexadecimal: number = 0xcbcbaa;
let binario: number = 0b10010010101;

//cuando un numero es demasiado largo, podemos usar _ para separarlo y asi entender mejor el codigo

let numero_demasiado_largo: number = 7_823_340_127;

//boolean : deja en claro que esta variable puede ser true o false

let falso: boolean = false;
let verdadero: boolean = true;

//Tipos de datos especiales de TypeScript//

// any : se utiliza para indicar que la variable puede ser cualquier tipo de dato (no necesita inicializacion de valor), no recomendado.

let algo: any;

// null : no posee ningun tipo de valor.

let sin_valor: null = null;

// undefined : misma teoria que el tipo de dato null, este se puede utilizar para indicar que una variable puede ser un string o ser undefined, por ejemplo.

let sin_definir: undefined = undefined;

// void : representa la nada, y se utiliza por ejemplo, para indicar que una funcion no retorna ningun valor, es decir, no posee un return.
// console.log no es lo mismo que return, console.log imprime algo en la consola. return siempre  retorna un valor.

function saludo(nombre) {
  console.log(`hola ${nombre}`);
}

//Arrays y tuplas

//Array : Es una lista de valores ordenados por un indice, los valores pueden ser del mismo tipo o no, segun lo indiquemos.

let dias: string[] = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
]; //Array solo de strings.

let cosas_varias: any[] = ["Lunes", 10, true, null]; //Array de varios tipos de datos.

//Tupla : Tipo de Array donde importa el orden y el tipo de cada dato que se envia.

let ejemplo_tupla: [
  nombre: string,
  apellido: string,
  edad: number,
  admin: boolean
];

ejemplo_tupla = ["Ariel", "Salcito", 23, true];

//Objetos: Es una estructura de datos independiente que posee sus propiedades y tipos, ejemplo un objeto taza posee una propiedad color y este color puede ser rojo.

//Primero debemos definir la estructura que debe tener nuestro objeto (71 - 77) y luego procedemos a crearlo (78-83)

//Este es el objeto persona y siempre que querramos crear una debemos agregar esas propiedades, nombre, apellido, etc.

let persona: {
  nombre: string;
  apellido: string;
  edad: number;
  pais: string;
  fecha_nacimiento: Date;
  laboral: {
    empresa: string;
    sector: string;
  };
} = {
  nombre: "Ariel",
  apellido: "Salcito",
  edad: 23,
  pais: "Argentina",
  fecha_nacimiento: new Date(2000, 2, 4),
  laboral: {
    empresa: "Compra gamer",
    sector: "Desarrollo Front-End",
  },
};

//FUNCIONES

//Que es una funcion? una funcion es una parte del codigo encapsulada que se encarga de realizar una o pocas tareas en especifico.

// La funcion a continuacion se encarga de sumar 2 numeros que recibe por parametros.

function sumar(x: number, y: number): number {
  let resultado = x + y;
  console.log(`${x} + ${y} = ${resultado}`);
  return resultado;
}

// Function anonima, utiliza "callback"

let restar = function (x: number, y: number): number {
  let resultado = x - y;
  console.log(`${x} - ${y} = ${resultado}`);
  return resultado;
};

let multiplicar: (x: number, y: number) => number;

// Forma larga
multiplicar = function (x, y) {
  let resultado = x * y;
  console.log(`${x} * ${y} = ${resultado}`);
  return resultado;
};
// Forma corta
multiplicar = (x, y) => x * y;

sumar(2, 8);
restar(9, 5);

//CLASES

//Que es una clase? una clase es una estructura que posee 2 partes, por una parte contiene datos, y por otra parte posee operaciones para manipular esos datos. pudiendo acceder a ellos de manera rapida y tambien poder modificar su valor. La manera de representar una clase es muy similar a la manera de representar una funcion, es una plantilla(un esqueleto donde desarrollamos todos sus metodos, propiedades, etc.). Una gran ventaja de utilizar clases es que podemos crear una gran estructura de datos y luego dividirla en estructuras de datos mas especificas, por ejemplo podemos tener la clase Vehiculo, y luego dividirla en terrestres, aereos y acuaticos.

//Como crear una clase en TypeScript

//Cuando creamos una clase, no es necesario declarar variables utilizando "var", "let" o "const" ni declarar las funciones, ya que el lenguaje comprende que dentro de las clases estos van a ser los unicos tipos de datos que se van a manejar.

class Rectangulo {
  ancho: number;

  alto: number;

  private _nombre: string = "";

  constructor(ancho: number, alto: number) {
    console.log("constructor(");
    this.ancho = ancho;
    this.alto = alto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get area() {
    //get: getter (linea 176)
    let resultado = this.ancho * this.alto; //This hace referencia a la instancia en la que se esta invocando al metodo.
    return resultado;
  }
  perimetro() {
    let resultado = this.ancho * 2 + this.alto * 2;
    return resultado;
  }
}

let r1 = new Rectangulo(10, 15);

let r2 = new Rectangulo(4, 3);

r1.area;
// En este caso, gracias al This, este llamado traera el area de r1
r2.area;
// y en este otro caso, traera el area de r2, ya que this hace refencia a la instancia en la cual se esta utilizando el metodo.

//los valores de las propiedades de cada instancia se pueden modificar en cualquier momento.
r2.alto = 5;
r2.area;

//private: es una palabra clave que hace que esa variable no pueda ser leida u modificada desde fuera de la clase. ej: private ancho: number, ahora el ancho no podria leerse u modificarse desde fuera de la clase.

//readonly: esta palabra clave se asegura de que la variable no pueda recibir cambios una vez reciba su valor inicial.

//get: un getter lo que hace es ejecutar una funcion dentro de la clase pero por fuera de esta solo se ve como un atributo. de esta manera optimizamos el codigo para que una vez tengamos una clase con decenas de metodos, no se ejecuten al crear una instancia, sino cuando vayamos a necesitarlo.(los getter por fuera de la clase se consideran readonly)

//set: muy similar a un get pero en este caso cambia el valor de un atributo virtual.

//HERENCIA

//Que es una herencia? podemos tener varias clases descendientes de una clase Padre, ej: class Vehiculo, class VehiculoTerreste extends Vehiculo, class VehiculoMaritimo extends Vehiculo, class VehiculoAereo extends Vehiculo. Los descendientes heredan todos los comportamientos de su clase Padre

abstract class Vehiculo {
  //anstract: palabra clave que impide la creacion de un nuevo "Vehiculo" sin mas, es decir que esta clase solo se podria utilizar para agregar metodos a las demas instancias de Vehiculo, y para crear un nuevo vehiculo este debe pertener a una de sus extenciones (Terreste, Aereo, Maritimo)

  protected fabricante: string = "";

  //protected: es otra palabra clave que impide el acceso a la variable desde fuera del scout, a menos que se llame dentro de un heredero de esta clase.

  constructor(fabricante: string) {
    this.fabricante = fabricante;
  }

  moverse() {
    console.log(`El vehiculo ${this.fabricante} se ha movido`);
  }
}

//para utilizar constructores en las instancias de una clase, es necesario llamar al constructor de la clase Padre dentro de cada instancia.

class VehiculoTerreste extends Vehiculo {
  private tipo: string = "";

  constructor(fabricante: string, tipo: string) {
    super(fabricante);
    this.tipo = tipo;
  }

  moverse(): void {
    console.log(`El vehiculo Terrestre se ha movido y es una ${this.tipo}`);
    super.moverse();
    //super: Esto traera tambien el metodo moverse de la clase Padre, ya que la palabra clave super (superior) hace refencia a la clase superior a la cual se encuentra esta palabra.
  }

  reparar() {
    console.log(
      `Un momento que busco el manual de instrucciones de ${this.fabricante}`
    );
  }
}

class VehiculoAereo extends Vehiculo {
  moverse(): void {
    console.log(`El vehiculo ${this.fabricante} se ha movido`);
  }
}

class VehiculoMaritimo extends Vehiculo {
  moverse(): void {
    console.log(`El vehiculo ${this.fabricante} se ha movido`);
  }
}

let vehiculo = new VehiculoTerreste("Yamaja", "Moto");
vehiculo.moverse();

//TIPOS ALIAS

//Que son? Los tipos alias permiten utilizar una variable para tomar el valor de un tipo de dato o varios tipos de datos. ej:

type LoginCredentials = {
  username: string;
  password: string;
};

function login(data: LoginCredentials) {}

//Aca tenemos un nuevo "tipo de dato" (tipo alias) llamado LoginCredentials que es un objeto que posee 2 propiedades, username y password
//Esto sirve principalmente para que el codigo sea mucho mas escalable, ya que una vez que nuestra funcion de login necesite de alguna otra propiedad, podamos agregarla en el tipo de dato LoginCredentials y asi no debamos agregarla en cada lugar donde estamos utilizando la funcion.

//Variables tipo literales

//Que son? son variables que aceptan un unico valor, sintaxis: let una_variable_cualquiera: "valor_unico" = "valor_unico", ejemplo:

let verdadera: true = true; //la variable verdadera solo posee un unico valor, el cual es true.

let cinco: 5 = 5; //la variable "cinco" solo aceptara como valor 5

let hola: "hola" = "hola"; //la variable hola solo aceptara el valor "hola"

//para esto tambien se utiliza "const"

const adios = "adios"; // adios solo aceptara como valor "adios" y no puede ser reedeclarado.

//Uniones de tipos

//Que significa? basicamente las uniones de tipos sirven para que una variable pueda tener mas de un tipo. ej:

function convertir(valor: string | number) {
  //la funcion convertir recibe el parametro valor, que puede ser string o number.

  if (typeof valor === "string") {
    valor.trim();
  } else if (typeof valor === "number") {
    valor.toFixed();
  }

  //Utilizamos typeof para saber de que tipo es el valor que nos esta llegando, y asi poder tomar las medidas para ese tipo.
}
convertir("hola");
convertir(150);

//Uniones discriminantes basicamente todos los tipos alias poseen una propiedad en comun "tipo" y dependiendo del valor de esa propiedad podemos decidir si ejecutar la accion a o ejecutar la accion b. ej:

type OperacionSuma = {
  sumando1: number;
  sumando2: number;
  tipo: "sumar";
};

type OperacionMultiplicar = {
  operando1: number;
  operando2: number;
  tipo: "multiplicar";
};

type Operacion = OperacionSuma | OperacionMultiplicar;

function operar(o: Operacion) {
  // el argumento "o" va a ser una Operacion, es decir que puede ser OperacionSuma u OperacionMultiplicar
  if (o.tipo == "sumar") {
    // para saber que tipo de Operacion esta entrando en la funcion, verificamos el valor de "tipo"
    let resultado = o.sumando1 + o.sumando2;
    return resultado;
  } else if (o.tipo == "multiplicar") {
    let resultado = o.operando1 * o.operando2;
    return resultado;
  }
}

//interseccion de tipos

//Que es? Es una manera de trabajar uniendo varios tipo alias para optimizar el codigo, hacerlo mucho mas escalable y escribir lo menos posible

type Coordenada = [x: number, y: number];
type Vector = [x: number, y: number];

type Posicionable = {
  posicion: Coordenada;
};

let posicion: Posicionable = {
  posicion: [5, 5],
};

type Movible = {
  velocidad: Vector;
  aceleracion: Vector;
};

type MovibleYPosicionable = Posicionable & Movible;

let obj: MovibleYPosicionable = {
  posicion: [5, 5],
  velocidad: [4, 4],
  aceleracion: [1, 1],
};

//Ya que la variable "obj" es de tipo MovibleYPosicionable, que a su vez es una interseccion de Posicionable y Movible, para poder crear este obj de este tipo, vamos a necesitar declarar todas las variables antes mencionadas en sus tipos "Padres".

//INTERFACES

//Que son? Una interfaz es una especificacion o un CONTRATO, basicamente cuando creemos una interfaz, vamos a crear un tipo de dato y vamos a declarar una serie de aspectos que luego queremos que objetos de ese tipo tengan. ej:

interface UserData {
  readonly username: string; //readonly: el valor puede leerse pero no cambiarse fuera del scout donde fue creado.
  created_at?: Date; // el signo ? hace refencia a que esta propiedad puede ser undefined.
  superuser: boolean;
  readonly personal: {
    name: string;
    email: string;
  };

  logout(): void;
  rename: (username: string) => void;
}
//Si algo en nuestro codigo quiere considerarse UserData, debe implementar todo aquello que posea nuestra interfaz

function loginUser(): UserData {
  return {
    username: "ervilax",
    created_at: new Date(),
    superuser: true,
    personal: {
      name: "xalivre",
      email: "xalivre@hotmail.com",
    },
    logout() {
      console.log("adios");
    },
    rename(username) {
      console.log("TODO: Rename account");
    },
  };
}
//Si agregaramos mas campos al return de loginUser, esto daria error ya que no se respetaria la implementacion de la interface UserData.

let log = loginUser();
console.log(log.username);

if (log.created_at) {
  log.created_at;
}
//aqui TypeScript no sabe si created_at posee algun valor o es undefined, sin embargo una vez que entramos en el if ya sabe al 100% que created_at contiene un valor "date" ya que sino, no hubiera accedido al if.

//una manera mas simple de acceder a esta propiedad solo si tiene valor es volver a utilizar "?" para comprobar si posee algun valor, ej:
log.created_at?.toISOString;
//Si utilizamos "!" le estamos diciendo a TypeScript que ignore esta comprobacion y acceda a la propiedad de todas formas.
log.created_at!.toISOString;

//Implementacion de interfaces

interface Shape {
  readonly sides: number;

  area(): number;
  perimeter(): number;
}

function process(s: Shape) {}

class Ractangle implements Shape {
  sides: number = 4;

  constructor(readonly width: number, readonly height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * this.width + 2 * this.height;
  }
}

let r = new Ractangle(5, 5);
process(r);

//Implementacion de Herencias de interfaces.

interface Vehicle {
  readonly fabricador: string;
  arrancarMotor(): void;
  repostar(): void;
  detenerMotor(): void;
}

interface VehicleTerrestre extends Vehicle {
  conducir(): void;
}

interface VehicleMaritimo extends Vehicle {
  sonarSirena(): void;
  encenderChimenea(): void;
  detenerChimenea(): void;
}

class OpelCorsa implements VehicleTerrestre {
  fabricador: string;
  arrancarMotor(): void {
    console.log("arranca");
  }
  repostar(): void {
    console.log("Full tanque de super");
  }
  detenerMotor(): void {
    console.log("se apaga");
  }
  conducir(): void {
    console.log("se conduce");
  }

  abrirMaletero(): void {}
}

function procesar(v: Vehicle) {
  v.arrancarMotor();
}

procesar(new OpelCorsa()); // Aun que ejecutemos el metodo con la clase OpelCorsa, "procesar" lo tomara como un vehicle, por lo tanto
// solo tendra disponibles los metodos de Vechile (en este caso, abrirMaletero no estara disponible.)

//INTERFACES CON INDICE

//Que es un tipo indiceable? arrays y objects

interface Indizable {
  [index: number]: boolean; //Esta propiedad indica al programa que esta interfaz es de tipo indiceable
}

let variable: Indizable = {};

variable[4]; //Asi accedemos a la propiedad utilizando una interfaz indiceable.

//FUNCIONES Y TIPOS HIBRIDOS

//Que es un tipo hibrido? un tipo hibrido es algo que puede ser invocado como una funcion, pero que tambien posee atributos.

//Funcion de tipo:

type Comparator = (a: string, b: string) => number; //Esta es la manera de crear un tipo que contenga una funcion.

//Funcion de interfaz:

interface Comparator2 {
  (first: string, second: string): number; //Esta es la manera de crear una interfaz que contenga una funcion. (sera invocable)
  safe: boolean;
  reglas: string[];
}

function sort(c: Comparator2) {
  let respuesta = c("first", "second"); //Aqui podemos ver que "c" contiene el metodo creado en la interfaz.
  c.reglas; //Y que tambien posee los atributos de dicho interfaz.
  console.log(`Ordenado segun ${c.reglas}, ${respuesta}`); //Podemos utilizar ambos tipos de datos como querramos.
}

//DIFERENCIA ENTRE INTERFACE Y TYPE

//Interface: Es posible extender una interfaz y sus atributos simplemente declarando otra interfaz con el mismo nombre

interface X {
  a: string;
}
interface X {
  b: string;
}
interface X {
  c: string;
}

function use(x: X) {
  //Podemos acceder a los atributos de las diferentes extensiones de nuestra interfaz X estando en diferentes scouts.
  x.a + x.b + x.c;
}

//El objeto Window siempre esta presente en todos los navegadores web y podemos acceder a sus propiedades como cualquier obj
//Interface: Tambien podemos acoplar nuestras propiedades al objeto Window utilizando el metodo visto justo arriba.

interface Window {
  accountID: number;
}

function use2(w: Window) {
  w.accountID;
}

//CASTEOS

//Que es? un casteo es cuando transformamos una variable de un tipo, a otro tipo.

interface Geometria {
  lados: number;
  pintar(): void;
}
interface Triangulo extends Geometria {
  base: number;
  altura: number;
}
interface Cuadrado extends Geometria {
  lado: number;
}

function procesar2(g: Geometria) {
  //La funcion recibe un parametro que implementa la interfaz Geometria(Solo posee la propiedad lados)
  if (g.lados == 4) {
    //Verificamos que la cantidad de lados sea 4.
    let cuadrado = g as Cuadrado; //Si la cantida de lados es 4, entonces CASTEAMOS "g" de Geometria, a Cuadrado.
    cuadrado.lado; // Y ahora podemos acceder a su propiedad lado ya que es una propiedad de la interfaz Cuadrado.
  } else if (g.lados == 3) {
    let triangulo = g as Triangulo; //Si la variable posee 3 lados, la casteamos a Triangulo.
    triangulo.base; //Y ahora podemos acceder a su base y a su altura, propiedades de la interfaz Triangulo.
    triangulo.altura;
  }
}

//INSTANCEOF

//Para que sive instanceof? verifica si una variable es de un tipo o de una clase en concreto.

let color1 = new String("verde");
color1 instanceof String; // devuelve true ya que color1 es una instancia de new String.

//Guardas de tipo is

//Que son? Las guardas son funciones que devuelven un valor boolean, ej:

function esUnCuadrado(x: any): x is Cuadrado {
  //Aqui hacemos una comprobacion de tipos, si x es any, debe verificar si es un Cuadrado
  return x.lados && x.pintar && x.lado; //Y luego retorna los valores que posee un Cuadrado
}

function procesar3(g: Geometria) {
  //Misma funcion procesar de la linea 565, pero esta vez mas eficiente usando esUnCuadrado.
  if (esUnCuadrado(g)) {
    //Si g es un cuadrado, la funcion esUnCuadrado devolvera true, por lo tanto entrara en nuestro if.
    g.lado;
  }
}

//ENUM

//Para que sirve enum? Enum sirve para crear un rango de valores estricto para una variable. ej:

enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo",
}
//Aqui especificamos gracias a la palabra clave enum, que el tipo DiaSemana solo puede tener los valores especificados.

interface CitaMedica {
  //Creamos la interfaz CitaMedica que contiene una propiedad para programar el dia de la cita.
  dia: DiaSemana;
}

let cita: CitaMedica = {
  //Creamos una cita medica.
  dia: DiaSemana.Lunes, //Y como propiedad dia solo podemos agregar un valor ya especificado en nuestro tipo de dato enum.
};

//ENUM CON VALORES COMPUTADOS

enum Permisos {
  EscribirMensajes = 0,
  Reaccionar = EscribirMensajes * 2,
  EnviarEnlaces = Reaccionar * 2,
  ConectarseACanalesDeVoz = EnviarEnlaces * 2,
}

//GENERICOS
//Para que sirve? Sirve para influenciar desde fuera, el tipo de alguna propiedad de la interfaz generica. (<T>) ej :

interface Respuesta<T> {
  //Indicamos que message va a ser de tipo T y luego, vamos a indicar que tipo de dato es T.
  type: string;
  success: boolean;
  message: T;
}

let payload: Respuesta<string> = {
  //Aqui indicamos que <T> va a ser de tipo string, por lo tanto, message solo aceptara ese valor.
  type: "post",
  success: true,
  message: "enviado",
};

let payload2: Respuesta<boolean> = {
  //Aqui indicamos que <T> sera un booleano, por lo tanto, message solo aceptara los valores true o false.
  type: "get",
  success: true,
  message: true,
};

//GENERICOS 2
//Podemos agregar mas de un valor generico a nuestra interfaz generica.

interface Respuesta2<T, U> {
  //Es importante respetar el orden en el que se envian los parametros, como si fuera una funcion.
  type: string;
  success: boolean;
  message: T;
  whatever: U;
}

let payload3: Respuesta2<string, number> = {
  //El primer valor enviado sera considerado como T (lo tomara mesasge) y el segundo valor sera consderado como U (lo tomara whatever)
  type: "get",
  success: true,
  message: "hola",
  whatever: 50,
};
//IMPORTANTE!! se recomienda no utilizar letras sueltas para declarar genericos, ya que esto puede confundir a largo plazo, en este caso podriamos reemplazar <T> por <Message> y <U> por <Something> asi quedaria mas claro que representa cada valor.

//GENERICOS EN FUNCIONES

interface Post {
  id: number;
}
interface Nota extends Post {
  message: string;
}
interface NotaColorida extends Nota {
  color: string;
}
interface Foto extends Post {
  url: string;
}
interface Video extends Foto {
  duracion: number;
}

//HTTP POST /upload

function subir<Publicacion extends Post, Extra>(
  p: Publicacion,
  e?: Extra
): Publicacion {
  return p;
}

let post: Nota = { id: 1, message: "Hello World" };
let x = subir(post);
//Manera correcta de hacerlo, declaramos que post sera de tipo nota y que "x" sera ejecutar la funcion subir con post, por lo tanto TypeScript ya sabe que x sera de tipo nota.

//RESTRICCIONES EN GENERICOS
//(Linea 682) Al agregar la interfaz Post y hacer que nota sea una extension de esta interfaz, estamos declarando que una variable de tipo Nota ahora debera poseer un id (proveniente de Post) y un message que debe ser un string (Proveniente de Nota) de esta manera le estamos diciendo a TypeScript que si la variable "post" no cumple con las condiciones que debe tener para ser considerada una Nota, entonces no ejecutara la funcion subir.


