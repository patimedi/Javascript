//Se pide nombre para sucribirse a membresía

let nombre = prompt('Ingresá tu nombre');


let opciones = prompt('¿Querés suscrbirte para recibir un descuento en tu membresía?: \n1 - Sí \n2 - No')
let membresiaPromocion = ('Descuento del 10% hasta el 31 de julio');

    
switch (opciones) {
    case '1':
        prompt('ingresa tu mail')
        alert('El descuento es del 10% hasta el 31 de julio')

        const resta = function (precioNormal, descuento) { return 1100 - 110 }
        alert('el precio con descuento es ' + resta(1100 - 110) + ' ¡Gracias!')
        break;
    case '2':
        alert('Gracias por tu respuesta, te esperamos pronto')
        break;
}

//costos

let precioNormal = 1100;
let descuento = 110; // 10% de descuento