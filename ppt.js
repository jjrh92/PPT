// Comenzamos declarando elementos del DOM.

// Scoreboard - Puntaje

let puntaje = document.getElementById ("puntaje");

// Opciones del jugador (Piedra, papel ó tijeras)

let jugador_elige_piedra = document.getElementById ("jugador_elige_piedra");
let jugador_elige_papel = document.getElementById ("jugador_elige_papel");
let jugador_elige_tijeras = document.getElementById ("jugador_elige_tijeras");

// Declaramos eventlisteners para el click en los 3 botones.

jugador_elige_piedra.addEventListener ("click", jugadorElige ());
jugador_elige_papel.addEventListener ("click", jugadorElige ());
jugador_elige_tijeras.addEventListener ("click", jugadorElige ());

// Funciones para elecciones del jugador.

function jugadorElige (val) {

    jugador_elige_piedra.onclick = function () {

        console.log ("El jugador ha elegido Piedra")
        return val = "piedra";

    };

    jugador_elige_papel.onclick = function () {

        console.log ("El jugador ha elegido Papel")
        return val = "papel";
        
    };

    jugador_elige_tijeras.onclick = function () {

        console.log ("El jugador ha elegido Tijeras")
        return val = "tijeras";
        
    };

}

// Comenzamos declarando variables de Puntaje Global que arrancan en 0.

let puntajeJugador = 0;
let puntajeCPU = 0;
let empates = 0;

// Función de simulacion de la jugada del CPU/Computadora. Tomando un valor aleatorio entre 3 opciones disponibles.

function JuegaCPU () {

    let opciones = ["Piedra", "Papel", "Tijeras"];
    let random = Math.floor (Math.random () * opciones.length);
    return opciones [random];

}

// Guardamos en variables los mensajes de victoria/derrota/empate para cada ronda.

let jugadorGanaRonda = "El jugador gana esta ronda.";
let CPUGanaRonda = "El CPU gana esta ronda.";
let empateRonda = "Esta ronda queda en empate";

// Función de cada ronda del juego, se retorna un mensaje/string guardado previamente en variables definidas en lineas anteriores.

function EmpezarRonda (jugadorElige, seleccionCPU) {

    if (jugadorElige == "piedra" && seleccionCPU == "Papel") {
        
        return CPUGanaRonda;
        
    } 
    
    else if (jugadorElige == "piedra" && seleccionCPU == "Piedra") {

        return empateRonda;

    }

    else if (jugadorElige == "piedra" && seleccionCPU == "Tijeras") {

        return jugadorGanaRonda;
        
    }

    else if (jugadorElige == "papel" && seleccionCPU == "Papel") {

        return empateRonda;

    }

    else if (jugadorElige == "papel" && seleccionCPU == "Piedra") {

        return jugadorGanaRonda;

    }

    else if (jugadorElige == "papel" && seleccionCPU == "Tijeras") {

        return CPUGanaRonda;

    }

    else if (jugadorElige == "tijeras" && seleccionCPU == "Pïedra") {

        return CPUGanaRonda;

    }

    else if (jugadorElige == "tijeras" && seleccionCPU == "Papel") {

        return jugadorGanaRonda;

    }

    else if (jugadorElige == "tijeras" && seleccionCPU == "Tijeras") {

        return empateRonda;

    }
    
}
