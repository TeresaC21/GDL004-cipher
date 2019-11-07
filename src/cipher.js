window.cipher = {

  encode: (msjUsuario, espacios ) => {
    let mCifradoArray = []; //array vacio agregue el valor con .push de ascii con la formula de ascii
    let converStringCifrado = '';

    for (let i = 0; i < msjUsuario.length; i++) { //length:lee la cantidad de letras que hay en el string
      const msjAscii = msjUsuario[i].charCodeAt();//charCodeAt:devuelve el valor unicode del caracter en el indice proporcionado
      const formula = ((msjAscii-65+espacios)%26+65);//formula codigo ascii (x-65+n)%26+65
      mCifradoArray.push(formula);// que me agregue en mCifradoArray que esta vacio el valor, agregue el valor de ascii con la formula de ascii
      converStringCifrado += String.fromCharCode(mCifradoArray[i]);//convertir a cadena string
    }
    //console.log(formula);
    //console.log(espacios);
    //console.log(msjUsuario);
    return converStringCifrado;
  },
  
  decode: (msjUsuario, espacios) => {
    let mDescifradoArray = [];
    let converStringDesc = '';

    for (let i = 0; i < msjUsuario.length; i++) { //length:lee la cantidad de letras que hay en el string
      const msjAscii = msjUsuario[i].charCodeAt();
      const formulaDesc = ((msjAscii+65-espacios)%26+65);//formula codigo ascii (x-65+n) para decifrar
      mDescifradoArray.push(formulaDesc);// que me agregue en mDecifradoArray que esta vacio el valor, agregue el valor de ascii con la formula de ascii
      converStringDesc += String.fromCharCode(mDescifradoArray[i]);
    }
    //console.log(msjUsuario);
    //console.log(mDescifradoArray);
    return converStringDesc;

  }
};
//Cifrar

/*let msjUsuario = 'HOLA'; // mensaje que escribiria el usuario
let mCifradoArray = []; //array vacio agregue el valor con .push de ascii con la formula de ascii
let converStringCifrado = '';
let espacios = 7;

for (let i = 0; i < msjUsuario.length; i++) { //length:lee la cantidad de letras que hay en el string
  let msjAscii = msjUsuario[i].charCodeAt();//charCodeAt:devuelve el valor unicode del caracter en el indice proporcionado
  let formula = ((msjAscii-65+espacios)%255+65);//formula codigo ascii (x-65+n)
  mCifradoArray.push(formula);// que me agregue en mCifradoArray que esta vacio el valor, agregue el valor de ascii con la formula de ascii
  converStringCifrado += String.fromCharCode(mCifradoArray[i]);//convertir a cadena string

  }
  console.log(msjUsuario);
  console.log(mCifradoArray);
  console.log(converStringCifrado);

//Decifrar
let mDescifradoArray = [];
let converStringDesc = '';
decode: {
for (let i = 0; i < mCifradoArray.length; i++) { //length:lee la cantidad de letras que hay en el string
  let formulaDesc = ((mCifradoArray[i]+65-espacios)%255-65);//formula codigo ascii (x-65+n) para decifrar
  mDescifradoArray.push(formulaDesc);// que me agregue en mDecifradoArray que esta vacio el valor, agregue el valor de ascii con la formula de ascii
  converStringDesc += String.fromCharCode(mDescifradoArray[i]);
}
console.log(msjUsuario);
console.log(mDescifradoArray);
console.log(converStringDesc);

/*  if (espacios > 0 && espacios <= 100){

console.log(espacios);
}

function seleccionar(selecEspacios) {
let numberSelected = 0;
for (var i = 0; i < selecEspacios.options.length; i++) {
if (selecEspacios.options[i].selected) {
numberSelected++;
}
}
*/
// NO ESTA TERMINADO ES PARA OFFSET
    //for (let i = 0; i < mCifradoArray; i++) {
      //let eleccion = mCifradoArray[i];
      //espacios.push(eleccion);
  //  }
//let converString = mCifradoArray.join();//convertir a string
/*const abecedario = ['A','B','C','D','E','F','G','H','I','J','K',
'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
let mensajeIndex= [];
let mensajeIndexCifrado = [];

const cifrar = (mensaje) => {
let mensajeArray = mensaje.toUpperCase().split('');
abecedario.forEach( function(letraAbc, iAbc) {
mensajeArray.forEach( function(letraM, iM) {
if (letraAbc == letraM) {
mensajeIndex.push(iAbc);
}
});
});
return mensajeIndex;
}
cifrar('Hola');*/
 /*
 let letras = function( alfabeto = ['A','B','C','D','E','F','G','H','I','J','K',
                        'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']){

    for(let i = 0; i < alfabeto.length; i++){
          if(letras[]);
      }
  }
  letras();
  letras();



    /*  let valorFijo = offset
       let numLetras = ['A','B','C','D','E','F','G','H','I','J','K',
                             'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
       let residuo = 26

     forech*/


/*cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el
alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el
alfabeto y string el mensaje (texto) que queremos descifrar.*/
