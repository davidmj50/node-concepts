console.log('algo');

console.info('algo');

console.error('algo');

console.warn('algo');


var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
];
console.log(tabla);
console.table(tabla);


// console.log('Conversacion');
console.group('conversacion');
console.log('Hola');
console.group('BLA');
console.log('Bla bla bla');
console.groupEnd('END');
console.log('adios');
console.groupEnd('END');

console.log('otra cosa');

function function1() {
    console.group('Funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    function2();
    console.log('Hemos vuelto a la funcion 1');
    console.groupEnd('Funcion 1');
}

function function2() {
    console.group('Funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('Funcion 2');
}

console.log('Empezamos');
function1();

//contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');