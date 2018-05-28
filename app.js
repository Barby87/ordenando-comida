const food = prompt("Hola, qué comida quieres ordenar?");

switch(food) {
    case 'ceviche':
        alert('Muy bien, el total de tu boleta es $4000');
        break;
    case 'empanada chilena':
        alert('Uyuii, son $1200');
        break;
     case 'tacos al pastor':
        alert('Orale, son $1500, buena elección!');
        break;
    case 'hamburguesa':
        alert('Thanks!! El valor de la hamburguesa es $1990');
        break;
    default:
        alert('Oops!!! no tenemos ese plato, aún :(');

}

