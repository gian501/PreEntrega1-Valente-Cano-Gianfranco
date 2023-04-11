let seleccion = prompt("Hola, desea realizar una compra?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por Favor ingresa una respuesta correcta: si o no")
    seleccion = prompt("Hola, desea realizar una compra?")
}

const cantidad = (cant, precio) => {
  return cant * precio
}
if (seleccion == "si"){
    alert("Redireccionando al catalogo de productos. Seleccione una opcion (solo en Números)");
    let catalogo = Number(prompt( "0). Salir 1).Harina $300 2).Coca-cola 2.25L $650 3).Cerveza (pack) $2500 4).Tabaco $5500 "))
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
        catalogo = Number(prompt( "0). Salir 1).Harina $300 2).Coca-Cola $650 3).Cerveza (pack x&) $2500 4).Tabaco $5500 "))
    }
    
    alert("El total de la compra es de: " + total)
    console.log(total);

    const envio = () => {
      if (total <= 0 ) {
        alert("Usted no sumo nada al carrito.Por lo cual no hay gastos de envio")
      }else if (total > 5000){
        alert("Al ser tu compra mayor a $5.000. El envio es GRATIS!!. ")
      }else {
        alert("Tu compra es inferior a $5.000. Por lo tanto, se te cobrara un recargo de $500 en la entrega. ")
      }
  }


  const metodo_pago = () => {
    let Pago_TC_TD = prompt("Ingrese el metodo de pago, Tarjeta de Credito(se le sumara un interes del 21%(TC) o Tarjeta de Debito(se le hara un descuento de 100$(TD))." )
    if (Pago_TC_TD == "Tarjeta de Credito"||Pago_TC_TD == "TC") {
      total;
      let tc_iva= total + (total *= 0.21)
      alert("El 21% del total de la compra es de: " + total);
      alert("El total de la compra con 21% incluido es: " + tc_iva);
    }else if ( Pago_TC_TD == "Tarjeta de Debito"||Pago_TC_TD == "TD") {
      total -= 100
      alert("Tenes un descuento de $100, el total es: " + total)
      alert("El total de la compra es de: " + total)
    }
  }

  envio()

  if (total >= 100){
    metodo_pago()
  }else{
    alert("Usted no sumo nada al carrito.")
  }





}else seleccion == "no"
    alert("Gracias por su visita.")
    










  

