/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var p1;
    var p2;
    var p3;
    var suma;

    p1 = document.getElementById("PrecioUno").value;
    p2 = document.getElementById("PrecioDos").value;
    p3 = document.getElementById("PrecioTres").value;

    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);

    suma = p1 + p1 + p3;

    alert("La suma es: " + suma);


}
function Promedio () 
{
    var p1;
    var p2;
    var p3;
    var promedio;

    p1 = document.getElementById("PrecioUno").value;
    p2 = document.getElementById("PrecioDos").value;
    p3 = document.getElementById("PrecioTres").value;

    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);

    promedio = (p1 + p1 + p3)/3;

    alert("El promedio es: " + promedio);
	
}
function PrecioFinal () 
{
	var p1;
    var p2;
    var p3;
    var IVA;
    var precioFinal;

    p1 = document.getElementById("PrecioUno").value;
    p2 = document.getElementById("PrecioDos").value;
    p3 = document.getElementById("PrecioTres").value;

    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);

    IVA = (p1 + p2 + p3) * 0.21;

    precioFinal = (p1 + p1 + p3) + IVA ;

    alert("El precio es: " + precioFinal);
}