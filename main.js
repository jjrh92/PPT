// Definiendo elementos del DOM (Espacio para mostrar jugada de CPU.).

let jugadaCPU = document.getElementById ("jugadaCPU");
let resultadoRonda = document.getElementById ("resultadoRonda");
let marcador_jugador = document.getElementById ("marcador_jugador");
let marcador_CPU = document.getElementById ("marcador_CPU");
let mostrarEmpates = document.getElementById ("mostrarEmpates");
let mostrarRondas = document.getElementById ("mostrarRondas");

// Definiendo elementos del DOM (Botones).

let boton_piedra = document.getElementById ("boton_piedra").addEventListener("click", JugadorEligePiedra);
let boton_papel = document.getElementById ("boton_papel").addEventListener("click", JugadorEligePapel);
let boton_tijeras = document.getElementById ("boton_tijeras").addEventListener("click", JugadorEligeTijeras);

// Comenzamos declarando variables de Puntaje Global que arrancan en 0.

let puntajeJugador = 1;
let puntajeCPU = 1;
let rondas = 1;
let empates = 1;

function TerminarJuego () {

    if (puntajeJugador >= 11 && puntajeCPU < 11 ) {


        alert (jugadorGanaJuego);
        location.reload();

    } 

    else if (puntajeCPU >= 11 && puntajeJugador < 11 ) {


        alert (CPUGanaJuego);
        location.reload();

    } 

}


// Funciones de cada boton (Jugadas).

// Piedra

function JugadorEligePiedra (CPUElige) {

    CPUElige = CPUJuega ();

    if ((CPUElige) === "Piedra") {

        jugadaCPU.innerText = "Piedra ✊"
        resultadoRonda.innerText = empateRonda;
        mostrarEmpates.innerText = empates++ +" Empates.";
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()


    };

    if ((CPUElige) === "Papel") {

        jugadaCPU.innerText = "Papel 🖐️"
        resultadoRonda.innerText = CPUGanaRonda;
        marcador_CPU.innerText = puntajeCPU++;
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()


    };

    if ((CPUElige) === "Tijeras") {

        jugadaCPU.innerText = "Tijeras ✌️"
        resultadoRonda.innerText = jugadorGanaRonda;
        marcador_jugador.innerText = puntajeJugador++;
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()

    };

};

// Papel

function JugadorEligePapel (CPUElige) {

    CPUElige = CPUJuega ();

    if ((CPUElige) === "Piedra") {

        jugadaCPU.innerText = "Piedra ✊"
        resultadoRonda.innerText = jugadorGanaRonda;
        marcador_jugador.innerText = puntajeJugador++;
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()


    };

    if ((CPUElige) === "Papel") {

        jugadaCPU.innerText = "Papel 🖐️"
        resultadoRonda.innerText = empateRonda;
        mostrarEmpates.innerText = empates++ +" Empates.";
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()


    };

    if ((CPUElige) === "Tijeras") {

        jugadaCPU.innerText = "Tijeras ✌️"
        resultadoRonda.innerText = CPUGanaRonda;
        marcador_CPU.innerText = puntajeCPU++;
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()

    };

};

// Tijeras

function JugadorEligeTijeras (CPUElige) {

    CPUElige = CPUJuega ();

    if ((CPUElige) === "Piedra") {

        jugadaCPU.innerText = "Piedra ✊"
        resultadoRonda.innerText = CPUGanaRonda;
        marcador_CPU.innerText = puntajeCPU++;
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()


    };

    if ((CPUElige) === "Papel") {

        jugadaCPU.innerText = "Papel 🖐️"
        resultadoRonda.innerText = jugadorGanaRonda;
        marcador_jugador.innerText = puntajeJugador++;
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()


    };

    if ((CPUElige) === "Tijeras") {

        jugadaCPU.innerText = "Tijeras ✌️"
        resultadoRonda.innerText = empateRonda;
        mostrarEmpates.innerText = empates++ +" Empates.";
        mostrarRondas.innerText = rondas++ +" Rondas.";
        TerminarJuego ()

    };

};




// Guardamos en variables los mensajes de victoria/derrota/empate para cada ronda.

let jugadorGanaRonda = "El jugador gana esta ronda.";
let CPUGanaRonda = "La IA gana esta ronda.";
let empateRonda = "Esta ronda queda en empate.";
let jugadorGanaJuego = "Le has ganado a la IA. Felicitaciones.";
let CPUGanaJuego = "La IA te ha ganado. Mejor suerte para la proxima.";

// Funcion de simulacion de jugada del CPU (Random)

function CPUJuega () {

    let opciones = ["Piedra", "Papel", "Tijeras"];
    let random = Math.floor (Math.random () * opciones.length);
    console.log ("La IA elige " +opciones [random]+ ".");
    return opciones [random];

};

