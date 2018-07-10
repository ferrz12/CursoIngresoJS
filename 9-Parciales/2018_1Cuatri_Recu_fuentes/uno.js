
function mostrar()
{
    var base;
    var altura;
    var area;
    var perimetro;

    base = prompt("Ingrese base");
    altura = prompt("Ingrese altura");

    base = parseInt(base);
    altura = parseInt(altura);

    area = (base*altura)/2

    perimetro = 3 * base;

    alert("El area es: " + area + " y el perimetro es: " + base);
}
