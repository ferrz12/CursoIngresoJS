function mostrar()
{
    var nombre;
    var cantPagina;
    var cantVenta;
    var tema;
    var rta = "si";
    var contLibroPagPar = 0;
    var contLibroPagImpar = 0;
    var contVentaCero = 0;
    var sumaVenta = 0;
    var contVenta = 0;
    var promedio;
    var sumaProgramacion = 0;

    while(rta == "si"){

        nombre = prompt("Ingrese nombre: ");

        cantPagina = prompt("Ingrese cantidad de paginas: ");
        cantPagina = parseInt(cantPagina);

        cantVenta = prompt("Ingrese cantidad de ventas: ");
        cantVenta = parseInt(cantVenta);

        while(cantVenta < 0){
                cantVenta = prompt("Ingrese una cantidad de ventas correcta: ");
                cantVenta = parseInt(cantVenta);
        }

        tema = prompt("Ingrese tema ");

        while(((tema != "robotica" && tema != "programacion") && tema != "bases de datos") && tema != "patrones"){
            tema = prompt("Ingrese tema correcto: ");
        }

        if(cantPagina % 2 == 0){
           contLibroPagPar++;
                }else{
                    contLibroPagImpar++;
                    }
                 
        if (cantVenta == 0){
            contVentaCero++;
        }
        
        if(tema == "programacion"){
            sumaProgramacion = sumaProgramacion + cantPagina;
        }

        sumaVenta = sumaVenta + cantVenta;
        contVenta++;

        rta = prompt("Desea seguir ingresando libros?");

    }

    promedio = sumaVenta/contVenta;

    document.write("Cant de libro con pag pares: " + contLibroPagPar + "<br>");
    document.write("Cant libro con pag impares: " + contLibroPagImpar + "<br>");
    document.write("Cantidad de ventas cero: " + contVentaCero + "<br>");
    document.write("Promedio de todas las ventas: " + promedio + "<br>");
    document.write("Suma pag de programacion: " + sumaProgramacion + "<br>");



}
