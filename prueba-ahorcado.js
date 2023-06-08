// const fnAsync = () => { 
//     return new Promise((resolve, reject) => { 
//     (true) ? 
//     setTimeout(() => resolve ("AsynC!!"), 2000) 
//     : reject(new Error("Error")); 
//     }); 
// } 
// const anotherFn = async () => { 
//     const somethig = await fnAsync(); 
//     console.log(somethig); 
//     console.log("Hello"); 
// } 
// console.log("before"); 
// anotherFn(); 
// console.log("After");

// //----------------------------------------------------------------------------------------------------------//

// let a = ("      After");
// console.log(a);
// console.log(a.trimStart());
// //----------------------------------------------------------------------------------------------------------//

// // Definir Variables

// var frutas = [];
// var ciudades = [];
// var colores = [];
// var peliculas = [];
// var aleatorio = [];
// categoria = "ciudades";

// //----------------------------------------------------------------------------------------------------------//

// // Definir Arrays


// frutas = ["manzana", "pera", "banano", "frambuesa", "fresa", "mangostino", "arandano","mango", "uva", "mandarina", "naranja",
//             "mora", "granadilla"];
// ciudades = ["bogota", "medellin", "cali", "lima", "pereira", "cartagena", "santamarta", "orlando", "miami", "chicago", "tokyo","caracas", "baranquilla", 
//             "armenia"];
// colores = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosado", "negro", "blanco", "turquesa", "cafe", "lila", "violeta", "dorado", "plateado", 
//             "lavanda", "gris", "cian", "magenta"]
// peliculas = ["coco", "frozen", "moana", "luca", "unidos", "enredados", ""];

//----------------------------------------------------------------------------------------------------------//
//Ingreso de categoría

// switch (categoria) {
//     case "frutas":
//         aleatorio = frutas[Math.floor(Math.random() * frutas.length)];
//         console.log(aleatorio);
//     break;
//     case "ciudades":
//         aleatorio = ciudades[Math.floor(Math.random() * ciudades.length)];
//         console.log(aleatorio);
//     break;
//     case "colores":
//         aleatorio = colores[Math.floor(Math.random() * colores.length)];
//         console.log(aleatorio);
//     break;
//     case "peliculas":
//         aleatorio = peliculas[Math.floor(Math.random() * peliculas.length)];
//         console.log(aleatorio);
//     break;
// }
//----------------------------------------------------------------------------------------------------------//
//Inicio del juego

//----------------------------------------------------------------------------------------------------------//
//Imprimir las rayas de la palabra
// let word = "palabra";
// let dashes = word.replace(/[a-zA-Z]/g, "-");
// console.log(dashes);

//------------------------------------------------------------------------------------------------------//


//       const boton = document.getElementById("boton");
//       const contador = document.getElementById("contador");
//       let segundos = 0;

//       boton.addEventListener("click", () => {
//         setInterval(() => {
//           segundos++;
//           contador.textContent = `${segundos} segundos`;
//         }, 1000);
//       });


//------------------------------------------------------------------------------------------------------//

//probar comparacion de letras vs la palabra

// var palabra3 = "lara";
// var letra = "a";
// var iguales=0;

// for(var i=0; i<palabra3.length; i++)
// {
	
// 		if(letra == palabra3[i]) {
// 			iguales++;
//             console.log(palabra3[i])      
	
//         }
// }
//console.log(iguales); //cantidad de coincidencias

//------------------------------------------------------------------------------------------------------//
//probar comparacion de letras vs la palabra (Con arrays)

// var palabra3 = "corazon";
// var letra = "o";
// var arreglo = palabra3.split("");
// let dashes = palabra3.replace(/[a-zA-Z]/g, "-");


// for(var i=0; i<arreglo.length; i++)
// {
	
// 		if(letra == arreglo[i]) {
//             console.log(arreglo[i].split());
	
//         }
//         else {

//         }
// }

// console.log(dashes)

//------------------------------------------------------------------------------------------------------//

// const palabras = ["hola", "adios", "gato", "perro"];
// let palabra = palabras[Math.floor(Math.random() * palabras.length)];
// let letras = palabra.split("");
// console.log(letras)
// let aciertos = new Array(letras.length).fill(false);
// let intentos = 0;
// const maxIntentos = 6;



// while (intentos < maxIntentos && aciertos.includes(false)) {
//   let letra = prompt("Ingresa una letra");
//   if (letras.includes(letra)) {
//     for (let i = 0; i < letras.length; i++) {
//       if (letras[i] === letra) {
//         aciertos[i] = true;
//       }
//     }
//   } else {
//     intentos++;
//   }
// }

// if (intentos === maxIntentos) {
//   console.log("Perdiste");
// } else {
//   console.log("Ganaste");
// }

//------------------------------------------------------------------------------------------------------//

// funcion teclado

// var btnteclado = "B";

// function teclado() {
//     switch (btnteclado)
//     {
//         case ('A'):
//             console.log("pulsaste A");
//             break;
//         case ('B'):
//             console.log("pulsaste B");
//             break;
//     }
// }

// teclado("A");

//----------------------------------------------------------------------------------------------
// prueba teclado por teclado
document.addEventListener('boton', (event) => {
    alert(`Tecla presionada: ${event.key}`);
    alert(typeof(keydown));
  });