function JuegaCPU () {

    let opciones = ["Piedra", "Papel", "Tijeras"];
    let random = Math.floor (Math.random() * opciones.length);
    return opciones [random];

}


function EmpezarRonda (seleccionJugador, seleccionCPU) {

    if (seleccionJugador == "piedra" && seleccionCPU == "Papel") {

        return "Perdiste! El papel le gana a la piedra!";
        
    } 
    
    else if (seleccionJugador == "piedra" && seleccionCPU == "Piedra") {

        return "Empate! Piedras iguales.";

    }

    else if (seleccionJugador == "piedra" && seleccionCPU == "Tijeras") {

        return "Ganaste, Piedra le gana a Tijeras!";
        
    }

    else if (seleccionJugador == "papel" && seleccionCPU == "Papel") {

        return "Empate! Papeles iguales.";

    }

    else if (seleccionJugador == "papel" && seleccionCPU == "Piedra") {

        return "Ganaste, Papel le gana a Piedra!";

    }

    else if (seleccionJugador == "papel" && seleccionCPU == "Tijeras") {

        return "Perdiste, El papel es cortado por las Tijeras!";

    }

    else if (seleccionJugador == "tijeras" && seleccionCPU == "Pïedra") {

        return "Perdiste, Tijeras es aplastada por la Piedra.";

    }

    else if (seleccionJugador == "tijeras" && seleccionCPU == "Papel") {

        return "Ganaste! Tijeras corta el Papel.";

    }

    else if (seleccionJugador == "tijeras" && seleccionCPU == "Tijeras") {

        return "Empate! Tijeras iguales.";

    }
    
    else {

        return "Selección Invalida.";

    }
    
}

function Juego () {

    for (let ronda = 0; ronda < 5; ronda++) {

        const seleccionJugador = prompt ("Seleccione su jugada entre piedra, papel ó tijeras?").toLowerCase();
        const seleccionCPU = JuegaCPU ();
        console.log (EmpezarRonda (seleccionJugador, seleccionCPU));
        
    }

}

Juego ();