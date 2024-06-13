document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formcon');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario

        // Envía el formulario mediante una solicitud AJAX o simplemente redirige a la página de agradecimiento
        window.location.href = 'gratitude.html';
    });
});