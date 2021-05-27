let boolRol = false;
const salarioBrutoOfrecido = 107000;
const minImponibleGanancias = 125000;
const roles = [
  "Gasista",
  "Plomero",
  "Operario",
  "Jefe de Piso",
  "Jefe de Planta",
  "Jefe de Sector",
];

//Clase empleado
class empleado {
  constructor(
    nombre,
    rol,
    salarioBrutoPretendido,
    salarioNeto,
    aportaGanancias
  ) {
    (this.nombre = nombre),
      (this.salarioBrutoPretendido = salarioBrutoPretendido),
      (this.salarioNeto = salarioNeto),
      (this.aportaGanancias = aportaGanancias),
      (this.rol = rol);
  }
  saludar(){
    alert(`Hola ${this.nombre}`)
  }
}

//Calcula el salario neto en base a un netoFinal entre el salario bruto ofrecido y pretendido por el empleado.
const promediarNeto = (salarioBrutoOfrecido, salarioBrutoPretendido) => {
  netoFinal = (salarioBrutoOfrecido + salarioBrutoPretendido) / 2;
  let deducciones = [11, 3, 3];
  for (let i = 0; i < deducciones.length; i++) {
    netoFinal = netoFinal - (netoFinal * deducciones[i]) / 100;
  }

  if (roles.includes(rol)) {
    bono_X_rol(rol);
  }
  return netoFinal;
};

//Devuelve true o false si aporta o no Impuesto a las ganancias en base a un minimo imponible de ganancias ficticio.
const aportaGanancias = (netoFinal) => {
  if (netoFinal >= minImponibleGanancias) {
    return true;
  }
  return false;
};

//Realiza un ajuste de acorde al rol elegido
const bono_X_rol = (rol) => {
  switch (rol) {
    case "Gasista":
      netoFinal += 3565;
      break;
    case "Plomero":
      netoFinal += 3430;
      break;
    case "Operario":
      netoFinal += 1750;
      break;
    case "Jefe de Piso":
      netoFinal += 7580;
      break;
    case "Jefe de Sector":
      netoFinal += 5690;
      break;
    case "Jefe de Planta":
      netoFinal += 15575;
      break;
  }
};

const validarRol = (rol) => {
  if (roles.includes(rol)) {
    return (boolRol = true);
  } else {
    return (boolRol = false);
  }
};

function sub() {
  //Codigo
  //nombre = prompt("Por favor indique su nombre").toUpperCase();

  /*
  salarioBrutoPretendido = parseInt(
    prompt("Por favor ingrese su salario bruto pretendido.")
  );
  */
  //rol = prompt("Ingrese el rol a ocupar.");
  nombre = document.getElementById("nomb").value;
  salarioBrutoPretendido = document.getElementById("salarioPret").value;
  rol = document.getSelection("rol");

  const empleado1 = new empleado(
    nombre,
    validarRol(rol) ? rol : "N/A",
    salarioBrutoPretendido,
    promediarNeto(salarioBrutoOfrecido, salarioBrutoPretendido),
    aportaGanancias(netoFinal) ? "Si" : "No"
  );

  console.log(empleado1);
  empleado1.saludar();
  if (boolRol) {
    alert(`Su salario neto se vio afectado por su 
    especialidad de ${empleado1.rol} con un monto a favor como bonificacion.
    Su salario neto es ${empleado1.salarioNeto}`);
  } else {
    alert(`Su salario neto es ${empleado1.salarioNeto}`);
  }
}
