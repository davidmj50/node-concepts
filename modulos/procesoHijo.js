const { exec, spawn  } = require('child_process');
// const exec = require('child_process').exec;

// exec('ls -la', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });


// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

//apawn: ejecutar un proceso nuevo de node.js
let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato){
    console.log('Esta muerto?',proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function (){
    console.log('EL proceso terminó');
    console.log(proceso.killed);
});