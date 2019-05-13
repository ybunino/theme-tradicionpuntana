function validar() {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var mensaje = document.getElementById("mensaje");

    if(nombre.value == 0) {
        alert('Por favor ingrese su nombre');
        event.preventDefault();
        return;
    }

    if(email.value == 0) {
        alert('Por favor ingrese su email');
        event.preventDefault();
        return;
    }

    if(telefono.value == 0) {
        alert('Por favor ingrese su telefono');
        event.preventDefault();
        return;
    }

    if(mensaje.value == 0) {
        alert('Por favor ingrese su mensaje');
        event.preventDefault();
        return;
    }


}


function validarSuscripcion() {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");

    if(nombre.value == 0) {
        alert('Por favor ingrese su nombre');
        event.preventDefault();
        return;
    }

    if(email.value == 0) {
        alert('Por favor ingrese su email');
        event.preventDefault();
        return;
    }

    alert('GRACIAS por suscribirse');
}
