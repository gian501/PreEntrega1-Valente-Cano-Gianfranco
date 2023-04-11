let seleccion = prompt("Hola, desea realizar una compra?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por Favor ingresa una respuesta correcta: si o no")
    seleccion = prompt("Hola, desea realizar una compra?")
}

const cantidad = (cant, precio) => {
  return cant * precio
}
if (seleccion == "si"){
    alert("Redireccionando al catalogo de productos");
    let catalogo = Number(prompt( "0). Salir 1).harina $300 2).coca-cola $650 3).cerveza (pack) $2500 4).tabaco $5500 "))
    let unidades;
    let total = 0;
    
    
    
    
    while (catalogo != 0) {
      switch (catalogo) {
        case 1:
            unidades= Number(prompt("el producto seleccionado es Harina, indique la cantidad"))
            total += cantidad(unidades, 300)
            break;
        case 2:
            unidades = Number(prompt("el producto seleccionado es Coca-Cola, indique la cantidad"))
            total += cantidad(unidades, 650)
            break;
        case 3:
            unidades = Number(prompt("el producto seleccionado es Cerveza (pack), indique la cantidad"))
            total += cantidad(unidades, 2500)
            break;
        case 4:
            unidades = Number(prompt("el producto seleccionado es Tabaco, indique la cantidad"))
            total += cantidad(unidades, 5500)
            break;
        default:
            break;
    
      }
        catalogo = Number(prompt( "0). Salir 1).harina $300 2).coca-cola $650 3).cerveza (pack) $2500 4).tabaco $5500 "))
    }
    
    alert("el total de la compra es de: " + total)
    console.log(total);

    const metodo_pago = () => {
    let Pago_TC_TD = prompt("Ingrese el metodo de pago, Tarjeta de Credito(se le sumara un interes del 21) o Tarjeta de Debito(se le hara un descuento de 1000$).Recuerde " )
    if (Pago_TC_TD == "Tarjeta de Credito"||Pago_TC_TD == "TC") {
      total;
      let iva= total + (total *= 0.21)
      alert("el 21% del total de la compra es de: " + total);
      alert("el total de la compra con 21%: " + iva);
      console.log(total);
    }else if ( Pago_TC_TD == "Tarjeta de Debito"||Pago_TC_TD == "TD") {
      total -= 1000
      alert("tenes un descuento de 1000, el total es:" + total)
      alert("el total de la compra es de: " + total)
    }
  }


    const envio = () => {
        if (total >= 10000) {
          alert("El envio es gratuito")
        }else{
          total += 1000
          alert("el costo de envio es de 1000, el total es: " + total)
        }
    }
metodo_pago()
envio()

}else seleccion == "no"
    alert("Gracias por su visita")
    










  

