let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'Sin Web';
console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

console.log('Otra cosa...');
console.log('Ultimo cambio...');

// LAS VARIABLES DE ENTORNO EN UNIX SE COLOCAN EN MAYUSCULA COMO BUENA PRACTICA
//en la consola NOMBRE=David node entorno.js
//en la consola WEB=David.com node entorno.js

//PM2 NO EN DESARROLLO , EN PRODUCCION TENGO EL CODIGO MONITORIZADO, 
//npm install -g pm2 para instalar 
//pm2 start
//pm2 monitor y saca metricas
//pm2 status paraver que aplicaciones tenemos corriendo
//pm2 log muestra todos los logs
//pm2 stop para parar con la ruta o el id de aplicacion
