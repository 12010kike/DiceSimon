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

function nuevaRonda() {
    secuenciaJugador = [];
        if (secuencia.length > 0) {
            puntaje++;
        }
        document.getElementById("puntaje").textContent = puntaje;
        let nuevoColor;
        do {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
        } while (nuevoColor === secuencia[secuencia.length - 1]);
        secuencia.push(nuevoColor);
        mostrarSecuencia();
}

function mostrarSecuencia() {
            secuencia.forEach((color, index) => {
                setTimeout(() => {
                document.getElementById(color).classList.add("activo");
            setTimeout(() => {
            document.getElementById(color).classList.remove("activo");
            }, 500);
            }, (index + 1) * 1000);
            });
}


document.querySelectorAll(".boton-color").forEach(boton => {
                boton.addEventListener("click", (e) => {
                const color = e.target.id;
                reproducirSonido(color);
                secuenciaJugador.push(color);
                if (!verificarSecuencia()) {
                setTimeout(() => {
                juegoTerminado();
                }, 300);
                return;
                }
                if (secuenciaJugador.length === secuencia.length) {
                setTimeout(() => {
                nuevaRonda();
                }, 1000);
                }
                });
});


function verificarSecuencia() {
for (let i = 0; i < secuenciaJugador.length; i++) {
if (secuenciaJugador[i] !== secuencia[i]) {
return false;
}
}
return true;
}

function juegoTerminado() {
    alert("Juego Terminado. Tu puntaje fue: " + puntaje);
    guardarPuntaje();
    document.getElementById("juego").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function guardarPuntaje() {
    let mejoresPuntajes = JSON.parse(localStorage.getItem("mejoresPuntajes")) || [];
    mejoresPuntajes.push({ nombre: nombreJugador, puntaje });
    mejoresPuntajes.sort((a, b) => b.puntaje - a.puntaje);
    localStorage.setItem("mejoresPuntajes", JSON.stringify(mejoresPuntajes.slice(0, 5)));
    mostrarMejoresPuntajes();
    
}

function mostrarMejoresPuntajes() {
    const mejoresPuntajes = JSON.parse(localStorage.getItem("mejoresPuntajes")) || [];
    const listaPuntajes = document.getElementById("mejoresPuntajes");
    listaPuntajes.innerHTML = mejoresPuntajes
        .map(puntaje => `<li>${puntaje.nombre}: ${puntaje.puntaje}</li>`)
        .join('');
}

document.getElementById("reiniciarJuego").addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
    puntaje = 0;
    secuencia = [];
    secuenciaJugador = [];
    document.getElementById("puntaje").textContent = puntaje;
    document.getElementById("juego").style.display = "block";
}

function reproducirSonido(color) {
    const audio = new Audio(document.getElementById(color).dataset.sonido);
    audio.play();
}

mostrarMejoresPuntajes();