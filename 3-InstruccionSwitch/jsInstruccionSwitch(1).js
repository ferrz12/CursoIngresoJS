function mostrar()
{
//tomo la edad  
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
        alert("que comienzes bien el año!");
        break;
    case "Marzo":
        alert("a clases!");
        break;
    case "Julio":
        alert("Se vienen las vacaciones!");
        break;
    case "Diciembre":
        alert("Felices fiestas");     
        break;
    default:
        alert("No se ingreso ningun mes enunciado");
    break;        
}


}//FIN DE LA FUNCIÓN