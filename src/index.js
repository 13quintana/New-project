const products = document.getElementsByClassName('product-container')

const botones = document.getElementsByTagName("button")



for (i=0;i<botones.length;i++){
    if (botones[i].addEventListener("click","nada")){
        console.log("BOTON1")
    }
}
/*
for (i=0;i< products.length;i++){
    console.log (products[i].innerHTML)
}
*/
//console.log(botones)

//botones.addEventListener("click", addCarrito)



function addCarrito (product,price){
    console.log("click")
}

//console.log(products)
