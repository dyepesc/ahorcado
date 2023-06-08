//----------------------------------------------------------------------------------------------------------//
//                                     Juego de ahorcado                                                    //
//----------------------------------------------------------------------------------------------------------//

// Definir Variables
var letra = " ";
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
    } 
    if (aleatorio.length != 0) {
    
        //alert("escogiste " + aleatorio);
        let rayas = aleatorio.replace(/[a-zA-Z]/g, "-");    //reemplaza la palabra por rayitas
        palabra.innerHTML = rayas;                          // imprime las rayitas en palabra que es la tabla2 en HTML
        palabra2.style.display = "none";                    //esconde el titulo "Aqui encontraras tu palabra"
        contador.innerHTML = time();
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
        else if {
            
        }
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
// Funcion para ingresar letras por teclado en pantalla

function tecla_a() {
    alert("A");
    letra = "A";
}
function tecla_b() {
    alert("B")
    
}
function tecla_c() {
    alert("C")
    
}  
function tecla_d() {
    alert("D")
    
}
function tecla_e() {
    alert("E")
    
}
function tecla_f() {
    alert("F")
    
}
function tecla_g() {
    alert("G")
    
}
function tecla_h() {
    alert("H")
    
}
function tecla_i() {
    alert("I")
    
}
function tecla_j() {
    alert("J")
    
}
function tecla_k() {
    alert("K")
    
}
function tecla_l() {
    alert("L")
    
}
function tecla_m() {
    alert("M")
    
}
function tecla_n() {
    alert("N")
    
}
function tecla_ñ() {
    alert("Ñ")
    
}
function tecla_o() {
    //alert("O")
    letra = "o";
    //alert("la letra es " + letra);
}
function tecla_p() {
    alert("P")
    
}
function tecla_q() {
    alert("Q")
    
}
function tecla_r() {
    alert("R")
    
}
function tecla_s() {
    alert("S")
    
}
function tecla_t() {
    alert("T")
    
}
function tecla_u() {
    alert("U")
    
}
function tecla_v() {
    alert("V")
    
}
function tecla_w() {
    alert("W")
    
}
function tecla_x() {
    alert("X")
    
}
function tecla_y() {
    alert("Y")
    
}
function tecla_z() {
    alert("Z")
    
}

//----------------------------------------------------------------------------------------------------------//
// Funcion para comparar la letra con la palabra
function comparar() {  
    
    for (let i=0; i<aleatorio.length; i++)
    {
        //alert("la letra es " + letra);
        if (letra == aleatorio[i]) 
        {
            palabra4 += aleatorio[i]
                  
        }
        else 
        {
            palabra4 += "_"
        }
    }
    palabra.innerHTML = palabra4;
    //alert(palabra4) 
}


