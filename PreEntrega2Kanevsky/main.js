document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        let peso = document.getElementById("peso").value;
        const objetivo = document.getElementById("objetivo").value;


        if (peso < 0) {
            alert("El peso no puede ser menor que 0");
            return; 
        }

        console.log("Correo electrónico:", email);
        console.log("Contraseña:", password);
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Peso:", peso);
        console.log("Objetivo de Salud:", objetivo);

    });
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}