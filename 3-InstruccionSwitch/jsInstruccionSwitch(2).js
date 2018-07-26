function mostrar()
{
//tomo la edad  
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Julio":
        alert("abrigate que hace frio");
        break;
    case "Agosto":
        alert("abrigate que hace frio");
        break;
    case "Septiembre":
        alert("Ya pasamos el frio, ahora calor!");
        break;
    case "Octubre":
        alert("Ya pasamos el frio, ahora calor!");
        break;
     case "Noviembre":
        alert("Ya pasamos el frio, ahora calor!");
        break;
    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!");
        break;
    default:
        alert("Falta para el invierno");                
}



}//FIN DE LA FUNCIÓN