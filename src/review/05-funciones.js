//  FUNCIONES EN JS
// Es mejor usar funciones como una constante.
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

// FUNCIONES EN FLECHA
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2("Vieri"));
console.log(saludar3("Goku"));
console.log(saludar4());


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_crack_02',
    }
}

console.log(getUser())

//TAREA
//1. Transformar a una funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
function getUserActive(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const userActive = getUserActive("Vieri");

console.log(userActive);

const userWithName = (name) => ({
    uid: 'ABC567',
    username: name
});

console.log(userWithName("Crack"));

