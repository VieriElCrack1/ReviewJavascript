import { getHeroeById } from "./review/08-imp-exp";

//  Por defecto las Promise son asincronas
// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         //  Resolve -> cuando es success la respuesta del promise.
//         // resolve();

//         //  Tarea
//         const heroe = getHeroeById(1);
//         //resolve( heroe );
//         reject('No se pudo encontrar el heroe.');
//     }, 2000);

// });

// Then -> que la respuesta se hizo correctamente.
// promesa.then( (heroe) => {
//     console.log('Then de la promesa');
//     console.log(heroe);
// }).catch( err => console.warn(err) );

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe)
                resolve(heroe);
            else
               return reject('No se encontro ningun heroe.');
            
        }, 2000);

    });

}

// getHeroeByIdAsync(10)
//     .then( heroe => console.log('Heroe', heroe))
//     .catch( err => console.warn('Error', err));

// 2da forma, mas limpia.
getHeroeByIdAsync(4)
    .then( console.log )
    .catch( console.warn );