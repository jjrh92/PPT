// Inicio

// Definiendo elementos del DOM para la interactividad.

let jugadaCPU = document.getElementById("jugadaCPU");
let resultadoRonda = document.getElementById("resultadoRonda");
let marcador_jugador = document.getElementById("marcador_jugador");
let marcador_CPU = document.getElementById("marcador_CPU");
let mostrarEmpates = document.getElementById("mostrarEmpates");
let mostrarRondas = document.getElementById("mostrarRondas");

// Definiendo elementos del DOM (Botones que el usuario presiona).

let boton_piedra = document
  .getElementById("boton_piedra")
  .addEventListener("click", JugadorEligePiedra);
let boton_papel = document
  .getElementById("boton_papel")
  .addEventListener("click", JugadorEligePapel);
let boton_tijeras = document
  .getElementById("boton_tijeras")
  .addEventListener("click", JugadorEligeTijeras);

// Comenzamos declarando variables de Puntajes/Rondas/Empates necesarias para la logica del juego.

let puntajeJugador = 1;
let puntajeCPU = 1;
let rondas = 1;
let empates = 1;

function TerminarJuego() {
  if (puntajeJugador >= 11 && puntajeCPU < 11) {
    alert(jugadorGanaJuego);
    location.reload();
  } else if (puntajeCPU >= 11 && puntajeJugador < 11) {
    alert(CPUGanaJuego);
    location.reload();
  }
}

// Funciones de cada boton (Jugadas).

// Sí el jugador elige Piedra.

function JugadorEligePiedra(CPUElige) {
  CPUElige = CPUJuega();

  if (CPUElige === "Rock") {
    jugadaCPU.innerText = "Rock ✊";
    resultadoRonda.innerText = empateRonda;
    mostrarEmpates.innerText = empates++ + " Ties.";
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }

  if (CPUElige === "Paper") {
    jugadaCPU.innerText = "Paper 🖐️";
    resultadoRonda.innerText = CPUGanaRonda;
    marcador_CPU.innerText = puntajeCPU++;
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }

  if (CPUElige === "Scissors") {
    jugadaCPU.innerText = "Scissors ✌️";
    resultadoRonda.innerText = jugadorGanaRonda;
    marcador_jugador.innerText = puntajeJugador++;
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }
}

// Sí el jugador elige Papel.

function JugadorEligePapel(CPUElige) {
  CPUElige = CPUJuega();

  if (CPUElige === "Rock") {
    jugadaCPU.innerText = "Rock ✊";
    resultadoRonda.innerText = jugadorGanaRonda;
    marcador_jugador.innerText = puntajeJugador++;
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }

  if (CPUElige === "Paper") {
    jugadaCPU.innerText = "Paper 🖐️";
    resultadoRonda.innerText = empateRonda;
    mostrarEmpates.innerText = empates++ + " Ties.";
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }

  if (CPUElige === "Scissors") {
    jugadaCPU.innerText = "Scissors ✌️";
    resultadoRonda.innerText = CPUGanaRonda;
    marcador_CPU.innerText = puntajeCPU++;
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }
}

// Sí el jugador elige Tijeras.

function JugadorEligeTijeras(CPUElige) {
  CPUElige = CPUJuega();

  if (CPUElige === "Rock") {
    jugadaCPU.innerText = "Rock ✊";
    resultadoRonda.innerText = CPUGanaRonda;
    marcador_CPU.innerText = puntajeCPU++;
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }

  if (CPUElige === "Paper") {
    jugadaCPU.innerText = "Paper 🖐️";
    resultadoRonda.innerText = jugadorGanaRonda;
    marcador_jugador.innerText = puntajeJugador++;
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }

  if (CPUElige === "Scissors") {
    jugadaCPU.innerText = "Scissors ✌️";
    resultadoRonda.innerText = empateRonda;
    mostrarEmpates.innerText = empates++ + " Ties.";
    mostrarRondas.innerText = rondas++ + " Rounds.";
    TerminarJuego();
  }
}

// Guardamos en variables los mensajes de victoria/derrota/empate para cada ronda y asi ahorrar tiempo.

let jugadorGanaRonda = "Player wins this round.";
let CPUGanaRonda = "AI wins this round.";
let empateRonda = "Tied! Round ends with a Tie!";
let jugadorGanaJuego = "You have beaten the AI. Congratulations.";
let CPUGanaJuego = "The AI has beaten you. Better luck next time.";

// Funcion de simulacion de jugada del CPU (Random).

function CPUJuega() {
  let opciones = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * opciones.length);
  console.log("AI chooses " + opciones[random] + ".");
  return opciones[random];
}

// Fin

// v2.1.0.
