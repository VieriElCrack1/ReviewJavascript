
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//Extraer personaje
// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

//Extraer mas facil los personajes con la desestructuracion
const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//  TAREA
//1. Primer valor del arreglo se llamara nombre
//2. Se llamara setNombre
const usesState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }]
};

const [ nombre, setNombre] = usesState( 'Goku' );
console.log( nombre );
setNombre();