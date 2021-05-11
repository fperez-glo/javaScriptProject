
nombre = prompt('Por favor indique su nombre');
while (!nombre.trim()){
    nombre=prompt('No puede saltar este paso. Por favor indique su nombre.')
};

edad = parseInt(prompt('Indique su edad'));
while (isNaN(edad) ||  edad == '' || edad <=0 || edad > 120)//(!edad.isInteger() && edad<=0) 
{
    edad = parseInt(prompt('Por favor indique una edad valida.'))
};

if (nombre && edad>=18) {
    alert(`Su nombre es ${nombre} y es mayor de edad.`)
} else {
    alert(`Su nombre es ${nombre} y es menor de edad.`)
};



