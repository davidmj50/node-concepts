// console.log(global);
let i = 0;
let intervalo = setInterval(() => {
    i++;
    if(i === 3) {
        clearInterval(intervalo);
    }
    console.log('hola')
}, 1000);


//Una sola vez
setImmediate(function (params) {
    console.log('Hola');
});


// require(''); requerir cualquier modulo

console.log(process);
console.log(__dirname);

console.log(__filename);


//NO usar variables globales preferible utilizar archivos de configuracion

global.miVariable = 'el valor de la variable';

console.log(global.miVariable);
