/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {

	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let edadPromedio;
	let contadorEdad = 0;
	let acumuladorEdad = 0;
	let hombreMaspesado;
	let mayorPesoHombre;
	let flagpeso = 0;

	for (let i = 0; i < 5; i++) {

		nombre = prompt("Ingrese nombre");

		while (!(isNaN(nombre))) {

			nombre = prompt("Error. Ingrese nombre válido");
		}

		peso = parseInt(prompt("Ingrese peso corporal mayor a 0"));

		while (peso < 1 || isNaN(peso)) {

			peso = parseInt(prompt("Error. Ingrese peso corporal valido mayor a 1"));
		}

		sexo = prompt("Ingrese sexo ( f o m)");

		while (sexo != "f" && sexo != "m" ) {

			sexo = prompt("Error. Ingrese sexo válido ( f o m)");
		}

		edad = parseInt(prompt("Ingrese edad entre 1 y 100"));

		while (edad < 1 || edad > 100 || isNaN(edad)) {

			edad = parseInt(prompt("Error. Ingrese edad válida entre 1 y 100"));
		}

		if (sexo == "f") {

			contadorMujeres++;
		}

		contadorEdad++;
		acumuladorEdad += edad;
		edadPromedio = acumuladorEdad / contadorEdad;

		if (flagpeso == 0 && peso > 1 && sexo == "m") {

			mayorPesoHombre = peso;
			hombreMaspesado = nombre;
			flagpeso = 1;

		} else if (peso > 1 && sexo == "m") {

			mayorPesoHombre = peso;
			hombreMaspesado = nombre;

		}
	}

	//a) informar la cantidad de mujeres.

	console.log("La cantidad de mujeres es "+contadorMujeres);

	//	b) la edad promedio en total.
	
	console.log("La edad promedio es "+edadPromedio);

	//		c) el hombre mas pesado.
	
	console.log("El hombre más pesado es "+hombreMaspesado);

}
