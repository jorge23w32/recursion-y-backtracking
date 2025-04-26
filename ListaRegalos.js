let listaRegalos = ['Coche', 'Lego', 'Perro', 'Manzana', 'Castillo', 'Princesa', 'C++'];

function obtenerRegalo(listaRegalos, regaloABuscar, index = 0) {
    if (index === listaRegalos.length) {
        return "El regalo a busar no existe.";
    }
    if (regaloABuscar === listaRegalos[index]) {
        return `El regalo ${listaRegalos[index]} se encuentra en la lista posición ${index+1}`;
    }
    return obtenerRegalo(listaRegalos, regaloABuscar, index + 1);
}

console.log(obtenerRegalo(listaRegalos, "C++"));