const fnAsync = () => { 
    return new Promise((resolve, reject) => { 
    (true) ? 
    setTimeout(() => resolve ("AsynC!!"), 2000) 
    : reject(new Error("Error")); 
    }); 
} 
const anotherFn = async () => { 
    const somethig = await fnAsync(); 
    console.log(somethig); 
    console.log("Hello"); 
} 
console.log("before"); 
anotherFn(); 
console.log("After");

//----------------------------------------------------------------------------------------------------------//

let a = ("      After");
console.log(a);
console.log(a.trimStart());
//----------------------------------------------------------------------------------------------------------//

// Definir Variables

var frutas = [];
var ciudades = [];
var colores = [];
var peliculas = [];
var aleatorio = [];
categoria = "ciudades";

//----------------------------------------------------------------------------------------------------------//

// Definir Arrays


frutas = ["manzana", "pera", "banano", "frambuesa", "fresa", "mangostino", "arandano","mango", "uva", "mandarina", "naranja",
            "mora", "granadilla"];
ciudades = ["bogota", "medellin", "cali", "lima", "pereira", "cartagena", "santamarta", "orlando", "miami", "chicago", "tokyo","caracas", "baranquilla", 
            "armenia"];
colores = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosado", "negro", "blanco", "turquesa", "cafe", "lila", "violeta", "dorado", "plateado", 
            "lavanda", "gris", "cian", "magenta"]
peliculas = ["coco", "frozen", "moana", "luca", "unidos", "enredados", ""];

//----------------------------------------------------------------------------------------------------------//
//Ingreso de categoría

switch (categoria) {
    case "frutas":
        aleatorio = frutas[Math.floor(Math.random() * frutas.length)];
        console.log(aleatorio);
    break;
    case "ciudades":
        aleatorio = ciudades[Math.floor(Math.random() * ciudades.length)];
        console.log(aleatorio);
    break;
    case "colores":
        aleatorio = colores[Math.floor(Math.random() * colores.length)];
        console.log(aleatorio);
    break;
    case "peliculas":
        aleatorio = peliculas[Math.floor(Math.random() * peliculas.length)];
        console.log(aleatorio);
    break;
}
//----------------------------------------------------------------------------------------------------------//
//Inicio del juego




