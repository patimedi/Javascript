//Se pide nombre para sucribirse a membresía

let nombre = prompt('Ingresá tu nombre');


let opciones = prompt('¿Querés suscrbirte para recibir un descuento en tu membresía?: \n1 - Sí \n2 - No')
let membresiaPromocion = ('Descuento del 10% hasta el 31 de julio');


switch (opciones) {
    case '1':
        prompt('ingresa tu mail')
        alert('El descuento es del 10% hasta el 31 de julio')
        break;
    case '2':
        alert('Gracias por tu respuesta, te esperamos pronto')
        break;
}

const resta = function (precioNormal, descuento) { return precioNormal - descuento} //Puse el parseInt en varios lugares y en el alert me sigue arrojando NaN
alert('el precio con descuento es ' + resta(1100 - 110) + ' ¡Gracias!')

//costos
let precioNormal = 1100;
let descuento = 110; // 10% de descuento

//Array de noticias pagas para los sucriptores de la membresía
const noticiasPagas = [Noticia1, Noticia2, Noticia3, Noticia4, Noticia5, Noticia6, Noticia7, Noticia8, Noticia9, Noticia10, Noticia11, Noticia12]
