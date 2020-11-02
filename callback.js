function hola(nombre, miCallback) {
    //console.log('Hola soy una funcion asincrona');
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}
function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso ...');
hola(nombre,function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso..');
    })
});

// hola('Daivid', function(){});
// adios('Daivid',  function(){});
//console.log('Terminando proceso ...');