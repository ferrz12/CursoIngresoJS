/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho, largo, cantDeAlambre;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    
    ancho = parseInt(ancho);
    largo = parseInt(largo);

    cantDeAlambre = ((ancho * 2) + (largo * 2)) * 3;

    alert("La cantidad de alambre necesario es: " + cantDeAlambre);

}

function Circulo () 
{
	 var radio, perimetro, cantDeAlambre;

    radio = document.getElementById("Radio").value;
    
    radio = parseInt(radio);

    perimetro = 2 * Math.PI * radio; //Math.PI devuelve el valor exacto de PI con todos sus comas y demas

    cantDeAlambre = radio * 3;

    alert("La cantidad de alambre necesario es: " + cantDeAlambre);
}

function Materiales () 

{
	var ancho, largo, cantDeCemento, cantDeCal;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    
    ancho = parseInt(ancho);
    largo = parseInt(largo);

    cantDeCemento = (ancho * largo) * 2;

    cantDeCal = (ancho * largo) * 3;

    alert("La cantidad de cemento es: " + cantDeCemento + " y la cantidad de bolsas de cal es: " + cantDeCal);
}