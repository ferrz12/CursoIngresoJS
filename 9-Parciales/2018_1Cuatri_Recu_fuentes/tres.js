function mostrar()
{
    var precio;
    var descuento;
    var precioConDescuento;
    var descuentoEnDinero;
    var IVA = 0.21;
    var precioFinal;

    precio = prompt("Ingrese precio");
    precio = parseInt(precio);

    descuento = prompt("Ingrese porcentaje de descuento");
    descuento = parseInt(descuento);

    precioConDescuento = precio - (precio * (descuento/100));

    alert("El descuento en dinero es: " + descuento + ", el precio con descuento es de: " + precioConDescuento + " el IVA es de: " + IVA);

    precioFinal = precioConDescuento + (precioConDescuento * IVA);

    document.getElementById("elPrecioFinal").value = precioFinal;















   


}
