function mostrar()
{
    var nota;
    var sexo;

    nota = prompt("Ingresar nota");

    nota = parseInt(nota);

    while(nota < 0 || nota > 10){
        nota = prompt("Ingrese una nota correcta");
        nota = parseInt(nota);
    }

    sexo = prompt("Ingrese sexo");
    sexo = sexo.toUpperCase();

    while(sexo != "F" && sexo != "M"){
        sexo = prompt("Ingrese sexo correcto");
        sexo = sexo.toUpperCase();
    }

}
