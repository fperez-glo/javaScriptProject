const salarioBrutoOfrecido = 107000;
const minImponibleGanancias = 125000;

//Clase empleado
class empleado {
    constructor(nombre, salarioBrutoPretendido, salarioNeto, aportaGanancias, rol) {   
        this.nombre = nombre,
        this.salarioBrutoPretendido = salarioBrutoPretendido,
        this.salarioNeto = salarioNeto,
        this.aportaGanancias = aportaGanancias,
        this.rol = rol
    }
    ajuste_X_Rol() { //TODO:
        this.ajuste = switch (this.rol){
                            case "Obrero":
                                this.salarioNeto - 2000
                        }
    }
};

//Calcula el salario neto en base a un promedio entre el salario bruto ofrecido y pretendido por el empleado.
const promediarNeto = (salarioBrutoOfrecido, salarioBrutoPretendido) => {
    promedio = (salarioBrutoOfrecido + salarioBrutoPretendido) / 2
    let porcentajes = [11,3,3]
    for (let i = 0; i < porcentajes.length; i++) {
        promedio = promedio-((promedio*porcentajes[i])/100);
    }
    return promedio
};

//Devuelve true o false si aporta o no Impuesto a las ganancias en base a un minimo imponible de ganancias ficticio.
const aportaGanancias = (promedio) => {
    if (promedio >= minImponibleGanancias) {
        return true;
    }
    return false
}


//Codigo
nombre = prompt('Por favor indique su nombre');
salarioBrutoPretendido = parseInt(prompt('Por favor ingrese su salario bruto pretendido.'));
rol = prompt('Ingrese el rol a ocupar.')

const empleado1 = new empleado(nombre,salarioBrutoPretendido,promediarNeto(salarioBrutoOfrecido,salarioBrutoPretendido),aportaGanancias(promedio) ? "Si" : "No", rol);
console.log(empleado1);