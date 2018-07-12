/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    //hacer con else if y descuento en una sola linea
 	var precioLampara = 35;
    var cantLampara;
    var precioFinal;
    var marca;
    
    cantLampara = document.getElementById("Cantidad").value;

    cantLampara = parseInt(cantLampara);

    marca = document.getElementById("Marca").value;

    precioFinal = precioLampara * cantLampara;

    if(cantLampara >= 6){ //A

        precioFinal = precioFinal - (precioFinal * 0.5);

        if(precioFinal > 120){

            precioFinal = precioFinal + (precioFinal * 0.1);

            alert("Usted pago: " + precioFinal);       

        }else{

            document.getElementById("precioDescuento").value = precioFinal;

        }

    }else{
        
        if(cantLampara == 5 && marca == "ArgentinaLuz"){ //B

            precioFinal = precioFinal - (precioFinal * 0.4);

            document.getElementById("precioDescuento").value = precioFinal;

        }else{

            //agregar condicion

            precioFinal = precioFinal - (precioFinal * 0.3);

            document.getElementById("precioDescuento").value = precioFinal;

                if(cantLampara == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){ //C
        
                    precioFinal = precioFinal - (precioFinal * 0.25); // 100 - 25 = 75 ==> 0.75

                    document.getElementById("precioDescuento").value = precioFinal;

                }else{

                        precioFinal = precioFinal - (precioFinal * 0.2);

                        document.getElementById("precioDescuento").value = precioFinal;
                
                    if(cantLampara == 3 && marca == "ArgentinaLuz"){ //D
        
                        precioFinal = precioFinal - (precioFinal * 0.15);

                        document.getElementById("precioDescuento").value = precioFinal;

                    }else{

                            if(cantLampara == 3 & marca == "FelipeLamparas"){
                    
                                precioFinal = precioFinal - (precioFinal * 0.1);

                                document.getElementById("precioDescuento").value = precioFinal;

                            }else{

                                precioFinal = precioFinal - (precioFinal * 0.05);

                                document.getElementById("precioDescuento").value = precioFinal;            
                }
            }            
        }
    }
}
    

}
