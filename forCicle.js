let array = []
let valor = 5
const oLog = console.log


while (array.length != 5) {
    nombre = prompt(`Ingrese ${valor} nombres distintos`).toUpperCase()
    
    if (!array.includes(nombre) && nombre !=''){
        array.push(nombre)
        valor--
    }
}

for (let i = 0; i < array.length; i++) {
    oLog(array[i]);
}

