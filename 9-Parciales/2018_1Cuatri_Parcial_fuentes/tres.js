function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;

    precio = prompt("Ingrese precio");
    precio = parseInt(precio);

    porcentaje = prompt("Ingrese porcentaje");
    porcentaje = parseInt(porcentaje);

    precioFinal = precio - (precio * (porcentaje/100))

    document.getElementById("elPrecioFinal").value = precioFinal;


}
