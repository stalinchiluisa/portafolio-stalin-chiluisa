console.log("JavaScript cargado correctamente");

const botonTema = document.getElementById("boton-tema");

function cargarTemaGuardado() {
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");
        botonTema.textContent = "☀️ Modo claro";
    }
}

function cambiarTema() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema", "oscuro");
        botonTema.textContent = "☀️ Modo claro";
    } else {
        localStorage.setItem("tema", "claro");
        botonTema.textContent = "🌙 Modo oscuro";
    }
}

botonTema.addEventListener("click", cambiarTema);

cargarTemaGuardado();
const botonSobreMi = document.getElementById("boton-sobre-mi");
const contenidoSobreMi = document.getElementById("contenido-sobre-mi");

function alternarSobreMi() {
    const estaOculto = contenidoSobreMi.classList.toggle("oculto");

    if (estaOculto) {
        botonSobreMi.textContent = "Mostrar información";
    } else {
        botonSobreMi.textContent = "Ocultar información";
    }
}

botonSobreMi.addEventListener("click", alternarSobreMi);
