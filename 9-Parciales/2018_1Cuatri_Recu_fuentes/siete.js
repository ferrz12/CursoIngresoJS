function mostrar()
{
    var nota;
    var sexo;
    var edad;
    var cont = 0;
    var acumuladorNota = 0;
    var promedioTotal;
    var bandera = true;
    var min = 0;
    var minEdad = 0;
    var sexoNotaBaja;
    var contAlumno = 0;
    var sexoJoven;
    var notaJoven;
    var edadPrimerMujer;
    var notaPrimerMujer;

    while(cont < 3){

    cont++;

    nota = prompt("Ingresar nota");

    nota = parseInt(nota);

    while(nota < 0 || nota > 10){
        nota = prompt("Ingrese una nota correcta");
        nota = parseInt(nota);
    }

    edad = prompt("Ingrese edad");
    edad = parseInt(edad);

    sexo = prompt("Ingrese sexo");
    sexo = sexo.toUpperCase();

    while(sexo != "F" && sexo != "M"){
        sexo = prompt("Ingrese sexo correcto");
        sexo = sexo.toUpperCase();
    }

    acumuladorNota = acumuladorNota + nota;

    if(bandera == true || nota < min){ //b
        min = nota;
        sexoNotaBaja = sexo; 
    }

    if(bandera == true || edad < minEdad){ //d
        sexoJoven = sexo;
        notaJoven = nota;
    }

    
    if(bandera == true && sexo == "F"){ //d
        edadPrimerMujer = edad;
        notaPrimerMujer = nota;
    }

    bandera = false;
    
    if(edad > 18 && nota >= 6){ //c
        contAlumno++;
    }

    }

    promedioTotal = acumuladorNota/cont; //a

    document.write("Promedio notas totales " + promedioTotal + "<br>"); //a
    document.write("Nota mas baja: " + min + " Sexo: " + sexoNotaBaja + "<br>");//b
    document.write("Cantidad de mayores de 18 y con nota mayor o igual a 6: " + contAlumno + "<br>"); //c
    document.write("Sexo mas joven: " + sexoJoven + " Nota: " + notaJoven + "<br>"); //d
    

    if(edadPrimerMujer != undefined && notaPrimerMujer != undefined){
        document.write("Edad primer mujer: " + edadPrimerMujer + " Nota: " + notaPrimerMujer);
    }else{
        document.write("No se ingreso ninguna mujer");
    }

    

    

    



}
