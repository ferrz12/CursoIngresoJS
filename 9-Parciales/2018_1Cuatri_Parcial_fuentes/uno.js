
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese ancho");
    ancho = parseInt(ancho);

    largo = prompt("Ingrese largo");
    largo = parseInt(largo);

    perimetro = 2 * (ancho + largo);

    alert("El perimetro es = " + perimetro);
}
