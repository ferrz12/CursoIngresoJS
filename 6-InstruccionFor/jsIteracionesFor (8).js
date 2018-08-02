function mostrar()
{

var num;
var contadorDivisores = 0;
var contadorDePrimos = 0;

num = prompt("Ingrese numero");

num = parseInt(num);

for (var p = 1; p <= num ; p++) {

    for(i = 2; i <= p; i++){

        if(num%i == 0){ //los divisores son los numeros que dividen al numero y da 0 de resto

            console.log(i);
            contadorDivisores++;

        }

        if(contadorDivisores != 2){
                console.log("No es primo");
            }else{
                console.log("Es primo");
                contadorDePrimos++;
            }       
}

}

alert("La cantidad de primos = " + contadorDePrimos);




}//FIN DE LA FUNCIÓN