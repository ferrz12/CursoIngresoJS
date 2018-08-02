function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var cont = 0;
    var contHombres = 0;
    var contMujeres = 0;
    var contMayores = 0;
    var contMenores = 0;
    var contHombresMayores = 0;
    var min = 101 ;
    var max = 0;
    var promedioMujeres = 0;
    var promedioHombres = 0;
    var promedioTotal = 0;
    var nombreViejo;
    var nombreJoven;
    var sexoViejo;
    var nombreMujerVieja;

    while(cont < 4){

        cont++;

        nombre = prompt("Ingrese nombre");

        sexo = prompt("Ingrese sexo");
        sexo = sexo.toUpperCase();
        while(sexo != "M" && sexo != "F"){
            sexo = prompt("Ingrese una sexo valido");
            sexo = sexo.toUpperCase();
        }

        edad = prompt("Ingrese edad");
        edad = parseInt(edad);
        while((edad <= 0 || edad >100) || isNaN(edad)){
            edad = prompt("Ingrese una edad valida");
            edad = parseInt(edad);
        }

        if(sexo == "M"){
            contHombres++;
            promedioHombres = promedioHombres + edad;
        }
        
        if(sexo == "F"){
            contMujeres++;
            promedioMujeres = promedioMujeres + edad;
        }

        if(edad >= 18){
            contMayores++;
        }else{
            contMenores++;
        }

        if(sexo == "M" && edad >= 18){
            contHombresMayores++;
        }

        if(edad < min){
            min = edad
            nombreJoven = nombre;
        }
        
        if(edad > max){ // adentro del if sexo == F 
            max = edad;
            nombreViejo = nombre;
            sexoViejo = sexo;

            if(sexo == "F"){
                nombreMujerVieja = nombre;
            }
        }



    }

promedioMujeres = promedioMujeres/contMujeres;
promedioHombres = promedioHombres/contHombres;
promedioTotal = promedioHombres + promedioMujeres;

 document.write("Cantidad de hombres = " + contHombres + "<br>");
 document.write("Cantidad de mujeres = " + contMujeres + "<br>");
 document.write("Cantidad de mayores = " + contMayores + "<br>");
 document.write("Cantidad de menores = " + contMenores + "<br>");
 document.write("Cantidad de hombres mayores = " + contHombresMayores + "<br>");
 document.write("La edad mas baja = " + min + "<br>");
 document.write("La edad mas alta = " + max + "<br>");
 document.write("El promedio de edad de hombres es = " + promedioHombres + "<br>");
 document.write("El promedio de edad de mujeres es = " + promedioMujeres + "<br>");
 document.write("El promedio total es = " + promedioTotal + "<br>");
 document.write("El nombre del mas viejo es = " + nombreViejo + "<br>");
 document.write("El nombre de la mujer mas vieja = " + nombreMujerVieja);

}
