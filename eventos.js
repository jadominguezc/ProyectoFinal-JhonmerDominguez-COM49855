document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formularioEvento form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); /*Con esto, evito que el formulario se envíe*/

        /* Para obtener los valores de los campos del formulario que están en mi HTML*/
        const nombreCliente = document.getElementById('nombreCliente').value;
        const empresaCliente = document.getElementById('empresaCliente').value;
        const emailCliente = document.getElementById('emailCliente').value;
        const telefonoCliente = document.getElementById('telefonoCliente').value;
        const requerimientoCliente = document.getElementById('requerimientoCliente').value;
        const aceptarContacto = document.getElementById('aceptarContacto').checked;

        /*Lo uso para crear un objeto con los datos que tengo en el form*/
        const evento = {
            nombreCliente: nombreCliente,
            empresaCliente: empresaCliente,
            emailCliente: emailCliente,
            telefonoCliente: telefonoCliente,
            requerimientoCliente: requerimientoCliente,
            aceptarContacto: aceptarContacto
        };

        // Ahora convierto el objeto en JSON
        const eventoJSON = JSON.stringify(evento);

        // Con esto almaceno los datos en el LocalStorage
        localStorage.setItem('evento', eventoJSON);

        // Limpio el formulario
        formulario.reset();

        // Muestro mensaje al finalizar el proceso de captación de información del form
        const mensajeExito = document.createElement('p');
        mensajeExito.textContent = '¡Tu solicitud de evento ha sido enviada con éxito!';
        formulario.appendChild(mensajeExito);
    });
});