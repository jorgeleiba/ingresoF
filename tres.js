/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let destino;
	let temporada;
	let cantidadDePasajeros;
	let lugarMaselegido;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let promedioInvierno;
	let contadorPasajeros = 0;
	let acumuladorPasajeros = 0;
	let contadorMujeres = 0;
	let contadorVarones = 0;
	let seguir = "s";


	do {

		sexo = prompt("Ingrese el sexo del titular ( f o m)");

		while (sexo != "f" && sexo != "m") {

			sexo = prompt("Error. Ingrese sexo válido ( f o m)");
		}

		destino = prompt("Ingrese el destino (bariloche, cataratas o salta)");

		while (destino != "bariloche" && destino != "cataratas" && destino != "salta") {

			destino = prompt("Ingrese un destino válido (bariloche, cataratas o salta)");
		}

		temporada = prompt("Ingrese la temporada de su viaje (otoño,invierno, verano,primavera)");

		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {

			temporada = prompt("Ingrese una temporada válida (otoño,invierno, verano,primavera)");
		}

		cantidadDePasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));

		while (isNaN(cantidadDePasajeros) || cantidadDePasajeros < 1) {

			cantidadDePasajeros = parseInt(prompt("Ingrese una cantidad de pasajeros válida"));
		}

		if (temporada == "invierno") {

			acumuladorPasajeros += cantidadDePasajeros;
			contadorPasajeros++;
			promedioInvierno = acumuladorPasajeros / contadorPasajeros;
		}

			switch (destino) {
				case "bariloche":
					contadorBariloche++;
					break;
				case "cataratas":
					contadorCataratas++;
					break;
				case "salta":
					contadorSalta++;
					break;
			}


			switch (sexo) {

				case "f":
					contadorMujeres++;
					break;

				case "m":
					contadorVarones++;
					break;
			}

			seguir = prompt("Desea seguir ingresando viajes (s o n)");


		} while (seguir == "s")


			if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
				lugarMaselegido = "bariloche";

			} else if (contadorCataratas > contadorSalta) {
				lugarMaselegido = "cataratas";

			} else {
				lugarMaselegido = "salta";
			}

		if (contadorMujeres > contadorVarones) {

			console.log("El sexo de titular que lleva más pasajeros es femenino");
		} else {
			console.log("El sexo de titular que lleva más pasajeros es masculino");
		}

		console.log("El promedio de personas por viaje,  que viajan en invierno es " + promedioInvierno);

		console.log("El lugar más elegido es "+lugarMaselegido);

	}

