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