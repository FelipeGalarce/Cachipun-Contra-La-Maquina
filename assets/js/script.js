/* Aca se pide al usuario cuantas veces quiere jugar */

let repeticiones = parseInt(prompt("¿Cuantas Veces Quieres Jugar?"))

/* aca habilito los tooltips que estan sobre los iconos en la pagina */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* en esta seccion estan guardadas las variables que modificare, y que usare para modificar el html */

let puntaje_humano = 0;
const puntaje_humano_span = document.getElementById("marcadorHumano");
let puntaje_maquina = 0;
const puntaje_maquina_span = document.getElementById("marcadorComputador")
const piedra_icon = document.getElementById("piedra")
const papel_icon = document.getElementById("papel")
const tijera_icon = document.getElementById("tijera")
const resultado = document.querySelector(".resultado")
const piedra_div = document.getElementById("piedra")
const tijera_div = document.getElementById("tijera")
const papel_div = document.getElementById("papel")
let repeticiones_solicitadas = 0;

/* Esta es la funcion que se encarga que se acabe el juego cuando se el numero ingresado inicialmente sea igual a la cantidad de veces que se ha jugado y da el mensaje si perdiste o ganaste */

function findeljuego(){
  if (repeticiones_solicitadas == repeticiones && puntaje_humano > puntaje_maquina)
  document.write("<head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title><link rel='stylesheet' href='assets/css/styles.css'><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></head><body><div class='container border border-white rounded bg-dark text-center text-white fw-bold fs-1'>El Juego Termino<br> El Puntaje Final Es: <br> Humano: " + puntaje_humano + " Maquina: "+ puntaje_maquina + "<br> Ganaste!!!, Felicitaciones!!! <br> Si Quieres Jugar Nuevamente Reinicia la Pagina</div></body>")
  else if (repeticiones_solicitadas == repeticiones && puntaje_humano < puntaje_maquina)
  document.write("<head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title><link rel='stylesheet' href='assets/css/styles.css'><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></head><body><div class='container border border-white rounded bg-dark text-center text-white fw-bold fs-1'>El Juego Termino<br> El Puntaje Final Es: <br> Humano: " + puntaje_humano + " Maquina: "+ puntaje_maquina + "<br> Perdiste :(, Lo Siento <br> Si Quieres Jugar Nuevamente Reinicia la Pagina</div></body>")
  else if (repeticiones_solicitadas == repeticiones && puntaje_humano == puntaje_maquina)
  document.write("<head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title><link rel='stylesheet' href='assets/css/styles.css'><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></head><body><div class='container border border-white rounded bg-dark text-center text-white fw-bold fs-1'>El Juego Termino<br> El Puntaje Final Es: <br> Humano: " + puntaje_humano + " Maquina: "+ puntaje_maquina + "<br> Empate, Cero Emocion <br> Si Quieres Jugar Nuevamente Reinicia la Pagina</div></body>")
}
/* Aca se realiza la eleccion de la computadora, el random se multiplica por 3 para que de un numero entre el 1 y el 3, luego se aplica el math floor para que el resultado sea 0, 1 o 2 y se le asigne un valor segun su posicion */
function eleccionComputadora() {
  const eleccion = ["papel", "tijera", "piedra"];
  const aleatorio = Math.floor(Math.random() * 3);
  return eleccion[aleatorio];
}

/* estas son las funciones encargadas de cada posible resultado: ganas, pierdes o empatas, se modifica en el html el resultado, cambia el color del fondo del icono, y se suma una instancia de juego */
/* aca si ganas */
function ganas(eleccionHumano, computadora) {
  repeticiones_solicitadas++;
  puntaje_humano++;
  puntaje_humano_span.innerHTML = puntaje_humano;
  puntaje_maquina_span.innerHTML = puntaje_maquina;
  resultado.innerHTML = `Tu ${eleccionHumano} Le Gana a ${computadora}, Felicitaciones!!!`;
  document.getElementById(eleccionHumano).classList.add("victoria")
  setTimeout(function() {document.getElementById(eleccionHumano).classList.remove("victoria")}, 400)
  console.log(repeticiones_solicitadas)
  console.log(repeticiones)


}
/* aca si pierdes */
function pierdes(eleccionHumano, computadora) {
  puntaje_maquina++;
  repeticiones_solicitadas++;
  puntaje_maquina_span.innerHTML = puntaje_maquina;
  puntaje_humano_span.innerHTML = puntaje_humano;
  resultado.innerHTML = `Tu ${eleccionHumano} Pierde Contra ${computadora}, Lo Siento, Sigue Intentando`;
  document.getElementById(eleccionHumano).classList.add("derrota")
  setTimeout(function() {document.getElementById(eleccionHumano).classList.remove("derrota")}, 400)
  console.log(repeticiones_solicitadas)
  console.log(repeticiones)

  
}
/* aca si empatas */
function empatas(eleccionHumano, computadora) {
  repeticiones_solicitadas++;
  resultado.innerHTML = `Tu ${eleccionHumano} es Igual a ${computadora}, Nadie Gana...Sigue Intentando`;
  document.getElementById(eleccionHumano).classList.add("empate")
  setTimeout(function() {document.getElementById(eleccionHumano).classList.remove("empate")}, 400)
  console.log(repeticiones_solicitadas)
  console.log(repeticiones)
  
}
/* luego de que se hace click en un icono se ejecuta esta funcion, con el parametro de sobre cual icono se hizo click, se compara con una eleccion random, y se segun cada caso se entrega un resultado y se ejecuta la funcion y se comprube si es el fin del juego */
function juego(eleccionHumano) {
  const computadora = eleccionComputadora();
  switch (eleccionHumano + computadora){
    case "papelpiedra":
    case "piedratijera":
    case "tijerapapel":
      ganas(eleccionHumano, computadora);
      findeljuego()
      break
    case "papeltijera":
    case "tijerapiedra":
    case "piedrapapel":
      pierdes(eleccionHumano, computadora);
      findeljuego()
      break
    case "piedrapiedra":
    case "papelpapel":
    case "tijeratijera":
      empatas(eleccionHumano, computadora);
      findeljuego()
      break  
  }
}

/* esta es la parte del codigo que se encarga que al hacer click sobre cualquier icono se entrega un valor que luego es entregado a la funcion juego */

function cachipun() {
  papel_icon.addEventListener("click", function () {
      juego("papel");

  })
  tijera_icon.addEventListener("click", function () {
      juego("tijera");

  })
  piedra_icon.addEventListener("click", function () {
      juego("piedra");

  })
}
/* por ultimo se ejecuta la funcion cachipun */
cachipun()

