//----------------------------------------------------------------------------------------------------------//
//                                     Juego de ahorcado                                                    //
//----------------------------------------------------------------------------------------------------------//

// Definir Variables

var frutas = [];
var ciudades = [];
var colores = [];
var peliculas = [];
var aleatorio = [];
//categoria = "ciudades";
var categoria = " ";
const btnfrutas = document.querySelector('#frutas');
const btnciudades = document.querySelector('#ciudades');
const btncolores = document.querySelector('#colores');
const btnpeliculas = document.querySelector('#peliculas');
const btnjugar = document.querySelector('#jugar');

//----------------------------------------------------------------------------------------------------------//
// Definir Arrays


frutas = ["manzana", "pera", "banano", "frambuesa", "fresa", "mangostino", "arandano","mango", "uva", "mandarina", "naranja",
            "mora", "granadilla"];
ciudades = ["bogota", "medellin", "cali", "lima", "pereira", "cartagena", "santamarta", "orlando", "miami", "chicago", "tokyo","caracas", "baranquilla", 
            "armenia"];
colores = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosado", "negro", "blanco", "turquesa", "cafe", "lila", "violeta", "dorado", "plateado", 
            "lavanda", "gris", "cian", "magenta"]
peliculas = ["coco", "frozen", "moana"];


//----------------------------------------------------------------------------------------------------------//
// Seleccionar categoría

btnfrutas.addEventListener("click", categoriafrutas);
btncolores.addEventListener("click", categoriacolores);
btnpeliculas.addEventListener("click", categoriapeliculas);
btnciudades.addEventListener("click", categoriaciudades);


//----------------------------------------------------------------------------------------------------------//
//Funciones
// Seleccionar categoría

function categoriafrutas () {
    aleatorio = frutas[Math.floor(Math.random() * frutas.length)];
    alert(aleatorio);
}

function categoriaciudades () {
    aleatorio = ciudades[Math.floor(Math.random() * ciudades.length)];
    alert(aleatorio);
}

function categoriacolores () {
    aleatorio = colores[Math.floor(Math.random() * colores.length)];
    alert(aleatorio);
}

function categoriapeliculas () {
    aleatorio = peliculas[Math.floor(Math.random() * peliculas.length)];
    alert(aleatorio);
}

//----------------------------------------------------------------------------------------------------------//

 //Funciones 
//Inicio del juego - Jugar
// al dar click en jugar, previamente se debe escoger una categoria 

btnjugar.addEventListener("click", jugar);

function jugar () {
    //alert("escogiste " + aleatorio.length);
    if (aleatorio.length == 0) {
        alert("Debes seleccionar primero una categoría ");
    } else {
        alert("escogiste " + aleatorio);
    }
    

}
//----------------------------------------------------------------------------------------------------------//




