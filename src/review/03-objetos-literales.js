
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 655443423,
        lat: 14.344423,
        lng: 34.564454,  
    }
};


//Las llaves significan que es un objeto -> {} 

//  Esto no se hace X -> eso hace copiar la referencia del objeto, no sirve. Es mejor crear un
//  nuevo objeto.
const persona2 = persona;
persona2.nombre = 'Peter';



//  Aca hay una forma mas facil de crear objetos sin su referencia
const persona3 = { ...persona };
persona3.nombre = 'Juan';

console.log( persona2 );
console.log( persona );
console.log( persona3 );
