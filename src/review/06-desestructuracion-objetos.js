//  Desestructuracion
//  Asignación Desestructurante
const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado'
}

//Extrae los de las llaves del objeto
const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

//  Desestrucurar por parametro
const usesContext = ( { clave, edad, rango = 'Capitán'} ) => {
    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        lngt: {
            latitud: 11.4434,
            longitud: 12.4233,
        }
    }
}

const { nombreClave, anios, lngt} = usesContext( persona );

console.log( nombreClave, anios );
console.log( lngt );
