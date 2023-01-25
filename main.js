// Comenzamos declarando variables de Puntaje Global que arrancan en 0.

let puntajeJugador = 0;
let puntajeCPU = 0;
let empates = 0;

// Función de simluacion de la jugada del CPU/Computadora. Tomando un valor aleatorio entre 3 opciones disponibles.

function JuegaCPU () {

    let opciones = ["Piedra", "Papel", "Tijeras"];
    let random = Math.floor (Math.random () * opciones.length);
    return opciones [random];

}

// Guardamos en variables los mensajes de victoria/derrota/empate para cada ronda.

let jugadorGanaRonda = "El jugador gana esta ronda.";
let CPUGanaRonda = "El CPU gana esta ronda.";
let empateRonda = "Esta ronda queda en empate";

let seleccionInvalida = "Solo debe escribir piedra, papel ó tijeras.";

let jugadorGanaJuego = "El jugador ha ganado el juego, felicitaciones.";
let CPUGanaJuego = "El CPU ha ganado el juego, suerte para la proxima.";
let empateJuego = "Este juego queda en empate";

// Función de cada ronda del juego, se retorna un mensaje/string guardado previamente en variables definidas en lineas anteriores.

function EmpezarRonda (seleccionJugador, seleccionCPU) {

    if (seleccionJugador == "piedra" && seleccionCPU == "Papel") {

        return CPUGanaRonda;
        
    } 
    
    else if (seleccionJugador == "piedra" && seleccionCPU == "Piedra") {

        return empateRonda;

    }

    else if (seleccionJugador == "piedra" && seleccionCPU == "Tijeras") {

        return jugadorGanaRonda;
        
    }

    else if (seleccionJugador == "papel" && seleccionCPU == "Papel") {

        return empateRonda;

    }

    else if (seleccionJugador == "papel" && seleccionCPU == "Piedra") {

        return jugadorGanaRonda;

    }

    else if (seleccionJugador == "papel" && seleccionCPU == "Tijeras") {

        return CPUGanaRonda;

    }

    else if (seleccionJugador == "tijeras" && seleccionCPU == "Pïedra") {

        return CPUGanaRonda;

    }

    else if (seleccionJugador == "tijeras" && seleccionCPU == "Papel") {

        return jugadorGanaRonda;

    }

    else if (seleccionJugador == "tijeras" && seleccionCPU == "Tijeras") {

        return empateRonda;

    }
    
    else {

        return seleccionInvalida;

    }
    
}

// En esta funcion definimos la logica del puntaje, limite de rondas y validacion numerica.

function Juego () {

    for (let ronda = 0; ronda < 5; ronda++) {

        const seleccionJugador = prompt ("Seleccione su jugada entre piedra, papel ó tijeras?").toLowerCase();
        const seleccionCPU = JuegaCPU ();
        let resultadoRonda = EmpezarRonda (seleccionJugador, seleccionCPU);
        console.log (resultadoRonda);

    }

}

Juego ();