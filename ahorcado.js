//----------------------------------------------------------------------------------------------------------//
//                                     Juego de ahorcado                                                    //
//----------------------------------------------------------------------------------------------------------//

// Definir Variables

var letra = " ";
var palabra4 = [];
var nuevapalabra = [];
var rayas = "";
var frutas = [];
var ciudades = [];
var colores = [];
var peliculas = [];
var aleatorio = [];
var matrix = [];
var filas = 0;
var segundos = 0;
var categoria = " ";
var contador3 = 10;
const contador2 = document.querySelector('.intentos');
const btnfrutas = document.querySelector('#frutas');
const btnciudades = document.querySelector('#ciudades');
const btncolores = document.querySelector('#colores');
const btnpeliculas = document.querySelector('#peliculas');
const btnjugar = document.querySelector('#jugar');
const palabra = document.querySelector('.tabla2');
const palabra2 = document.querySelector('.tabla');
const palabra3 = document.querySelector('.tabla3');
const contador = document.querySelector('.tiempo');
const btntecla_a =  document.querySelector('#A');
const btntecla_b =  document.querySelector('#B');
const btntecla_c =  document.querySelector('#C');
const btntecla_d =  document.querySelector('#D');
const btntecla_e =  document.querySelector('#E');
const btntecla_f =  document.querySelector('#F');
const btntecla_g =  document.querySelector('#G');
const btntecla_h =  document.querySelector('#H');
const btntecla_i =  document.querySelector('#I');
const btntecla_j =  document.querySelector('#J');
const btntecla_k =  document.querySelector('#K');
const btntecla_l =  document.querySelector('#L');
const btntecla_m =  document.querySelector('#M');
const btntecla_n =  document.querySelector('#N');
const btntecla_ñ =  document.querySelector('#Ñ');
const btntecla_o =  document.querySelector('#O');
const btntecla_p =  document.querySelector('#P');
const btntecla_q =  document.querySelector('#Q');
const btntecla_r =  document.querySelector('#R');
const btntecla_s =  document.querySelector('#S');
const btntecla_t =  document.querySelector('#T');
const btntecla_u =  document.querySelector('#U');
const btntecla_v =  document.querySelector('#V');
const btntecla_w =  document.querySelector('#W');
const btntecla_x =  document.querySelector('#X');
const btntecla_y =  document.querySelector('#Y');
const btntecla_z =  document.querySelector('#Z');

//----------------------------------------------------------------------------------------------------------//
// Definir Arrays

frutas = ["manzana", "pera", "banano", "frambuesa", "fresa", "mangostino", "arandano","mango", "uva", "mandarina", "naranja",
            "mora", "granadilla"];
ciudades = ["bogota", "medellin", "cali", "lima", "pereira", "cartagena", "santamarta", "orlando", "miami", "chicago", "tokyo","caracas", "baranquilla", 
            "armenia"];
colores = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosado", "negro", "blanco", "turquesa", "cafe", "lila", "violeta", "dorado", "plateado", 
            "lavanda", "gris", "cian", "magenta"]
