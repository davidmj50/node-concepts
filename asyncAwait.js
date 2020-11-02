async function hola(nombre, miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla...!');
            // resolve(nombre)
            resolve();
        }, 100);
    });
}

async function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);

    })
}

async function main() {
    let nombre= await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}
console.log('Empezamos el proceso');
main();
console.log('Segunda instruccion en ejecutarse');
// hola('Daivid', function(){});
// adios('Daivid',  function(){});
//console.log('Terminando proceso ...');