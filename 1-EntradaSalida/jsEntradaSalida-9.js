/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo = 100;
	var resultado;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	resultado = sueldo * 1.1;
	alert(resultado);
	
	// como es un aumento es multiplicado, es * 1.1 
}
