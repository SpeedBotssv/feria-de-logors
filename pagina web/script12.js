document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Reemplaza con tus propios valores de EmailJS
    const serviceID = 'service_dertdzf';
    const templateID = 'template_alnrc2v';
    const userID = 'H-UFSM-0fzLtyQ9IU';

    const templateParams = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('form-message').textContent = 'Mensaje enviado exitosamente.';
            document.getElementById('form-message').classList.remove('hidden');
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('form-message').textContent = 'Hubo un problema al enviar el mensaje.';
            document.getElementById('form-message').classList.remove('hidden');
        });
});