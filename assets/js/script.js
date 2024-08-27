document.addEventListener("DOMContentLoaded", function () {
    // Animación de la barra de navegación
    var navbar = document.querySelector(".navbar-custom");

    window.onscroll = function () {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-shrink");
        } else {
            navbar.classList.remove("navbar-shrink");
        }
    };

    // Animación del botón de envío
    var submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {
        // Cambia el color de fondo al hacer clic
        submitBtn.style.backgroundColor = "#28a745"; // Verde

        // Aplica una transformación para dar una sensación de "presionado"
        submitBtn.style.transform = "scale(0.90)";

        // Vuelve al estado original después de un breve tiempo
        setTimeout(function () {
            submitBtn.style.backgroundColor = "#007bff"; // Azul original
            submitBtn.style.transform = "scale(1)";
        }, 300); // Cambia el tiempo según prefieras
    });

    // Animación al pasar el mouse sobre los elementos de la barra de navegación
    var navLinks = document.querySelectorAll(".navbar-custom .nav-link");

    navLinks.forEach(function (navLink) {
        navLink.addEventListener("mouseover", function () {
            navLink.style.color = "#007bff"; // Cambia el color al pasar el mouse
            navLink.style.transform = "scale(1.1)"; // Aumenta ligeramente el tamaño del texto
           
        });

        navLink.addEventListener("mouseout", function () {
            navLink.style.color = ""; // Vuelve al color original
            navLink.style.transform = "scale(1)"; // Vuelve al tamaño original
            navLink.style.borderRadius = "0"; // Vuelve al borde sin redondear
            navLink.style.backgroundColor = ""; // Vuelve al fondo original
        });
    });
});
