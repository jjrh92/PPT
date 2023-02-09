// UX NEW BRANCH
// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

// Comenzamos declarando elementos del DOM.

let jugador_piedra = document.getElementById ("jugador_piedra");
let jugador_papel = document.getElementById ("jugador_papel");
let jugador_tijeras = document.getElementById ("jugador_tijeras");

// Declaramos eventlisteners y funciones para eleccion del jugador.

jugador_piedra.addEventListener ("click", jugadorEligePiedra);

function jugadorEligePiedra () {

    console.log ("Jugador elige piedra");

};

jugador_papel.addEventListener ("click", jugadorEligePapel);

function jugadorEligePapel () {

    console.log ("Jugador elige papel");

};

jugador_papel.addEventListener ("click", jugadorEligeTijeras);

function jugadorEligeTijeras () {

    console.log ("Jugador elige tijeras");

};