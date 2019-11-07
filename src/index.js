
/*Acá escribirás todo el código que tenga que ver con la interacción del DOM (seleccionar, actualizar y manipular
elementos del DOM y eventos). Es decir, en este archivo deberás invocar a cipher.encode(offset, string)
y cipher.decode(offset, string) según sea necesario para actualizar el resultado en la pantalla (UI).*/

//seccion para que guarde el valor del mensaje que ingresas en textarea
document.querySelector('#btnCifrar').addEventListener('click',
function(e) {
  e.preventDefault();

  let mensaje = document.querySelector('#palabra').value; //guarde valor del mensaje
  let offset = document.querySelector('#select').value; //guarde valor de espacios
  let traerMsj = window.cipher.encode(mensaje, parseInt(offset));

  document.querySelector('#msjCifrado').textContent =  traerMsj;//mostrar valor que guardamos de mensaje y espacio
});

//seccion para que guarde el valor del mensaje que ingresas en textarea
document.querySelector('#btnDescifrar').addEventListener('click',
function(e) {
  e.preventDefault();

  let mensaje = document.querySelector('#pegaCifrado').value; //guarde valor del mensaje
  let offset = document.querySelector('#selectDesc').value; //guarde valor de espacios
  let traerMsjDesc = window.cipher.decode(mensaje, parseInt(offset));

  document.querySelector('#msjDecifrado').textContent =  traerMsjDesc;//mostrar valor que guardamos de mensaje y espacio
});

// al seleccionar botón cifrar se muestre el mensaje: ¡Genial! ahora está cifrado tu mensaje'
document.querySelector('#btnCifrar').addEventListener('click',
function(e){
  e.preventDefault();

  document.querySelector('#formDecifrar').classList.add('esconder');
  document.querySelector('#inicio').classList.remove('esconder');
  document.querySelector('#good').textContent =  '¡Genial! ahora está cifrado tu mensaje';
});

// al seleccionar boton decifrar se muestre el mensaje: ¡Genial! ahora está decifrado tu mensaje'
document.querySelector('#btnDescifrar').addEventListener('click',
function(e){
  e.preventDefault();

  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#formDecifrar').classList.remove('esconder');
  document.querySelector('#good1').textContent =  '¡Genial! ahora está decifrado tu mensaje';
});

//configurar botón copiar cifrado para pegar en siguiente pantalla de decifrar
let copiarCifrado;
document.querySelector('#btnCopiarCifrado').addEventListener('click',
function(e){
  e.preventDefault();

  copiarCifrado = document.querySelector('#msjCifrado').value;

  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#formDecifrar').classList.remove('esconder');
  document.querySelector('#pegaCifrado').textContent =  copiarCifrado;
});
//_______________________________________________________________________________
// Traer el valor de offset
let valorCopiarOffset;
document.querySelector('#btnCopiarCifrado').addEventListener('click',
function(e){
  e.preventDefault();

  valorCopiarOffset = document.querySelector('#select').value;//este valor select es el id del primer offset que el usuario captura

  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#formDecifrar').classList.remove('esconder');
  document.querySelector('#selectDesc').textContent =  parseInt(valorCopiarOffset);
});

// al dar click botón finalizar en la primer seccion muestre mensaje: ¡Hasta pronto!
document.querySelector('#btnFinalizar1').addEventListener('click',
function(e){
  e.preventDefault();

  document.querySelector('#msjBye').value;

  document.querySelector('#formDecifrar').classList.add('esconder');
  document.querySelector('#inicio').classList.remove('esconder');
  document.querySelector('#bye').textContent =  '¡Hasta pronto!';
});

// al dar click botón finalizar en la segunda seccion muestre mensaje: ¡Hasta pronto!
document.querySelector('#btnFinalizar2').addEventListener('click',
function(e){
  e.preventDefault();

document.querySelector('#msjBye2').value;

  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#formDecifrar').classList.remove('esconder');
  document.querySelector('#bye2').textContent =  '¡Hasta pronto!' ;
});
