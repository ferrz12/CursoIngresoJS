function mostrar()
{
    var num1;
    var num2;
    var div;
    var suma;

    num1 = prompt("Ingrese el primer numero");

    num2 = prompt("Ingrese el 2do numero");

    if(num1 == num2){
        alert("El numero concatenado es: " + num1 + num2);
        l
            }else if(num1 < num2){
                num1 = parseInt(num1);
                num2 = parseInt(num2);

                div = num1/num2;

                alert("El numero dividido es: " +  div);

                }else if(num1 > num2){
                    num1 = parseInt(num1);
                    num2 = parseInt(num2);

                    suma = num1 + num2;
                    
                    if(suma < 50){
                        alert("La suma es: " + suma + " y es menor a 50");
                        }else{
                            alert("La suma es: " + suma);
                        }
                }





}
