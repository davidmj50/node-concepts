const fs = require('fs');

//RECONMENDABLE TRABAJAR DE FORMA ASINCRONA

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        //Leido
        cb(data.toString());
    })
}


leer(__dirname + '/archivo.txt', console.log);


function escribir(ruta, contenido, cd) {
    fs.writeFile(ruta, contenido, function (err) {
        if(err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente!');
        }
    });
}

escribir(__dirname + '/archivo1.txt', 'SOY UN ARCHIVO NUEVO', console.log);
leer(__dirname + '/archivo1.txt', console.log);


//BORRAR
function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}


borrar(__dirname + '/archivo1.txt', console.log);