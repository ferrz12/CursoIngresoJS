function mostrar()
{
    var nota;
    var sexo;
    var edad;
    var cont = 0;
    var acumuladorNota = 0;
    var promedioTotal;

    while(cont < 5){

    cont++;

    nota = prompt("Ingresar nota");

    nota = parseInt(nota);

    while(nota < 0 || nota > 10){
        nota = prompt("Ingrese una nota correcta");
        nota = parseInt(nota);
    }

    edad = prompt("Ingrese edad");

    sexo = prompt("Ingrese sexo");
    sexo = sexo.toUpperCase();

    while(sexo != "F" && sexo != "M"){
        sexo = prompt("Ingrese sexo correcto");
        sexo = sexo.toUpperCase();
    }

    acumuladorNota = acumuladorNota + nota;

    }

    promedioTotal = acumuladorNota/cont;

    alert("El promedio total es: " + promedioTotal);


}
