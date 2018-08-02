function mostrar()
{
    var num1;
    var num2;
    var resta;
    var suma;

    num1 = prompt("Ingrese el 1er numero");

    num2 = prompt("Ingrese el 2do numero");

    if(num1 == num2){   
        alert(num1 + num2);
            }else if(num1 > num2){

                num1 = parseInt(num1);
                num2 = parseInt(num2);

                resta = num1 - num2;

                alert("La resta es = " + resta);
                    }else if(num1 < num2){

                            num1 = parseInt(num1);
                            num2 = parseInt(num2);

                            suma = num1 + num2

                            if(suma > 10){
                                alert("La suma es = " + suma + " y supero el 10");
                                    }else{
                                        alert("La suma es: " + suma);
                                    }
                            }

                       

}
