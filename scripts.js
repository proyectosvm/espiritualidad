document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado. Gracias por tu mensaje.');
        form.reset();
    });
});
