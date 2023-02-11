// Definiendo elementos del DOM (Botones).

let boton_piedra = document.getElementById ("boton_piedra").addEventListener("click", JugadorEligePiedra);



// Funciones de cada boton (Jugadas).

function JugadorEligePiedra (CPUElige) {

    CPUElige = CPUJuega ();
    console.log ("El Humano Elige Piedra.");

    if ((CPUElige) === "Piedra") {

        console.log (empateRonda);

    };

    if ((CPUElige) === "Papel") {

        console.log (CPUGanaRonda);

    };

    if ((CPUElige) === "Tijeras") {

        console.log (jugadorGanaRonda);

    };
    console.log ("              ");


};

// Guardamos en variables los mensajes de victoria/derrota/empate para cada ronda.

let jugadorGanaRonda = "El jugador gana esta ronda.";
let CPUGanaRonda = "El CPU gana esta ronda.";
let empateRonda = "Esta ronda queda en empate";

// Funcion de simulacion de jugada del CPU (Random)

function CPUJuega () {

    let opciones = ["Piedra", "Papel", "Tijeras"];
    let random = Math.floor (Math.random () * opciones.length);
    console.log ("El Robot Elige " +opciones [random]+ ".");
    return opciones [random];

};

