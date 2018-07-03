/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;

    nombre = document.getElementById("elNombre").value; //elemente hace referencia a toda la pagina

    //document.getElementById("elNombre") es equivalente a <input type = "text" id = "elNombre">
    
    alert(nombre);
}


