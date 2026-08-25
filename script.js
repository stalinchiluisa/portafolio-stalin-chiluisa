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