peliculas = ["coco", "cenicienta", "blancanieves", "bambi", "frozen", "fantasia", "dumbo", "zootopia", "pinocho",
            "danny", "tron", "aladdin", "pocahontas", "hercules", "mulan", "tarzan", "atlantis", "los tres caballeros",
            "cancion del sur", "tiempo de melodia", "peter pan"];

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
    } 
    if (aleatorio.length != 0) {
    
        //alert("escogiste " + aleatorio);
        rayas = aleatorio.replace(/[a-zA-Z]/g, "-");    //reemplaza la palabra por rayitas
        palabra.innerHTML = rayas;                          // imprime las rayitas en palabra que es la tabla2 en HTML
        palabra2.style.display = "none";                    //esconde el titulo "Aqui encontraras tu palabra"
        contador.innerHTML = time();
        palabra4 = rayas.split('');                         //convertir en rayar y array la palabra aleatorio, esta variable se usara en la funcion comparar
        btntecla_a.addEventListener("click", tecla_a); 
        btntecla_b.addEventListener("click", tecla_b); 
        btntecla_c.addEventListener("click", tecla_c); 
        btntecla_d.addEventListener("click", tecla_d); 
        btntecla_e.addEventListener("click", tecla_e); 
        btntecla_f.addEventListener("click", tecla_f); 
        btntecla_g.addEventListener("click", tecla_g); 
        btntecla_h.addEventListener("click", tecla_h); 
        btntecla_i.addEventListener("click", tecla_i); 
        btntecla_j.addEventListener("click", tecla_j); 
        btntecla_k.addEventListener("click", tecla_k); 
        btntecla_l.addEventListener("click", tecla_l); 
        btntecla_m.addEventListener("click", tecla_m); 
        btntecla_n.addEventListener("click", tecla_n); 
        btntecla_ñ.addEventListener("click", tecla_ñ); 
        btntecla_o.addEventListener("click", tecla_o); 
        btntecla_p.addEventListener("click", tecla_p); 
        btntecla_q.addEventListener("click", tecla_q); 
        btntecla_r.addEventListener("click", tecla_r); 
        btntecla_s.addEventListener("click", tecla_s); 
        btntecla_t.addEventListener("click", tecla_t); 
        btntecla_u.addEventListener("click", tecla_u); 
        btntecla_v.addEventListener("click", tecla_v); 
        btntecla_w.addEventListener("click", tecla_w); 
        btntecla_x.addEventListener("click", tecla_x); 
        btntecla_y.addEventListener("click", tecla_y); 
        btntecla_z.addEventListener("click", tecla_z);         
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
// Funcion para ingresar letras por teclado en pantalla

function tecla_a() {
    letra = "a";
    comparar();
}
function tecla_b() {
    letra = "b";
    comparar();
}
function tecla_c() {
    letra = "c";
    comparar();
}  
function tecla_d() {
    letra = "d";
    comparar();
}
function tecla_e() {
    letra = "e";
    comparar();
}
function tecla_f() {
    letra = "f";
    comparar();
}
function tecla_g() {
    letra = "g";
    comparar();
}
function tecla_h() {
    letra = "h";
    comparar();
}
function tecla_i() {
    letra = "i";
    comparar();
}
function tecla_j() {
    letra = "j";
    comparar();
}
function tecla_k() {
    letra = "k";
    comparar();
}
function tecla_l() {
    letra = "l";
    comparar();
}
function tecla_m() {
    letra = "m";
    comparar();
}
function tecla_n() {
    letra = "n";
    comparar();
}
function tecla_ñ() {
    letra = "ñ";
    comparar();
}
function tecla_o() {
    letra = "o";
    comparar();
}
function tecla_p() {
    letra = "p";
    comparar();
}
function tecla_q() {
    letra = "q";
    comparar();
}
function tecla_r() {
    letra = "r";
    comparar();
}
function tecla_s() {
    letra = "s";
    comparar();
}
function tecla_t() {
    letra = "t";
    comparar();
}
function tecla_u() {
    letra = "u";
    comparar();
}
function tecla_v() {
    letra = "v";
    comparar();
}
function tecla_w() {
    letra = "w";
    comparar();
}
function tecla_x() {
    letra = "x";
    comparar();
}
function tecla_y() {
    letra = "y";
    comparar();
}
function tecla_z() {
    letra = "z";
    comparar();
}

//----------------------------------------------------------------------------------------------------------//
// Funcion para comparar la letra con la palabra

function comparar() {  
   
    nuevapalabra = aleatorio.split('');

    for (let i=0; i<nuevapalabra.length; i++)
    {

        if (letra == nuevapalabra[i]) 
        {
            palabra4[i] = letra;
            palabra.innerHTML = palabra4;
        }
        
        else 
        {
            //intentos();     
        }
    } 
    intentos(); 
}

//----------------------------------------------------------------------------------------------------------//
// Funcion intentos para restar el numero de oportunidades

function intentos() {
    contador3--;
    contador2.innerHTML = contador3;
}


