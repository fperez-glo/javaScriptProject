let nombres = [
                {id:1, nombre:'Facundo', edad:24}, 
                {id:2, nombre:'Agostina', edad:23}, 
                {id:3, nombre:'Cristian', edad:26}, 
                {id:4, nombre:'Veronica', edad:13}, 
                {id:5, nombre:'Daniel', edad:78}, 
                {id:6, nombre:'Abigail', edad:57},
                {id:7, nombre:'Patricio', edad:2}
                ]

//Ordena de menor a mayor por edad
nombres.sort(((a,b) => (a.edad - b.edad)))
console.log(nombres)
