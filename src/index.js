// import { heroes } from './data/heroes';

import { heroes } from './data/heroes'

const getHeroeById = (id) => {
    return heroes.find((index) => index.id === id);
}

console.log(getHeroeById(1));

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));

