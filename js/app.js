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
            unidades= Number(prompt("Su producto seleccionado es Harina, indique la cantidad: "))
            total += cantidad(unidades, 300)
            break;
        case 2:
            unidades = Number(prompt("SU producto seleccionado es Coca-Cola, indique la cantidad: "))
            total += cantidad(unidades, 650)
            break;
        case 3:
            unidades = Number(prompt("Su producto seleccionado es Cerveza (pack), indique la cantidad: "))
            total += cantidad(unidades, 2500)
            break;
        case 4:
            unidades = Number(prompt("Su producto seleccionado es Tabaco, indique la cantidad: "))
            total += cantidad(unidades, 5500)
            break;
        default:
            break;
    
      }
        catalogo = Number(prompt( "0). Salir 1).harina $300 2).coca-cola $650 3).cerveza (pack) $2500 4).tabaco $5500 "))
    }
    
    alert("el total de la compra es de: " + total)
    console.log(total);

    const envio = () => {
      if (total > 5000 ) {
        alert("Al ser tu compra mayor a $5.000. el envio es gratuito ")
      }else {
        alert("tu compra es inferior a $5.000. por lo tanto se te cobrara un recargo de $500 en la entrega ")
      }
  }
    const metodo_pago = () => {
    let Pago_TC_TD = prompt("Ingrese el metodo de pago, Tarjeta de Credito(se le sumara un interes del 21%(TC) o Tarjeta de Debito(se le hara un descuento de 100$(TD))" )
    if (Pago_TC_TD == "Tarjeta de Credito"||Pago_TC_TD == "TC") {
      total;
      let tc_iva= total + (total *= 0.21)
      alert("El 21% del total de la compra es de: " + total);
      alert("El total de la compra con 21% incluido es: " + tc_iva);
    }else if ( Pago_TC_TD == "Tarjeta de Debito"||Pago_TC_TD == "TD") {
      total -= 100
      alert("Tenes un descuento de $100, el total es: " + total)
      alert("el total de la compra es de: " + total)
    }
  }

envio()
metodo_pago()


}else seleccion == "no"
    alert("Gracias por su visita")
    










  

