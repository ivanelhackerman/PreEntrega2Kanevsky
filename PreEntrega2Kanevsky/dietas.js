document.addEventListener("DOMContentLoaded", function() {
    const dietForm = document.getElementById("diet-form");
    const recetasContainer = document.getElementById("recetas-container");

    dietForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const calorias = document.getElementById("calorias").value;
        const vegano = document.getElementById("vegano").checked;
        const diabetico = document.getElementById("diabetico").checked;
        const vegetariano = document.getElementById("vegetariano").checked;
        const pescetariano = document.getElementById("pescetariano").checked;
        const sinLacteos = document.getElementById("sin-lacteos").checked;

        // basada en las preferencias del usuario y la cantidad de calorías

        //ejemplo
        recetasContainer.innerHTML = ""; 

        function agregarReceta(titulo, ingredientes) {
            const recetaElemento = document.createElement("div");
            recetaElemento.innerHTML = `
                <h2>${titulo}</h2>
                <p>Ingredientes:</p>
                <ul>
                    ${ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                </ul>
            `;
            recetasContainer.appendChild(recetaElemento);
        }

        if (vegano) {
            agregarReceta("Ensalada de Quinoa", ["Quinoa", "Vegetales frescos", "Aguacate", "Aderezo de limón"]);
            agregarReceta("Sopa de Lentejas", ["Lentejas", "Zanahoria", "Apio", "Cebolla", "Caldo de verduras"]);
        }

        if (diabetico) {
            agregarReceta("Pollo a la Parrilla con Vegetales", ["Pechuga de pollo", "Brócoli", "Zanahorias", "Calabacín"]);
            agregarReceta("Ensalada de Espinacas y Fresas", ["Espinacas", "Fresas", "Nueces", "Vinagreta balsámica"]);
        }

        if (vegetariano) {
            agregarReceta("Tacos de Lentejas", ["Lentejas cocidas", "Tortillas de maíz", "Aguacate", "Tomate", "Lechuga"]);
            agregarReceta("Curry de Garbanzos", ["Garbanzos", "Leche de coco", "Pimiento", "Cebolla", "Curry en polvo"]);
        }

        if (pescetariano) {
            agregarReceta("Salmón al Horno con Espárragos", ["Filete de salmón", "Espárragos", "Aceite de oliva", "Sal", "Pimienta"]);
            agregarReceta("Ensalada César con Camarones", ["Camarones", "Lechuga romana", "Pan tostado", "Aderezo César"]);
        }

        if (sinLacteos) {
            agregarReceta("Pollo con Salsa de Aguacate", ["Pechuga de pollo", "Aguacate", "Tomate", "Cilantro"]);
            agregarReceta("Batido de Frutas", ["Fresas", "Plátano", "Leche de almendras", "Hielo"]);
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}