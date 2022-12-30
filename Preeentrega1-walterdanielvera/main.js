let precioBase = document.getElementById("precioBase");
let gastosEnvio = document.getElementById("gastosEnvio");
let precioFinal = document.getElementById("precioFinal");

function calcularPrecioFinal() {
    let total = +precioBase.value + +gastosEnvio.value;
    precioFinal.value = total;
    alert("El precio final es: " + total);
    console.log(total);
}
