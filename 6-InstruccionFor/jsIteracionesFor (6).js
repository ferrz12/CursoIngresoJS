function mostrar()
{

var num;
var cantNumPares = 0;

num = prompt("Ingrese numero");

num = parseInt(num);

if(num > 0){

    for(i = 1; i <= num; i++){

    if(i%2 == 0){
        console.log(i);
        cantNumPares++;
    }
}

}else{
    alert("Ingrese numero valido");
}




console.log("cantidad de numeros pares = " + cantNumPares);


}//FIN DE LA FUNCIÓN