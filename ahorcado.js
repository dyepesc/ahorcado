//----------------------------------------------------------------------------------------------------------//
//                                     Juego de ahorcado                                                    //
//----------------------------------------------------------------------------------------------------------//

// Definir Variables
var letra = "o";
var palabra4 =" ";

var frutas = [];
var ciudades = [];
var colores = [];
var peliculas = [];
var aleatorio = [];
var matrix = [];
var filas = 0;
var segundos = 0;
//categoria = "ciudades";
var categoria = " ";
const btnfrutas = document.querySelector('#frutas');
const btnciudades = document.querySelector('#ciudades');
const btncolores = document.querySelector('#colores');
const btnpeliculas = document.querySelector('#peliculas');
const btnjugar = document.querySelector('#jugar');
const palabra = document.querySelector('.tabla2');
const palabra2 = document.querySelector('.tabla');
const palabra3 = document.querySelector('.tabla3');
const contador = document.querySelector('.tiempo');
//----------------------------------------------------------------------------------------------------------//
// Definir Arrays


frutas = ["manzana", "pera", "banano", "frambuesa", "fresa", "mangostino", "arandano","mango", "uva", "mandarina", "naranja",
            "mora", "granadilla"];
ciudades = ["bogota", "medellin", "cali", "lima", "pereira", "cartagena", "santamarta", "orlando", "miami", "chicago", "tokyo","caracas", "baranquilla", 
            "armenia"];
colores = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosado", "negro", "blanco", "turquesa", "cafe", "lila", "violeta", "dorado", "plateado", 
            "lavanda", "gris", "cian", "magenta"]
peliculas = ["coco"];


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
    //alert(aleatorio);
}

function categoriaciudades () {
    aleatorio = ciudades[Math.floor(Math.random() * ciudades.length)];
    //alert(aleatorio);
}

function categoriacolores () {
    aleatorio = colores[Math.floor(Math.random() * colores.length)];
    //alert(aleatorio);
}

function categoriapeliculas () {
    aleatorio = peliculas[Math.floor(Math.random() * peliculas.length)];
    //alert(aleatorio);
}

//----------------------------------------------------------------------------------------------------------//

 //Funciones 
//Inicio del juego - Jugar
// al dar click en jugar, previamente se debe escoger una categoria 

btnjugar.addEventListener("click", jugar);

function jugar () {
    
    if (aleatorio.length == 0) {                            // se inicia con este if para que siempre escoja una categoría
        alert("Debes seleccionar primero una categoría ");
    } else {
        alert("escogiste " + aleatorio);
        let rayas = aleatorio.replace(/[a-zA-Z]/g, "-");    //reemplaza la palabra por rayitas
        palabra.innerHTML = rayas;                          // imprime las rayitas en palabra que es la tabla2 en HTML
        palabra2.style.display = "none";                    //esconde el titulo "Aqui encontraras tu palabra"
        contador.innerHTML = time();
        comparar();
    }
    

}


//----------------------------------------------------------------------------------------------------------//
// Funcion para llevar el tiempo que tarda la persona en encontrar la palabra

function time () {
    setInterval(() => {
        segundos++;
        contador.textContent = `${segundos} segundos`;
      }, 1000); 
}

//----------------------------------------------------------------------------------------------------------//
// Funcion para comparar la letra con la palabra
function comparar() {  
    for (let i=0; i<aleatorio.length; i++)
    {
        if (letra == aleatorio[i]) 
        {
            palabra4 += aleatorio[i]
            palabra3.innerHTML = palabra4;
            // alert(palabra4)     
        }
    }
    alert(palabra4) 
}


