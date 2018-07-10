function mostrar()
{
    var precio, descuento, IVA, calculoIVA, precioFinal;

    precio = prompt("Ingrese precio");
    descuento = prompt("Ingrese descuento");

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    precio = precio - descuento; 

    IVA = 0.21;

    alert("El descuento en dinero es de: " + descuento + ", el precio con descuento es de: " + precio + " y el IVA es de: " + IVA);
    
    calculoIVA = precio * IVA;

    precioFinal = precio + calculoIVA; 

    document.getElementById("elPrecioFinal").value = precioFinal;


}
