var estadoCelular = "apagado";
var celular = document.getElementById("pantalla");



function controlarCelular() {
    if (estadoCelular == "apagado") {
        estadoCelular = "encendido";
        celular.classList.add("active");
    } else {
        estadoCelular = "apagado";
        celular.classList.remove("active");
    }
}
