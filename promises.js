const { hasUncaughtExceptionCaptureCallback } = require("process");

function hola(nombre, miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla...!');
            // resolve(nombre)
            reject('Hay un error');
        }, 100);
    });
}

function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);

    })
}

//
console.log('Iniciando el proceso');
hola('Hola')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error');
        console.log(error);

    })