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

// Guardamos en variables los mensajes de victoria/derrota dirigidos al jugador.

let jugadorGanaJuego = "El jugador ha ganado el juego, felicitaciones por ganarle al CPU/Computadora.";
let CPUGanaJuego = "El CPU ha ganado el juego, suerte para la proxima.";

// En esta funcion definimos la logica del puntaje, limite de rondas y validacion numerica.

function Juego () {

    for (let ronda = 0; ronda < 69; ronda++) {

        const seleccionJugador = prompt ("Momento de elegir:\n¿Piedra, Papel ó Tijeras?").toLowerCase ();
        const seleccionCPU = JuegaCPU ();
        let resultadoRonda = EmpezarRonda (seleccionJugador, seleccionCPU);
        console.log ("Comienza Ronda");
        console.log (resultadoRonda);
        console.log ("Finaliza Ronda");

        if (resultadoRonda === jugadorGanaRonda) {

            puntajeJugador++;
            console.log ("El puntaje del jugador es de " +puntajeJugador+ ".");
            console.log ("              ");

        }

        else if (resultadoRonda === CPUGanaRonda) {

            puntajeCPU++;
            console.log ("El puntaje del CPU/Computadora es de " +puntajeCPU+ ".");
            console.log ("              ");

        }

        else if (resultadoRonda === empateRonda) {
            
            empates++;
            console.log ("Empate numero " +empates);
            console.log ("              ");

        }

        if (puntajeJugador >= 5 || puntajeCPU >= 5) {

            break;
            
        }

    }

    

}

Juego ();

function finalizarJuego () {

    if (puntajeJugador >= 5 && puntajeCPU <= 5) {

        console.log ("El juego ha terminado.");
        console.log (jugadorGanaJuego);
        alert ("Juego terminado.");
    
    }

    else if (puntajeCPU >= 5 && puntajeJugador <= 5) {

        console.log ("El juego ha terminado.");
        console.log (CPUGanaJuego);
        alert ("Juego terminado.");

    }
    
}

finalizarJuego ()



// UX NEW BRANCH