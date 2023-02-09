// Comenzamos declarando elementos del DOM.

// Scoreboard - Puntaje

let puntaje = document.getElementById ("puntaje");

// Opciones del jugador (Piedra, papel ó tijeras)

let jugador_elige_piedra = document.getElementById ("jugador_elige_piedra");
let jugador_elige_papel = document.getElementById ("jugador_elige_papel");
let jugador_elige_tijeras = document.getElementById ("jugador_elige_tijeras");


// Declaramos eventlisteners para el click en los 3 botones.

jugador_elige_piedra.addEventListener ("click", jugadorEligePiedra);
jugador_elige_papel.addEventListener ("click", jugadorEligePapel);
jugador_elige_tijeras.addEventListener ("click", jugadorEligeTijeras);

// Funciones para eleccion del jugador.

function jugadorEligePiedra () {

    console.log ("Jugador elige piedra");

};

function jugadorEligePapel () {

    console.log ("Jugador elige papel");

};

function jugadorEligeTijeras () {

    console.log ("Jugador elige tijeras");

};


// Fin