const colores = ["rojo", "verde", "azul", "amarillo"];
let secuencia = [];
let secuenciaJugador = [];
let puntaje = 0;
let nombreJugador = "";

document.getElementById("iniciarJuego").addEventListener("click", () => {
    nombreJugador = document.getElementById("nombreJugador").value;
    if (nombreJugador === "") {
    alert("Ingresa tu nombre para empezar.");
    return;
    }
    document.getElementById("jugadorActual").textContent = nombreJugador;
    document.getElementById("menu").style.display = "none";
    document.getElementById("juego").style.display = "block";
    reiniciarJuego();
    nuevaRonda();
    });