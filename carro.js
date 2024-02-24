const nombreDelCliente = document.querySelector('#nombreDelCliente');
const correoDelCliente = document.querySelector('#correoDelCliente');
const telefonoDelCliente = document.querySelector('#telefonoDelCliente');
const direccionDelCliente = document.querySelector('#direccionDelCliente');
const fotoDelCliente = document.querySelector('#fotoDelCliente');

const generarDataCliente = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    fotoDelCliente.src = datos.picture.medium;
    nombreDelCliente.textContent = datos.name.first + " " + datos.name.last;
    correoDelCliente.textContent = datos.email;
    telefonoDelCliente.textContent = datos.phone;
    direccionDelCliente.textContent = datos.location.street.number + " " + datos.location.street.name + ", " +datos.location.city;
    }

document.addEventListener('DOMContentLoaded', generarDataCliente);





document.getElementById('btn-pagar').addEventListener('click', ()=>{
    Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Plataforma de pago online temporalmente fuera de servicio, contáctanos a nuestro whatsapp",
        footer: '<a href="https://api.whatsapp.com/send?phone=56952012910">+56952012910</a>'
      });
})