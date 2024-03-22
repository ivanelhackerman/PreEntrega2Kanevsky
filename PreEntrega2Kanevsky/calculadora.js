document.addEventListener("DOMContentLoaded", function() {
    const imcForm = document.getElementById("imc-form");
    const resultadoIMC = document.getElementById("resultado-imc");

    imcForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);

        const imc = calcularIMC(altura, peso);

        resultadoIMC.innerHTML = `Tu IMC es: ${imc.toFixed(2)} (${interpretarIMC(imc)})`;
    });

    function calcularIMC(altura, peso) {
        return peso / ((altura / 100) * (altura / 100));
    }

    function interpretarIMC(imc) {
        if (imc < 18.5) {
            return "Peso bajo";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}