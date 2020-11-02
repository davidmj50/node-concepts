function otraFuncion() {
    return seRompe();
}

function seRompe(){
    return 3 + z;
}

function seRompeAsincrono(cb) {
    setTimeout(() => {
        try {
            
            return 3 + z;
        } catch (error) {
            console.error('Error en mi funcion asincrona');
            console.error('Error en mi funcion asincrona')
            cb(error);
        }
        
    });
}

//esto funciona en sincrono
try {
    // otraFuncion();

    //Fuera del evenLoop
    seRompeAsincrono(function (error) {
        console.log('Error asyncrono controlado: ', error);
    });

} catch (error) {
    console.error('Valla, algo se ha roto');
    console.error(error);
    console.error(error.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

//no se ejecuta sin el try catch
console.log('Esto de aqui esta al final');