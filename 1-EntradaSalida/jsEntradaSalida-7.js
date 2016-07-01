/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno;
	var numDos;
	var suma;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	suma = numUno + numDos;

	alert("La suma es: " + suma);

}

function restar()
{
	var numUno;
	var numDos;
	var resta;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	resta = numUno - numDos;

	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var multi;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	multi = numUno * numDos;

	alert("La multiplicacion es: " + multi);
}

function dividir()
{
	var numUno;
	var numDos;
	var divid;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	divid = numUno / numDos;

	alert("La division es: " + divid);
	alert("nada");
}

