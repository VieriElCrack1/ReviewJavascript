// import { heroes } from './data/heroes';

import heroes, { owners } from '../data/heroes'

console.log(owners);

const getHeroeById = (id) => {
    return heroes.find((index) => index.id === id);
}

console.log(getHeroeById(1));

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));

