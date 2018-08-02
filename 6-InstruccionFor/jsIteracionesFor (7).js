function mostrar()
{

var num;
var cantNumDivisores = 0;

num = prompt("Ingrese numero");

num = parseInt(num);

for(i = 1; i < num + 1; i++){

if(num%i == 0){
    console.log(i);
    cantNumDivisores++;
}

}

console.log("Cantidad de numeros divisores = " + cantNumDivisores);


}//FIN DE LA FUNCIÓN