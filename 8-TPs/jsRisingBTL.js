/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadoCivil;
 var sueldo;
 var legajo;
 var nacionalidad;
 var validar = true;

 
 while(validar){

     edad = prompt("Ingrese edad");
     
     edad = parseInt(edad);

     if(edad >= 18 && edad <= 90){
        document.getElementById("Edad").value = edad
            }else{
                alert("La edad tiene que ser entre 18 y 90");
                break;  
            }

     sexo = prompt("Ingrese sexo: “M” para masculino o “F” para femenino");       

     if(sexo == "M" || sexo == "F"){
        document.getElementById("Sexo").value = sexo;
            }else{
                alert("Ingrese sexo entre F o M");
                break;
            }

    estadoCivil = prompt("Ingrese estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");        

    estadoCivil = parseInt(estadoCivil);

    switch (estadoCivil) {
        case 1:
            document.getElementById("EstadoCivil").value = "Soltero";                         
            break;
        case 2:
            document.getElementById("EstadoCivil").value = "Casado";                         
            break;
        case 3:
            document.getElementById("EstadoCivil").value = "Divorciado";                         
            break;
        case 4:
            document.getElementById("EstadoCivil").value = "Viudo";                         
            break;                 
        default:
            alert("Ingrese un estado civil correcto");
            break;
    }

    sueldo = prompt("Ingrese sueldo bruto");

    sueldo = parseInt(sueldo);

    if(sueldo >= 8000){
        document.getElementById("Sueldo").value = sueldo;
    }else{
        alert("Ingrese un saldo no menor a 8000");
    }

    legajo = prompt("Ingrese numero de legajo");

    legajo = parseInt(legajo);

    if(legajo >= 0000 && legajo <= 9999){
        document.getElementById("Legajo").value = legajo;
        }else{
            alert("Ingrese un legajo de 4 cifras");
            break;
        }

    nacionalidad = prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

    switch (nacionalidad) {
        case "A":
            document.getElementById("Nacionalidad").value = "Argentino";
            break;
        case "E":
            document.getElementById("Nacionalidad").value = "Extranjero";
            break;
        case "N":
            document.getElementById("Nacionalidad").value = "Nacionalizado";
            break;
           
        default:
            break;
    }

break;                 

 }


}
