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
const formularioContacto = document.getElementById("formulario-contacto");
const campoNombre = document.getElementById("nombre");
const campoCorreo = document.getElementById("correo");
const campoMensaje = document.getElementById("mensaje");
const mensajeFormulario = document.getElementById("mensaje-formulario");

function validarFormulario(evento) {
    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const correo = campoCorreo.value.trim();
    const mensaje = campoMensaje.value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        mensajeFormulario.textContent = "Por favor, completa todos los campos.";
        mensajeFormulario.classList.remove("mensaje-exito");
        mensajeFormulario.classList.add("mensaje-error");
    } else {
        mensajeFormulario.textContent = "Mensaje enviado correctamente.";
        mensajeFormulario.classList.remove("mensaje-error");
        mensajeFormulario.classList.add("mensaje-exito");

        formularioContacto.reset();
    }
}

formularioContacto.addEventListener("submit", validarFormulario);

