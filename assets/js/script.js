console.log("Secuencia de Fibonacci entre 0 y 1000:");
const arrFibonacci = fibonacciSequence()
console.log(arrFibonacci)
console.log("Números pares Fibonacci");
console.log(numerosPares(arrFibonacci));
console.log("Números impares Fibonacci");
console.log(numerosImpares(arrFibonacci));
console.log("------solo Mayusculas-->")
console.log(mayusculas())
console.log("------solo Tipo Fuego-->")
console.log(tipoFuego())

function fibonacciSequence() {
    let secuencia = [0, 1];
    let nroactual = 1;
  
    while (nroactual <= 1000) {
      nroactual = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      if (nroactual <= 1000) {
        secuencia.push(nroactual);
      }
    }
  
    return secuencia;
  }

function numerosPares(npar) {
    return npar.filter((number) => number % 2 === 0);
}

function numerosImpares(nimpar) {
    return nimpar.filter((number) => number % 2 !== 0);
  }

function mayusculas() {
   
    let pokemon =
    [
       'Pikachu','Charmander','Bulbasaur','Squirtle']

    pokemon.map((item) => {
        return item.toUpperCase()
    })
}
function tipoFuego() {
    
    let pokemon = [
        {
            nombre: 'Pikachu',
            tipo: 'Electrico'
        },
        {
            nombre: 'Charmander',
            tipo: 'Fuego'
        },
        {
            nombre: 'Bulbasaur',
            tipo: 'Planta'
        },
        {
            nombre: 'Squirtle',
            tipo: 'Agua'
        }, {
            nombre: 'Charmeleon',
            tipo: 'Fuego'
        }, {
            nombre: 'Weedle',
            tipo: 'bicho'
        }, {
            nombre: 'Charizard',
            tipo: 'Fuego'
        }
    ]

    return pokemon.filter(item => item.tipo == 'Fuego');
 
}
