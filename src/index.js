// esta funcion comprueba si un elemento esta visible en pantalla
function isVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página...
window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
	window.addEventListener('scroll', (ev1) => {
                // y a todos los elementos con la clase paused...
		document.querySelectorAll(".paused").forEach(elm => {
			if (isVisible(elm)) // que sean visibles...
				elm.classList.remove("paused"); // les quitamos la clase paused
		})
	});
});


// CARRITO
const productos = {
    product1: { nombre: "Pizza Javascript", precio: 9.90 },
    product2: { nombre: "Pizza Css", precio: 9.90 },
    product3: { nombre: "Pizza Html", precio: 9.90 },
    product4: { nombre: "Pizza React", precio: 9.90 },
    product5: { nombre: "Pizza Node", precio: 9.90 },
    product6: { nombre: "Pizza Php", precio: 9.90 },
    product7: { nombre: "Pizza Laravel", precio: 9.90 },
    product8: { nombre: "Pizza Linux", precio: 9.90 }
};

function addToCart(productKey) {
    const cartCount = document.getElementById('counter');
    const cartTotal = document.getElementById('total-price');
    const sidebarCartCount = document.getElementById('sidebar-cart-count');
    const sidebarCartTotal = document.getElementById('sidebar-cart-total');
    const cartItems = document.getElementById('cart-items');
    

    // Añade el producto al carrito
    const product = productos[productKey];
    const currentCount = parseInt(cartCount.innerText);
    const newCount = currentCount + 1;
    cartCount.innerText = newCount;

    // Actualiza el precio total
    let currentTotal = parseFloat(cartTotal.innerText.replace('€', '').replace(',', '.'));
    const newTotal = currentTotal + product.precio;
    cartTotal.innerText = newTotal.toFixed(2) + '€';

    // Actualiza la lista de productos en el desplegable lateral
    const existingItem = document.querySelector(`#cart-items .cart-item[data-key="${productKey}"]`);
    if (existingItem) {
        existingItem.querySelector('.quantity').innerText = parseInt(existingItem.querySelector('.quantity').innerText) + 1;
    } else {
        const itemHTML = `
      <div class="cart-item" data-key="${productKey}">
        <p>${product.nombre} <span class="quantity">1</span></p>
        <p class="price">${product.precio.toFixed(2)}€</p>
        <button class="remove-item" onclick="removeFromCart('${productKey}')">x</button>
      </div>`;
        cartItems.innerHTML += itemHTML;
    }

    // Actualiza el total y la cantidad en el desplegable lateral
    sidebarCartCount.innerText = newCount;

    // Recalcula el precio total tomando en cuenta la cantidad de cada producto
    const cartItemElements = document.querySelectorAll('#cart-items .cart-item');
    currentTotal = 0;
    cartItemElements.forEach(item => {
        const price = parseFloat(item.querySelector('.price').innerText.replace('€', '').replace(',', '.'));
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        currentTotal += price * quantity;
    });
    sidebarCartTotal.innerText = currentTotal.toFixed(2) + '€';
}

//elimina un producto del carrito
function removeFromCart(productKey) {
    const cartItem = document.querySelector(`#cart-items .cart-item[data-key="${productKey}"]`);
    if (cartItem) {
        const cartCount = document.getElementById('counter');
        const cartTotal = document.getElementById('total-price');
        const sidebarCartCount = document.getElementById('sidebar-cart-count');
        const sidebarCartTotal = document.getElementById('sidebar-cart-total');

        // Obtener la cantidad y el precio del producto que se va a eliminar
        const quantity = parseInt(cartItem.querySelector('.quantity').innerText);
        const price = parseFloat(cartItem.querySelector('.price').innerText.replace('€', '').replace(',', '.'));

        // Actualizar el contador y el precio total del carrito
        const currentCount = parseInt(cartCount.innerText);
        const newCount = currentCount - 1
        cartCount.innerText = newCount;

        const currentTotal = parseFloat(cartTotal.innerText.replace('€', '').replace(',', '.'));
        const newTotal = currentTotal - price;
        cartTotal.innerText = newTotal.toFixed(2) + '€';

        // Actualizar el contador y el precio total en el desplegable lateral
        sidebarCartCount.innerText = newCount;
        sidebarCartTotal.innerText = newTotal.toFixed(2) + '€';

        // Si hay más de un producto del mismo tipo en el carrito, solo disminuir la cantidad en uno
        if (quantity > 1) {
            cartItem.querySelector('.quantity').innerText = quantity - 1;
        } else {
            // Si solo hay un producto del tipo, eliminar el elemento del carrito del DOM
            cartItem.remove();
        }
    }
}



// Añade listeners de clic para cada botón de "Añadir"
document.getElementById('add1').addEventListener('click', function () {
    addToCart('product1');
});
document.getElementById('add2').addEventListener('click', function () {
    addToCart('product2');
});
document.getElementById('add3').addEventListener('click', function () {
    addToCart('product3');
});
document.getElementById('add4').addEventListener('click', function () {
    addToCart('product4');
});
document.getElementById('add5').addEventListener('click', function () {
    addToCart('product5');
});
document.getElementById('add6').addEventListener('click', function () {
    addToCart('product6');
});
document.getElementById('add7').addEventListener('click', function () {
    addToCart('product7');
});
document.getElementById('add8').addEventListener('click', function () {
    addToCart('product8');
});

function openCart() {
    document.getElementById("cart-sidebar").style.width = "300px";
}

function closeCart() {
    document.getElementById("cart-sidebar").style.width = "0";
}



/*
const products = document.getElementsByClassName('product-container')
const botones = document.getElementsByTagName("button")

botones[0].addEventListener("click", () => { 
const carritoDiv = document.getElementById ("divcarrito")
const newProduct = document.createElement('div')
newProduct.innerText = products[0].getAttribute('#product-title')
//console.log(newProduct)
carritoDiv.appendChild(newProduct)
})
*/
	





//console.log(products)

/*
for (i=0;i<botones.length;i++){
    if (botones[i].addEventListener("click","nada")){
        console.log("BOTON1")
    }
}
*/
/*
for (i=0;i< products.length;i++){
    console.log (products[i].innerHTML)
}
*/
//console.log(botones)

//botones.addEventListener("click", addCarrito)


/*
function addCarrito (product,price){
    console.log("click")
}
*/

//console.log(products)



