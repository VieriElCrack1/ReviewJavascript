
const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// }else {
//     mensaje = 'Inactivo';
// }

//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
//const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';

// Sintaxis corta de if
const mensaje = (activo) && 'Activo';
const mensajeNegative = !activo && 'Activo';

console.log(mensaje);
console.log(mensajeNegative);

