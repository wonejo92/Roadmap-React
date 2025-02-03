import {heroes} from "../Data/heroes.js";

export const getHeroesByPubisher = (pub) => {
    // Validamos que sea un publiser que se encuentre en la lista
    const validPublisers = ['DC Comics','Marvel Comics']
    if (!validPublisers.includes(pub)){
        throw new Error(`Invalid publisher pub: ${pub}`)
    }

    return heroes.filter(heroe=>heroe.publisher === pub);
}