// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var resultado = {};
  var indices= [];
  for(var i = 0; i < string.length;i++) {
    if(resultado[string[i]]=== undefined) {
      resultado[string[i]] = 1;
    }else {
      resultado[string[i]]++;
    }
  }
  return resultado;
}




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let palabras = s.split('');
  let nuevaPalabra='';
  let otra='';
  for(let i =0; i < palabras.length;i++) {
    if(palabras[i].toUpperCase() === palabras[i]) {
      nuevaPalabra +=palabras[i];
    }else {
      otra +=palabras[i];
    }
  }
  return nuevaPalabra + otra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 // "The Henry Challenge is close!" -->"ehT yrneH egnellahC si !esolc" 
 //"The', 'Henry', 'Challenge', 'is', 'close!" --> "ehT', 'yrneH', 'egnellahC', 'si', '!esolc"

 var palabra= str.split(' ');
 let alReves = ''; 
 for(var i= 0; i < palabra.length;i++) {
  alReves= alReves + ' ' + palabra[i].split('').reverse().join('');
 }
 return alReves.trimStart()
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeritos = numero.toString().split(''); //---> '1','2','5','5','5'
  let otro = numeritos.slice().reverse() ///
  if (numeritos.join() === otro.join()) {
    return 'Es capicua'
  }else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let palabra = cadena.split('');
  let nuevaCadena = '';
  for (let i = 0;i<palabra.length;i++) {
    if (palabra[i] !== 'a' && palabra[i] !== 'b'&& palabra[i] !== 'c' ) {
      nuevaCadena += palabra[i]
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // let nuevaCadena= [];
  // arr.map(elemento => { if (elemento.length < )})
  for(var i = 0; i < arr.length; ++i) {
    for(var j = i + 1; j < arr.length; ++j) {
        
        if(arr[i].length > arr[j].length) {
            var auxiliar = arr[i];
            arr[i] = arr[j];
            arr[j] = auxiliar;
        }
    }
}

return arr;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let intersección = [];
  for(let i = 0; i < 5; i++) {
    arreglo1.filter(elemento => { if (elemento === arreglo2[i]) intersección.push(elemento)})
  }
  return intersección;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

