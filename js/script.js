let respuestaSecreta = 'Blanquita';
let pregunta = 'Nombre de tu primer mascota'

if (pregunta) {

    let opciones = prompt (' Posibles preguntas: \n1 - Pelicula favorita \n2 - Nombre de tu primer mascosta \n3 - Cual fue tu primer escuela')

    switch (opciones) {
        case 1:
            alert ('respuesta incorrecta')
            break;
    
        case 2:
            break;
        
        case 3:
            alert ('respuesta incorrecta')
            break;
        }
}


for (let i = 2; i >= 0; i--) {
    let respuestaUsuario = prompt('Elegí tu respuesta secreta. Tenés ' + (i + 1) + ' oportunidades')
    if (respuestaUsuario === respuestaSecreta) {
        alert('¡Respuesta correcta!');
        break;
    }
    else {
        alert('contrseña incorrecta, te quedan ' + i + ' oportunidades')
    }
}

// No se como escribir que luego de los 3 intentos fallitdos se bloquea el usuario.