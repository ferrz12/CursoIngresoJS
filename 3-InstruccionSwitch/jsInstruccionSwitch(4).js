function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
		
switch (mesDelAño) {

    case "Febrero":
        alert("Tiene 28");
    break
    case "Abril":
        alert("Tiene 30");
    break     
    case "Junio":
        alert("Tiene 30");
    break     
    case "Septiembre":
        alert("Tiene 30");
    break    
    case "Noviembre":
        alert("Tiene 30");
    break                            
    default:
        alert("este mes tiene 31 dias");
}


}//FIN DE LA FUNCIÓN