function hola(nombre, miCallback) {
    //console.log('Hola soy una funcion asincrona');
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla...!');
        callbackHablar();
    }, 100);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback)
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso ...');

hola('Carlos', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Terminando proceso..');
    })
});

// hola('Carlos', function(nombre) {
//     adios(nombre, function() {
//         console.log('Terminamos!!!');
//     });
// })

// hola('Juan',function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso..');
//                 });
//             });
//         });
//     });
// });

// hola('Daivid', function(){});
// adios('Daivid',  function(){});
//console.log('Terminando proceso ...');