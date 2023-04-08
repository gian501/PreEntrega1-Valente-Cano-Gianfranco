let seleccion = prompt("Hola, desea realizar una compra?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por Favor ingresa una respuesta correcta: si o no")
    seleccion = prompt("Hola, desea realizar una compra?")
}

if (seleccion == "si"){
    alert("Redireccionando al catalogo de productos");
    let catalogo = Number(prompt( "0). Salir 1).buzo $3000 2).remera $1500 3).jean $5000 4).Zapatillas $6000 "))
    let unidades;
    let total = 0;
    
    
    const cantidad = (cant, precio) => {
      return cant * precio
    }
    
    
    while (catalogo != 0) {
      switch (catalogo) {
        case 1:
            unidades= Number(prompt("el producto seleccionado es buzo, indique la cantidad"))
            total += cantidad(unidades, 3000)
            break;
        case 2:
            unidades = Number(prompt("el producto seleccionado es remera, indique la cantidad"))
            total += cantidad(unidades, 1500)
            break;
        case 3:
            unidades = Number(prompt("el producto seleccionado es jean, indique la cantidad"))
            total += cantidad(unidades, 5000)
            break;
        case 4:
            unidades = Number(prompt("el producto seleccionado es Zapatillas, indique la cantidad"))
            total += cantidad(unidades, 6000)
            break;
        default:
            break;
    
      }
        catalogo = Number(prompt( "0). Salir 1).buzo $3000 2).remera $1500 3).jean $5000 4).Zapatillas $6000"))
    }
    
    alert("el total de la compra es de: " + total)
    console.log(total)

    let Pago_TC_TD = prompt("Ingrese el metodo de pago, Tarjeta de Credito(se le sumara un interes del 1,1)% o Tarjeta de Debito(se le hara un descuento de 1000$).Recuerde " )
    if (Pago_TC_TD == "Tarjeta de Credito"||Pago_TC_TD == "TC") {
      total *= 1.1
      alert("el total de la compra es de: " + total)
      console.log(total);
    }else if ( Pago_TC_TD == "Tarjeta de Debito"||Pago_TC_TD == "TD") {
      total -= 1000
      alert("tenes un descuento de 1000, el total es:" + total)
      alert("el total de la compra es de: " + total)
    }
    const envio = () => {
        if (total >= 10000) {
          alert("El envio es gratuito")
        }else{
          total += 1000
          alert("el costo de envio es de 1000, el total es: " + total)
        }
    }
envio()

}else seleccion == "no"
    alert("Gracias por su visita")
    










  

