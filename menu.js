/*Uso esto para administrar lo botones "Agregar al Carro"*/
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', agregarAlCarro);
});

/*Esta función me sirve para agregar los productos al carrito de compras una vez que pincho el botón "Agregar al Carro"*/
function agregarAlCarro(event) {
    event.preventDefault();
    const producto = {
        nombre: event.target.parentElement.querySelector('.card-title').innerText,
        precio: parseFloat(event.target.parentElement.querySelector('.precioProducto').innerText)
    };
    agregarProductoAlLocalStorage(producto);
    actualizarCarroDeCompras();
}

/*Esta función me permite agregar producto al localStorage*/
function agregarProductoAlLocalStorage(producto) {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
}

/*Uso esta función para actualizar el contenido del carro de compras*/
function actualizarCarroDeCompras() {
    const listaProductos = document.getElementById('lista-productos');
    const totalElemento = document.getElementById('total');
    const mensajeCarroVacio = document.getElementById('mensaje-carro-vacio');
    const carritoLink = document.getElementById('carrito-link');
    listaProductos.innerHTML = '';
    let total = 0;
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    if (productos.length === 0) {
        mensajeCarroVacio.textContent = 'Añade algo nuevamente al carro, lo disfrutarás.';
        totalElemento.textContent = 'TOTAL: $0.00';
    } else {
        mensajeCarroVacio.textContent = '';
        productos.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaProductos.appendChild(li);
            total += producto.precio;
        });
        totalElemento.textContent = `TOTAL: $${total}`;
    }
    carritoLink.textContent = `Total: $${total}`
}

/*Cargar el carro de compras al cargar la página*/
window.addEventListener('load', () => {
    if (localStorage.getItem('productos')) {
        actualizarCarroDeCompras();
    }
});

/*Vaciar el carro de compras al oprimir el botón con el mismo nombre*/
document.getElementById('vaciar-carro').addEventListener('click', vaciarCarro);

function vaciarCarro() {
    localStorage.removeItem('productos');
    actualizarCarroDeCompras();
}

/*Con esta función se esconde o muestra un mensaje cuando el carro se encuentre inicialmente vacio*/
function mostrarMensajeCarroVacio() {
    const mensajeCarroVacio = document.getElementById('mensaje-carro-vacio');
    const productosCarro = JSON.parse(localStorage.getItem('productosCarro')) || [];

    if (productosCarro.length === 0) {
        mensajeCarroVacio.style.display = 'block';
    } else {
        mensajeCarroVacio.style.display = 'none';
    }
}

mostrarMensajeCarroVacio();



document.getElementById('continuarPedido').addEventListener('click', () => {

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Serás dirigido a tu carrito de compras",
        showConfirmButton: false,
        timer: 1500
    }).then(function () {
        window.location.href = "carro.html";
    });
});
