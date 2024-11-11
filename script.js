// Capturar el formulario y escuchar el evento de envío
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío automático

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Mostrar un mensaje de confirmación en consola (o enviar los datos en una implementación real)
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    // Resetear el formulario después de enviar
    document.getElementById('formulario-contacto').reset();

    // Mostrar un mensaje de agradecimiento
    alert("Gracias por contactarnos, " + nombre + ". Pronto nos pondremos en contacto contigo.");
});
