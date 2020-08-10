/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {

  let marca;
  let precio;
  let pesoKilos;
  let tipo;
  let pesoTotal;
  let acumuladorPesos = 0;
  let marcaLiquidoMasCaro;
  let liquidoMasCaro = 0;
  let marcaMasBaratoSolido;
  let solidoMasBarato = 0;
  let continuar = "s";
  let flagLiquidos = 0;
  let flagSolidos = 0;

  do {

    marca = prompt("Ingrese marca");

    while (!(isNaN(marca))) {

      marca = prompt("Ingrese marca válida");
    }

    precio = parseInt(prompt("Ingrese precio entre 1 y 150"));

    while (precio < 1 || precio > 150 || isNaN(precio)) {

      precio = parseInt(prompt("Ingrese precio válido, entre 1 y 150"));
    }

    pesoKilos = parseInt(prompt("Ingrese el peso del producto en kilogramos, entre 10 y 100"));

    while (isNaN(pesoKilos) || pesoKilos < 10 || pesoKilos > 100) {

      pesoKilos = parseInt(prompt("Ingrese un peso válido en kilogramos, entre 10 y 100"));
    }

    tipo = prompt("Ingrese si el producto es del tipo sólido (s) o líquido (l)");

    while (tipo != "s" && tipo != "l") {

      tipo = prompt("Error. Ingrese si el producto es del tipo sólido (s) o líquido (l)");
    }

    acumuladorPesos += pesoKilos;
    pesoTotal = acumuladorPesos;

    switch (tipo) {

      case "s":
        
  
        if(flagSolidos == 0 || solidoMasBarato > precio){
        solidoMasBarato = precio;
        marcaMasBaratoSolido = marca;
        flagSolidos = 1;
        break;
        }
  
      case "l": // mas caro

          if(flagLiquidos == 0 || liquidoMasCaro > precio){
          liquidoMasCaro = precio;
          marcaLiquidoMasCaro = marca;
          flagLiquidos = 1;
          break;
          }
    
    }
    
    continuar = prompt("Desea seguir ingresando datos? (s o n)");
    
    
  } while (continuar == "s");
  
      //a) informar el peso total de la compra.
  
      console.log(`El precio total de la compra es ${pesoTotal}`);
  
      //b) la marca del más caro de los líquidos
  
      console.log(`La marca del líquido más caro es ${marcaLiquidoMasCaro}`);
  
      //c) la marca del más barato de los sólidos
  
      console.log(`La marca del sólido más barato es ${marcaMasBaratoSolido}`);
}
